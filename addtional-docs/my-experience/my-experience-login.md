# Login
The Login functionality has one direct process, See structure below for reference.

## Login Process
 1. The Application fetches the Validate number and the last name of the client.
 2. Validates the fields if everything is added.
 3. Runs through the method for logging in.
 4. Make a Get Request on the Validate Room Number & Last Name API.
 5. Checks if the request is not err result.
	 a. If error the app displays an error confirmation dialog
	 b. The App then redirects the user to the Self Service Pages.

## API Used in the page
| API NAME | API DETAILS |
|--|--|
| Validate Room Number & Last Name | This API could be used to verify in house guest status by checking whether the Room Number and Last Name are matched. |

## Additional Information
Needs to set the Customer Support for the number.

## Page Issues
### Content Issues
| Issue | Details |
|--|--|
| Contact Support | There's no number given for the Contact Support implementation. |

