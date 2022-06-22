// executed from global.js on load
export default function () {
    
    // get the cart and call init() passing in cart
    ExtendBigCommerce.getCart(function (error, cart) {
        init(cart)
    })

    // variables to be assigned later
    var cartId = null;
    var localCart = null;
    var products = [];

    // localCart helper function to removeItemFromCart
    function removeItemFromCart(itemId){
        products = products.filter(product => {
            return product.id !== itemId
        })

        var foundCustomItem = localCart.lineItems.customItems.find(function(item){
            return item.id === itemId
        })

        var foundPhysicalItem = localCart.lineItems.physicalItems.find(function(item){
            return item.id === itemId
        })

        if(foundCustomItem){
            localCart.lineItems.customItems = localCart.lineItems.customItems.filter(item => {
                return item.id !== foundCustomItem.id
            })
        }

        if(foundPhysicalItem){
            localCart.lineItems.physicalItems = localCart.lineItems.physicalItems.filter(item => {
                return item.id !== foundPhysicalItem.id
            })
        }
    }

    // localCart helper function to updateCartItemQty
    function updateCartItemQty(itemId, quantity){

        products = products.map(product => {
            if(product.id === itemId){
                product.quantity = quantity
            }
            return product
        })

        var foundCustomItem = localCart.lineItems.customItems.find(function(item){
            return item.id === itemId
        })

        var foundPhysicalItem = localCart.lineItems.physicalItems.find(function(item){
            return item.id === itemId
        })

        if(foundCustomItem){
            localCart.lineItems.customItems = localCart.lineItems.customItems.map(item => {
                if(item.id === itemId){
                    item.quantity = quantity
                }
                return item
            })
        }

        if(foundPhysicalItem){
            localCart.lineItems.physicalItems = localCart.lineItems.physicalItems.map(item => {
                if(item.id === itemId){
                    item.quantity = quantity
                }
                return item
            })
        }

    }

    // finds and returns the Extend warranty for the productId passed in filtering for ;xtd;
    function isWarrantyCheck(productId) {
        if (products && products.length > 0) {
            var productFound = products.find(function (product) {
                return product.id === productId
            })
            if (productFound && productFound.sku) {
                return productFound.sku.indexOf(';xtd;') > -1
            }
        }
    }

    // finds and returns productSku and productQuantity for the productId passed in
    function isProductCheck(productId) {
        if (products && products.length > 0) {
            var productFound = products.find(function (product) {
                return product.id === productId
            })
            if (productFound && productFound.sku) {
                return {
                    productId: productFound.sku,
                    productQuantity: productFound.quantity
                }
            }
        }
    }

    // finds and returns planInformation for warranties
    function getPlanInformation(productId, isWarranty, updatedQuantity) {
        var warrantyFound;
        var productFound;
        var productSku;
        var planId;

        if(!products) return;

        if(isWarranty){
            warrantyFound = products.find(function (product) {
                return product.id === productId
            })

            if (warrantyFound && warrantyFound.sku) {
                var data = warrantyFound.sku.split(';xtd;')

                planId = data[0]
                productSku = data[1]

                productFound = products.find(function(product){
                    return product.sku === productSku
                })
                if(!productFound){
                    productFound = {quantity: 0}
                }
            }
        } else {
            productFound = products.find(function (product) {
                return product.id === productId
            })

            if (productFound && productFound.sku) {
                warrantyFound = products.find(function(product){
                    return product.sku.indexOf(';xtd;') > -1 && product.sku.indexOf(productFound.sku) > -1;
                })
                if(warrantyFound && warrantyFound.sku){
                    var data = warrantyFound.sku.split(';xtd;')

                    planId = data[0]
                    productSku = data[1]
                }
            }
        }
        if(productFound && warrantyFound && productId && productSku){
            if(isWarranty && updatedQuantity){
                warrantyFound.quantity = updatedQuantity
            } else if(!isWarranty && updatedQuantity){
                productFound.quantity = updatedQuantity
            }
            return {
                planId,
                productId: productSku,
                warrantyQuantity: warrantyFound.quantity,
                productQuantity: productFound.quantity
            }
        }
    }

    function init(cart) {
        if (!cart || !cart.id) return

        cartId = cart.id
        localCart = cart
        products = [...localCart.lineItems.physicalItems, ...localCart.lineItems.digitalItems, ...localCart.lineItems.customItems]

        // listens for event dispatched from cart.js on product remove, handles trackProductRemovedFromCart
        window.addEventListener('extendCartRemoveItem', function (e) {
            var itemToRemove = e.detail.tempId
            var isWarranty = isWarrantyCheck(itemToRemove)
            var planInformation = getPlanInformation(itemToRemove, isWarranty)
            var productFound = products.find(function (product, index) {
                product.productIndex = index
                return product.id === itemToRemove
            })

            if (productFound && productFound.sku && !ExtendBigCommerce.warrantyAlreadyInCart(productFound.sku, localCart) && !isWarrantyCheck(itemToRemove)){
                Extend.trackProductRemovedFromCart({
                    productId: productFound.sku
                });
            }

            // if we remove JUST a warranty
            if(productFound && productFound.sku && isWarrantyCheck(itemToRemove)){
                Extend.trackOfferRemovedFromCart({
                    productId: planInformation.productId,
                    planId: planInformation.planId,
                });
            }
            
            removeItemFromCart(itemToRemove)
        })

        // handles trackOfferRemovedFromCart && trackOfferUpdated when normalizing
        window.addEventListener('normalization', function (e) {
            var updates = e.detail.updates

            for (const productId in updates) {
                if (Object.hasOwnProperty.call(updates, productId)) {
                    var isWarranty = isWarrantyCheck(productId);

                    const updatedQuantity = updates[productId];

                    if (isWarranty) {

                        var planInformation = getPlanInformation(productId, isWarranty, updatedQuantity);
                        var isProduct = isProductCheck(productId)

                        if (updatedQuantity === 0) {
                            Extend.trackOfferRemovedFromCart({
                                productId: planInformation.productId,
                                planId: planInformation.planId,
                            });
                        } else {
                            Extend.trackOfferUpdated({
                                productId: planInformation.productId,
                                planId: planInformation.planId,
                                updates: {
                                    warrantyQuantity: planInformation.warrantyQuantity,
                                    productQuantity: isProduct.productQuantity
                                },
                            });
                        }

                    } else {
                        var productInformation = getPlanInformation(productId, isWarranty)
                        
                        if(productInformation && !ExtendBigCommerce.warrantyAlreadyInCart(productInformation.productId, localCart)){
                            Extend.trackOfferUpdated({
                                productId: productInformation.productId,
                                planId: planInformation.planId,
                                updates: {
                                    warrantyQuantity: planInformation.warrantyQuantity,
                                    productQuantity: planInformation.productQuantity
                                },
                            });
                        }
                    }
                    updateCartItemQty(productId, updatedQuantity)
                }
            }
            // reload window after normalization
            return window.location.reload();
        })

        // listens for updates to normal products NOT containing a warranty and handles trackProductUpdated
        window.addEventListener('extendCartUpdateItem', function(e){
            var item = e.detail.tempId
            var itemQty = e.detail.qty
            var isProduct = isProductCheck(item)

            updateCartItemQty(item, itemQty)

            if (isProduct && isProduct.productId && !ExtendBigCommerce.warrantyAlreadyInCart(isProduct.productId, localCart) && !isWarrantyCheck(item)){
                Extend.trackProductUpdated({
                    productId: isProduct.productId,
                    updates: {
                      productQuantity: itemQty
                    },
                });
            }
            
        })

        // extendCartAddItem
        window.addEventListener('extendCartAddItem', function(e){
            Extend.trackProductAddedToCart({
                productId: e.detail.tempId,
                productQuantity: e.detail.tempQty
            });
        })

    }
}
