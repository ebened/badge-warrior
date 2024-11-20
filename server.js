import express from 'express';

const app = express();

// Set static folder
app.use(express.static('public'));
//Parese URL-eoncoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true}));
//Parse Json bodies (as sent by api clients)
app.use(express.json());

// start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});