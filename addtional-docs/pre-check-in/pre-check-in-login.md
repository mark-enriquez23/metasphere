# Login
The Login functionality has one direct process, See structure below for reference.

## Login Process
 1. The Application fetches the confirmation number and the last name of the client.
 2. Validates the fields if everything is added.
 3. Runs through the method for logging in.
 4. Make a Get Request on the fetch booking API.
 5. Checks if the request is not err result.
	 a. If error the app displays an error confirmation dialog
	 b. The App then redirects the user to the Self Service Pages.

## API Used in the page
| API NAME | API DETAILS |
|--|--|
| Fetch Booking | The API with URL below allows users to check Opera reservations details such as Confirmation Number, Last Name, Hotel Codes, etc. |

## Additional Information
Currently the API would need additional more data the be used and improve the application.

## Page Issues
### API Issues
| Api name | Issue Details |
|--|--|
| Fetch Booking | The API doesn't have the complete details of the User. ( i.e. First name, Last Name, and Room No )|

