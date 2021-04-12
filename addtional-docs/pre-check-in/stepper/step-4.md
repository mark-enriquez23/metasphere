# Self Service Step 4
The Self Service Step 4 shows the needed documents that the user needs to upload, the passport which is on the mockup can be used here.
[Page Preview](https://prnt.sc/11acqa1)

## API Used in the page
| API NAME | API DETAILS |
|--|--|
| Fetch Booking | The API with URL below allows users to check Opera reservations details such as Confirmation Number, Last Name, Hotel Codes, etc. |
| Save Document /ID/Facial Recognition Pictures | The API with the URL below serves to restore document images such as passport photos, ID card photos and Facial Recognition pictures. |

## Additional Information
The pages inside the self service can be moved by clicking the next button to proceed or go back one step if the back button is clicked.

The number of item or users in the prolist properties are reflected here, Would be adjusted if the number of Adult or childs would be followed.

## Page Issues

### API Issues
|Issue| Details |
|--|--|
| Submission to save the Document | As of now the Implementation is not working even if tried using base 64 and blob for the image, Note that the issues is no the confirmation number but on the image based on the test as the post request doesn't work when using body request it would be too long when using the other way which the url parameters on the API Url - this would be a wrong implementation in the Backend or on the API itself. |

### Content Issues
|Issue| Details |
|--|--|
| Number of users that needs the upload of document | We need additional details on what's to follow - the pro list or the number of adulst or childs. Maybe the number of adults and childs reflects on the prolist which would be good for the Implementation. |


