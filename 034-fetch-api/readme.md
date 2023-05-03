# Week 16
- Yes I usually run my code in the local server and see if it is running or if there are any errors in the console. If there are any errors I usually use the console the line at which the error occurs. 

# Notes
- when  we use fetch it returns a promise that is either resolved or rejected
- APIs take request/query parameters, for example token, and other parameters as per the API documentation
-when we get the data from the backend we need to convert it into json format using .json()
- a request, even if we entered the wrong parameters is successful so long as we hit the right endpoint and got a response from our server. This determines how we catch fetch errors 
-we can pass special objects alongside our API url, for example, headers, which can container authorization information in form of objects containing the bearer token. 
-fetch() is not the only way of getting data from a server/backend. Other ways include XHR. 
-fetch() is more convenient because it does not require any installation(runs natively). It is supported by a number of browsers. 
