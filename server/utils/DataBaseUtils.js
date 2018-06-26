import mongoose from "mongoose";

import './models/Note';

const Note = mongoose.model('Note');
/*Подключение к базе данных именновоный экспорт*/

export function setUpConnection(){
	mongoose.connect("mongodb://localhost:27017/notes");
}
/*метод для получения всех заметок*/
export function listNotes(){
	return Note.find();
}
/*метод для добавления заметок*/
export function createNote(date){
	const note = new Note({
		title:data.title,
		text:data.text,
		color:data.color,
		createdAt:new Date()
	});

	return note.save();
}
/*удаление заметки*/
export function deleteNote(id){
	return Note.findById(id).remove();
}