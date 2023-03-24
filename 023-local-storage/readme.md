# Week 11
# My understanding of JSON
-It is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. JSON data is made up of key/value pairs, where each key represents a field name and each value represents the data associated with that field. The data can be in various forms, such as a string, a number, a Boolean value, an array, or an object. JSON data can be nested, meaning that an object can contain other objects or arrays, and arrays can contain other arrays or objects.

-JavaScript uses JSON data because it is easy to work with and parse in JavaScript code. JavaScript can easily convert JSON data into a JavaScript object, and vice versa, using built-in methods like JSON.parse() and JSON.stringify(). This makes it easy to exchange data between a server and a web application, as the server can provide data in JSON format and the JavaScript code can easily parse and use that data.

# My understanding of local storage
- To store data we use setItem(), and to retrieve data we use getItem (). Data in the local storage is stored in string format, that's why we use JSON.stringify(). When we want to display after retrieval, we need to convert it again using JSON. parse(). 