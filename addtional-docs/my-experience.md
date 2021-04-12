
# My Experience Module
The data here are the functionalities for the my Experience. Listed below are the items under pre-check-in for your reference.

## Modules
 - **Login**
	 - Validation for the Room number and last name for the Module. 
	 - Needs sessions to be added for the login
 - **My Experience Landing Page**
	 - Initial content for the My Experience Pages
 - **HK Pages**
	 - HK Home 
		- General Items for the Housekeeping home 
	 - HK Services
		- Items for the Housekeeping services.
	 - HK Amenties 
		- Items for the Housekeeping Amenities
 - **FB Pages**
	 - FB Home 
		- General Items for the FB home 
	 - FB Foods
		- Items for the FB Foods,
	 - FB Drinks
		- Items for the FB Drink
 - **My Orders Page**
	 - Has data of the Orders of the User. 
 - **Carts Page**
	 - Page to confirm the data of the current cart. 
	 - Set the payment method for the orders.
	 - Submit the Payment/Order.

## API used for the module

| API NAME | API DETAILS |
|--|--|
| Validate Room Number & Last Name | This API could be used to verify in house guest status by checking whether the Room Number and Last Name are matched. |
| Retrieve Room Server Item Listing | The Room Service API with following URL allows users to retrieve room server item listing such as the menu items for different options, e.g. to retrieve the amount of product price, or the name of the product selected. |
| Retrieve Main Category Listing | The Room Service API with following URL allows users to retrieve data of main category listing such as category names Dining, Breakfast which are the main selection in a menu |
| Retrieve Secondary Category Listing | The Room Service API with following URL allows users to retrieve data of secondary category listing such as the quantity (e.g. half bottle), variety (e.g. beer/juice) of the selected products(e.g. beverage) |
| Retrieve Room Server Item Listing | The Room Service API with following URL allows users to retrieve room server item listing such as the menu items for different options, e.g. to retrieve the amount of product price, or the name of the product selected. |
| Retrieve Order Listing | The Room Service API with following URL allows users to retrieve order listing. All detail information of the order such as order time, product/service selected, price of the order, etc. will be retrieved through this API. |
| Retrieve Housekeeping Item Listing | The Housekeeping API with following URL allows users to retrieve housekeeping item listing. Housekeeping service item names such as laundry pickup, extra towel can be retrieved through this API. |
| Retrieve Housekeeping Service Order Listing | The Housekeeping API with following URL allows users to submit housekeeping service order listing. |
| Submit Order | The Room Service API with following URL allows users to submit service orders. It serves to collect order information and submit the order details. |
| Submit HouseKeeping Service Order |The Housekeeping API with following URL allows users to submit housekeeping service order. |
