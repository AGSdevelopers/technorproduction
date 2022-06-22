// /* 
// @author : Extend
// @version : 06.15.2021 
// extend.js - adds initializeCartOffers function
// */
// initializeCartOffer() 
// initializes cart offer div tag elements with createAjaxOfferElements() then renders the buttons using Extend sdk
export function initializeCartOffers(){
    if (window.Extend && window.ExtendBigCommerce) {
        var slice = Array.prototype.slice;
        /************************/
        /*    util functions   */
        /***********************/
        // findAll function handles browser compatability issues for querySelectorAll
        function findAll(element) {
            var items = document.querySelectorAll(element);
            return items ? slice.call(items, 0) : [];
        }

        // Gets product by id, and listens for select change to update variant 
        function addPlanToCart(sku, plan, quantity, cart) {
            ExtendBigCommerce.addPlanToCart(
                {
                    sku: sku,
                    plan: plan,
                    quantity: quantity,
                    cart: cart,
                },
                function (err) {
                    if (err) {
                        return;
                    } else {
                        return window.location.reload();
                    }
                }
            );
        }
        //Get's updated cart object
        ExtendBigCommerce.getCart(function (error, cart) {
            if (cart) {
                //Run normalization
                ExtendBigCommerce.normalizeCart({ cart: cart, balance: true }, function (err, data) {
                    if (data && data.updates) {
                        return window.location.reload();
                    }
                });
                //Initial empty state
                var planToName = {};
                //goes through customItems grabbing the warranties and maps the productName to the warranty id in planToName
                cart.lineItems.customItems.forEach(function(cItem){
                    if (cItem && cItem.sku && cItem.sku.indexOf(';xtd;') > -1) {
                        var customId = cItem.id
                        var sku = cItem.sku.split(';xtd;')[1]
                        var product = cart.lineItems.physicalItems.find(function(pItem){
                            if (pItem.sku === sku) {
                                return pItem.name
                            }
                        })
                        planToName[customId] = product.name
                    }
                });
                //Find all plan items, and display product information
                findAll('#extend-plan-item').forEach(function(el) {
                    var cartItemId = el.getAttribute("data-extend-itemid")
                    if (planToName[cartItemId]) {
                        el.innerText = 'For: ' + planToName[cartItemId]
                    }
                });
                //find all cart offers and render the instance
                findAll('#extend-cart-offer').forEach( function(el) {
                    var sku = el.getAttribute("data-extend-sku");
                    var quantity = el.getAttribute("data-extend-quantity");
                    var itemId = el.getAttribute("data-extend-item-id");
                    el.style.marginTop = "8px"
                    if(!sku){
                        return;
                    }
                    //If there's already an instance or warranty is already in cart do not render offer
                    if (Extend.buttons.instance(el) || ExtendBigCommerce.warrantyAlreadyInCart(sku, cart)) {
                        return;
                    }

                    Extend.buttons.renderSimpleOffer(el, {
                        referenceId: sku,
                        onAddToCart: function (offer) {
                            //if there's only one item call addPlanToCart immediately
                            if(cart.lineItems.physicalItems.length === 1) {
                                addPlanToCart(sku, offer.plan, quantity, cart)
                                return;
                            }
                            //show loading overlay
                            if(document.querySelector('[data-cart] .loadingOverlay')){
                                document.querySelector('[data-cart] .loadingOverlay').setAttribute('style', 'display: block')
                            }else{
                                const loadingClass = 'is-loading';
                                const $cartDropdown = $('#cart-preview-dropdown');
                                const $cartLoading = $('<div class="loadingOverlay"></div>');

                                $cartDropdown
                                    .addClass(loadingClass)
                                    .html($cartLoading);
                                $cartLoading
                                    .show();                    
                            }

                            //find cart item, and get id and options from cartItem
                            var cartItem = cart.lineItems.physicalItems.find(it => it.id == itemId)
                            var cartId = cart.id
                            var options = cartItem.options.reduce((optArray, opt) => {
                                var optId = opt.nameId
                                var optValue = opt.valueId === null ? opt.value : opt.valueId;
                                return optArray = [...optArray, { "optionId": optId, optionValue: optValue} ]
                            },[])
                            //for multiple items we have to remove the cart items, and add them back with respective plans so it shows the plan underneath the respective product
                            ExtendBigCommerce.deleteCartItem(
                                { cartId, itemId },
                                function() {
                                    ExtendBigCommerce.addCartItem({
                                        cartId: cartId,
                                        productId: cartItem.productId,
                                        variantId: cartItem.variantId,
                                        quantity: quantity,
                                        optionSelections: options || [],
                                    }, function(){addPlanToCart(sku, offer.plan, quantity, cart) })
                                }
                            )
      
                        },
                    });
                })
            }
        });
    }
}
