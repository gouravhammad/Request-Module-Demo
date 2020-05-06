const request = require('request')

var url = 'https://jsonplaceholder.typicode.com/todos/1'
request(url,(error, response, body)=>{
  
    if(error) console.log(error)  // Printing the error if occurred
 
    console.log(response.statusCode) // Printing status code
    console.log(body) // Printing body
}); 