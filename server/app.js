import express from 'express';
import bodyParser from "body-parser";
import * as db from './utils/DataBaseUtils.js';


db.setUpConnection();
const app = express();

app.use(bodyParser.json());
/*route на какой нибудь url т.е. req дает нам запрос
  res мы отвечаем на него*/
  /*запрос get позволяет вернуть все заметки 
  	которые у нас есть*/
app.get('/notes', (req,res)=>{
	db.listNotes(),then(data => res.send(data));
});
/*запрос post позволяет создать заметку*/
app.post('/notes', (req,res)=>{
	db.createNote().then(data => res.send(data));
});
/*запрос delete позволяет удалить заметку по id*/
app.delete('/notes/:id', (req,res)=>{
	db.deleteNote(req.params.id).then(data => res.send(data));
});
const server = app.listen(8080, () =>{
	console.log('Server is up and running on port 8080');

});
