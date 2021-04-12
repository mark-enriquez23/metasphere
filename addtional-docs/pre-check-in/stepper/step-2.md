# Self Service Step 2
The Self Service Step 2 shows the orders that the user can opt to avail, once the user has add it to it's stack it still can be removed by clicking the remove button if the item has been added.
[Page Preview](https://prnt.sc/11aceac)

## API Used in the page
| API NAME | API DETAILS |
|--|--|
| Retrieve Room Server Item Listing | The Room Service API with following URL allows users to retrieve room server item listing such as the menu items for different options, e.g. to retrieve the amount of product price, or the name of the product selected. |
| Submit Order | The Room Service API with following URL allows users to submit service orders. It serves to collect order information and submit the order details. |

## Additional Information
The pages inside the self service can be moved by clicking the next button to proceed or go back one step if the back button is clicked.

The page doesn't yet have the submit order API implemented since on the data of the user there is no room no. or last name hence there would be no reference to where the submitted order would be.

## Page Issues
### API Issues
|Issue| Details |
|--|--|
| Missing API details | Currently there are still missing details from the API - The details missing on the API that would be used in this page are room number and last name |
| No Images and Type on the Retrieve Room Server Item Listing API | Currently there are still missing details from this API - There are no images yet to be implemented and type (i.e. per night/per room) |


