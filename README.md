# PinieJS
PinnieJS is a Microservices Pin Generator for Email / Phone Number Verification or OTP Transaction based on Express JS


### Endpoint

+ /pin/generate

> To generate unique PIN that used for verification </br> Input : Email/ Phone Number/ Transaction Id (need to be unique)

</br>

+ /pin/resend
> Resend unique PIN that used for verification </br> Input : Email/ Phone Number/ Transaction Id (need to be unique)

</br>

+ /pin/verify
> Verify that User Unique ID is valid and matches with generated PIN</br> Input : Email/ Phone Number/ Transaction Id (need to be unique) + unique PIN Number

</br>

+ /pin/check
> Check User ID has been verified or not </br> Input : Email/ Phone Number/ Transaction Id (need to be unique)
