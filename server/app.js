const express = require("express");

const app = express();
/*route на какой нибудь url т.е. req дает нам запрос
  res мы отвечаем на него*/
app.get('/', (req,res)=>{
	res.send("Yelow port");
});

const server = app.listen(8080, () =>{
	console.log('Server is up and running on port 8080');

});
