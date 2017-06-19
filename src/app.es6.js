//to do server
import express from 'express';
import bodyParser   from 'body-parser';
const app = express();
const urlJson ='database/tasks.json'
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.listen (3337, ()=>{
	console.log('coucou');
});

