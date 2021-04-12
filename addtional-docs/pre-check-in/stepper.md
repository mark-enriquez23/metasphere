# Self Service
The Self Service functionality has 6 steps in it's process, See structure below for reference.

## Self Service Process
 1. Shows the Self Service Step 1 and let's the user confirm the user's initial details.
 2. Ask's the user for additional orders for the pre-check-in at Self Service Step 2.
 3. Ask's the user for additional information then would be shown at Self Service Step 3.
 4. Self Service Step 4 then Let's the User upload his passport or other needed documents.
 5. Payment Method would be the content for Self Service Step 5.
 6. Self Service Step 6 would confirm the user's it's contact information and if there would be a special request on the pre-check-in.

## API Used in the page
| API NAME | API DETAILS |
|--|--|
| Retrieve Room Server Item Listing | The Room Service API with following URL allows users to retrieve room server item listing such as the menu items for different options, e.g. to retrieve the amount of product price, or the name of the product selected. |
| Submit Order | The Room Service API with following URL allows users to submit service orders. It serves to collect order information and submit the order details. |
| Save Document /ID/Facial Recognition Pictures | The API with the URL below serves to restore document images such as passport photos, ID card photos and Facial Recognition pictures. |
| Submit Guest Information | The API with the URL below serves to submit guests’ and their sharers’ information such as Confirmation Number, Last Name, First Name, etc. |
| Rest Countries API | Described to be the REST endpoints available that you can use to search for countries |

## Additional Information
Currently the API would need additional more data the be used and improve the application. The Pages would be static for now as the APIs used here are incomplete and errors thus results in a buggy process of the Application.

## Page Issues
### API Issues
Would be discussed on per page of the Self Service, Please see per item below.
