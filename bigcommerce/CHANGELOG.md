# **Parts Warehouse Release Notes**

## March 21, 2019 Version 2.1.2

*   - Cleanup and XSS fix on Cart page. [#1434] (https://github.com/bigcommerce/cornerstone/pull/1434)

## May 31, 2018 Version 2.0.3

*   Fourth Variation with default settings to showcase new features.

## May 25, 2018 2.0.2

*   Pagination fix for intermittent issues in miscellaneous browsers.
*   Selected Grid/List toggle remains active with use of pagination.
*   Fix for product image and details alignment in Quick View.

## May 22, 2018 Version 2.0.1

*   Fix for Product Option Image Swap, SKU change, and Inventory Visuals.
*   Fix for Responsive equal height product containers with all site-width settings.
*   Fix for Toggle functionality in theme editor to turn off/on "Product Hover Images".
*   Fix for bottom banner visibility on Home Page when carousel is floated.
*   Options to Show/Hide Top & Bottom Pagination Independently.
*   Sticky TopMenu Option in Theme Editor. TopMenu & Searchbar will scroll with page.
*   Scrollable Quick Search Results
*   When Pagination for reviews on product page is clicked, after the page reloads it will scroll to & activate the Reviews Tab.

## May 18, 2018 Version 2.0.0

### Brand New Features for Parts Warehouse!!! More Control, More Options, More Power for your eCommenrce Store.

We've added so many significant features to our Parts Warehouse theme that we've named this upgrade Version 2.0.0.

### **New PartsWarehouse 2.0.0 Features:**

*   New! Hero Slider width options include Full-Screen Width, Full-Container-Width, & our classic, Right of SideNav.
*   New! Adjustable Site Max-Width Settings in Theme Editor. Includes five different settings, from 960px, up to 1440px. Make your site wider, and your product images will render larger, relative to your original uploaded image resolutions, or use our classic layout. The choice is yours.
*   New! Grid/List View options include: "Grid/List" toggle (grid by default), "List/Grid" toggle (list by default), "List Only", & our classic "Grid Only". Pages affected include Category, Brand, Search, & Compare.
*   New! Newsletter Popup Option on Homepage. Can be enabled/disabled in theme editor. The text is editable through en.json file.
*   New! Zoom Lightbox for main product image with carousel capability on the Product Page.
*   New! Carousel for product main image & thumbnails on the product page.
*   New! Second product image upon hover in both Grid & List views. Can be enabled/disabled within the Theme Editor. Consistent product image sizes work best with this functionality.
*   New! Product Ratings will now be visible on Home Page(Featured, Top Sellers, & New Products), as well as the Product Page(Recommended & Related Products) if ratings are enabled through the admin dashboard.
*   New! Theme-Styled popup window when removing items from the cart on cart page.
*   New! Added Storewide styles. The custom header and custom footer are now being called in the checkout and order confirmation pages. This means that the "Theme Styled" header and footer will be present on the checkout pages. The body width settings also affect this page. (Only available if using the Optimized One Page Checkout).

### **Fixes & Updates for PartsWarehouse 2.0.0:**

*   Theme Editor Optimization. We have reduced the number of available fonts within the Theme Editor, eliminating unnecessary options. We have left both Roboto & Roboto condensed versions intact. You should see some speed and response time improvements within the theme editor.
*   Multi-Language Setup for Optimized One-Page Checkout. https://stencil.bigcommerce.com/docs/multi-language-checkout#lang
*   Compare page is no longer in a table and is fully responsive, styled to match the theme. Grid/List view is available as well.
*   Product Filter fix for multiple options applied at once.
*   Product Filter, Show More link functional with a popup.
*   Amazon & Apple Pay buttons will appear on the cart page and cart preview drop-down if activated within Store Setup > Payments > Digital Wallets. Includes theme editor option to disable additional payment buttons in cart preview drop-down. Apple Pay will only be visible in Cart Preview if [Sitewide HTTPS](https://support.bigcommerce.com/articles/Public/Site-Wide-HTTPS) is enabled.

    Note: Amazon Pay: You must be using Optimized One Page Checkout. You must then set up an Amazon Pay Account and enable it within your store. [Read about Requirements.](https://support.bigcommerce.com/articles/Public/Connecting-with-Amazon-Pay)

    Note: Apple Pay buttons only appear in Safari browsers and compatible iOS devices. [Read about Requirements.](https://support.bigcommerce.com/articles/Public/Connecting-with-Apple-Pay)

*   Footer Scripts added to the checkout and order confirmation pages. This means that custom scripts added through the admin dashboard will now be effective on the checkout pages.
*   New Script Manager has been tested by adding both script URLs and code chunks. Page options have also been tested successfully.
*   UPC codes now update when Options change if an Option/SKU Rule is set up in the admin dashboard.
*   Google Shopping Products now show correct price for products with variable pricing when URL is visited
*   Page speed improvements. We have made adjustments to increase Google Page Insights Scores. This is an on-going process, and certain things like moving the CSS files cannot be done in BigCommerce without delaying the loading of the page. This will vary from store to store. Things that may impact page speed include images that need to be optimized and also Multiple payment methods. We will continue to make adjustments to improve site speed and efficiency as we can.
*   Zero Structured Data Errors/Warnings
*   Options, quantities, cart removal, etc. all functional.
*   If Reviews are disabled, Review link & tab is not visible on the product page.
*   Social Media Header in Footer will not be visible if Social Media is not enabled.
*   Zero console errors across pages.

## April 28, 2018 Version 1.2.1

*   Fix for Product Options not visible after update for Product Filtering was applied.

## April 27, 2018 Version 1.2.0

*   Fix for Product Filtering not adding more than 1 when applied. Also "clear" action fixed.

## April 20, 2018 Version 1.1.9

*   Fix for distored images after 1.1.8 update.

## April 19, 2018 Version 1.1.8

*   Name of product option swatch will now display on hover. A tooltip will display above the hovered option swatch that contains whatever text you enter within the Color/Patterns fields.
*   Google AMP has been added to our Parts Warehouse Theme. To activate Google AMP, go to Advanced Settings › Google AMP.
*   Support for multi-language checkout and optimized checkout. https://stencil.bigcommerce.com/docs/multi-language-checkout https://stencil.bigcommerce.com/docs/optimized-checkout-prereqs

## March 7, 2018 Version 1.1.7

*   Fix for missing schema/structured data for item condition on the product page.

## March 5, 2018 Version 1.1.6

*   Fix for, if a product has an "option/variant" price associated with itself that is lower than the "Price" field within the backend, the Sale Flag will not be visible. This fix is effective in Home, Category, Brand, & Search Results pages.

## February 15, 2018 - Version 1.1.5

*   Reverted jQuery version within package.json from 3.0.0 back to 2.2.1 due to bundling conflict.

## February 2, 2018 - Version 1.1.4

*   Updated jQuery version within package.json from 2.2.1 to 3.0.0 per GitHub notification.
*   Removed commented out code for Tagline within header.html
*   Fix for search bar not showing in the mobile menu when the logo is centered.
*   Fix for Logo Text position when center or right aligned. Note this change only affects the logo when using text, not an image. When using an image for logo, positioning was and still is working correctly.
*   Fix for wider images within quick-search results overlapping product details.
*   Fix for spacing of Subcategory Links if no image is uploaded on the category page. If image is uploaded then subcategory links will have an image above and spacing will adjust properly.
*   Safari fixes for smaller images appearing in product cards within the "New Products" section when more than 4 New Products are visible.
*   Fix for modal review button not working. There was a conflict with calling the write a review link and the popup modal within the same template twice. The "write a review" link in the top section now scrolls to the tab section and activates the "Reviews" tab where customers can leave their comments.
*   Review count link up top now scrolls to Reviews tab section and activates "Reviews" tab.
*   Fix for Carousel links on the home page not clickable in Edge & IE
*   Fix for "Search by Price" positioning and visibility and colors on mobile.

## January 19, 2018 - Version 1.1.3

*   Fix for Product Options/Details overlapping on Cart page on mobile.
*   Fix for Product Option radio button alignment on mobile.
*   Fix for card button overlapping product info on account page within "Recently Viewed" tab.
*   Font Awesome Warning within console have been resolved.
*   Removed "Similar Products" tab from Product page. This was deprecated in the transition from Blueprint to Cornerstone. We attempted to do a custom solution which only worked properly in specific circumstances. This feature can still be added to your theme but is now considered custom.
*   Fix for hover color of "Previous" pagination button on the Category page. Now uses themes set primary color.
*   Fix for product container widths within "Recommended Section" on Product page when there is more than 4 products visible and the Recommended Section is horizontally displayed at the bottom of the Product page.
*   Fix for alignment and clearing of subcategory image containers on Category page.
*   Fix for broken link within cart preview box for multiple checkout items - removed link.
*   Fix for duplicate "Call for Pricing" option on Product page.
*   Videos are now displayed by default when Video Tab is active on Product Page. Toggle link is set to open by default but still functional.
*   Fix for alignment of product thumbnails on Product page on mobile.
*   Fix for Google Structured Data errors on Product page.
*   Fix for "You May Also Like" and "Recommended" product pricing unnecessarily updating when main product option is selected on Product Page.
*   Videos now appear in QuickView within tabs.

## November 28, 2017 - Version 1.1.2

*   Fix for Product Options not showing on product page when SideNav is activated.
*   Fix for zoom image on product page when SideNav is active.
*   Fix for main product image appearance in Internet Explorer 11 Only.
*   Fix for newsletter signup form appearance in Internet Explorer 11 Only.
*   Shop by Price Filter "Update" button color and hover color will now update when the forms button settings are adjusted within the Theme Editor under Forms > Form Buttons
*   Shop by Price filtering now available on mobile.

## November 13, 2017 - Version 1.1.1

*   Fix for SideCategory List functionality when Product Filtering is enabled.

## November 6, 2017 - Version 1.1.0

*   Fix for "Excluding Tax" font color on product page and product cards site-wide.
*   Card height fix for "with and without tax prices" so prices are no longer covered up

## November 3, 2017 - Version 1.0.9

*   Account/Wishlist Pages. Button, Button Hover, Link, & Link Hover Colors are now customizable by editing the Form Button options in the Forms Section, and the Link Colors within the Content Page section of the Theme Editor.
*   Side Navigation is now full-depth on all store pages, which now includes, category, product, brand, and search pages.
*   Traditional One-Page Checkout: All buttons are now customizable by editing the Form Button options in the Forms Section of the Theme Editor.

## October 6, 2017 - Version 1.0.8

*   Fix for unsecured referenced image: image in stylesheet referenced with http now using https
*   Fix for control of button colors in Theme Editor on Default Checkout
*   Fix for control of button colors on Hero Slider
*   Fix for control of button colors in Theme Editor on Gift Certificate page
*   Any page that has a form, the button colors can be controlled within the "Forms" section of the Theme Editor
*   Custom Fields will now be displayed in the Product Details section, just to the right of the main product image. Pulling the custom field value into the Custom Tabs section was creating an issue for those who wanted multiple custom fields.
*   Added Feature for Product Page Layout: Option added to relocate the "Recommended Products" section from the right-hand side to the bottom of the page. The main benefit of using this layout would be your product images will be larger on the product page.

## September 21, 2017 - Version 1.0.7

*   Currency Converter: selectable top-menu font-color fix
*   Currency Converter: now working in Firefox
*   Cart Page and Cart Preview: log in for pricing now functioning properly
*   Default One-page Checkout: widened credit card date fields
*   Mobile Menu: customizable options added to Theme Editor include: (Main Background Color), (Container-Headers - background, border, and font-colors)
*   Mobile Product Page: alignment fix for Recommended Products
*   Compare button hidden on Category and Brand pages, if product comparisons are disabled within the Store Settings "OR" not logged in when login is required to view prices.
*   Product Card Heights and Spacing: height and spacing now automatically adjusted based on conditional logic such as "enabled/disabled product comparisons", "as low as pricing setting", "required login to view pricing" and "enabled/disabled ratings". This means those who do not enable product comparisons, or product ratings will no longer have the extra spacing which means cleaner looking product cards than before.
*   Subcategory Images on Category Page: Fix for subcategory images not showing in Safari
*   Distorted "Recommended Products" images fixed for 800px and below
*   Wishlist Positioning on Product Page: alignment fix for 800px and below

## September 15, 2017 - Version 1.0.6

*   Added Full-Width Header and Color Options within the Theme Editor
*   Fix for Purchase Options: "As low as" pricing is now functional
*   Fix for Purchase Options: "Restrict Purchase to Login" is now functional
*   Product Page is now 100% width of the body container if both the SideNav and Related Products are disabled
*   Revised Theme features list
*   Updated "Release Notes" link

## September 12, 2017 - Version 1.0.5

*   Adjustable color swatch sizes
*   Centered Logo on Mobile Only regardless of alignment selected within the Theme Editor
*   Added spacing beneath Category header when just text below
*   Added Customizable Quick Cart Buttons within Theme Editor
*   Full-width product images within product galleries (if images are perfectly square then they will fill the entire card figure.)
*   Added Adjustable card figure background-color within Theme Editor (useful for rectangular images.)
*   Fix for un-even amount of New Products & Similar Products
*   Added Brands visibility option within SideNav
*   Added Main Menu selectable option within Theme Editor for left or center alignment

## September 5, 2017 - Version 1.0.4

*   Fix for header spacing consistency
*   Fix for distorted product thumbnails
*   Fix for miscellaneous spacing issues

## September 1, 2017 - Version 1.0.3

*   Fix for thumbnails being distorted in Safari
*   Fix for distorted thumbnails in Quick Search Results and Product Carousels

## August 31, 2017 - Version 1.0.2

*   Fix for small Product Thumbnails in Safari
*   Added Logo flexible positioning (left, center, right alignment options in theme editor)
*   SideNav toggle availability on Product, Content, & Contact Page
*   Optimized Checkout Styling to match all 3 Theme Variations
*   Fix for cart drop-down being hidden behind search bar.
*   Fix for subCategory images not showing if spaces in filename
*   Dynamic Content for subCategory grid images on category Page - Images are visible along with placeholder if one is uploaded. No images or blocks are visible if no images are uploaded, but subcategory-links are visible.
*   Update to PW Theme Description

## August 25, 2017 - Version 1.0.1

*   QuickSearch Fix - placement, and accessibility: (added functionality to reset quick search results, close by clicking "x" or anywhere else on the page, and products within quick search results are now clickable)
*   SideNav now allows for the number of category levels to be set within the admin (allowing you to create multi-level categories, with subcategories that can go far beyond the standard 3 levels deep
*   Pagination now exists Top and Bottom on category, brand, search results, and blog pages
*   Currency Converter now working on Desktop and Mobile

<style>ul { margin-bottom: 45px; } h1, h2, h3 { font-weight: bold !important; } .underline { text-decoration: underline; }</style>
