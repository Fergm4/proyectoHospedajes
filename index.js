const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Hospedaje = require('./models/hospedar');


mongoose.connect('mongodb://localhost:27017/dataHospedaje').
    then(()=>{
        console.log("MONGO CONNECTION OPEN!!!");
    }).
    catch(error => {
        console.log("MONGO OH NO ERROR!!!");
        console.log(error)
    });



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// -----------------------------------------------------------
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.static('public'));
// -----------------------------------------------------------
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

/* app.get('/', (req, res) =>{
    res.send('Holaaa, desde puerto 4000');
}); */

app.get('/', (req, res)=>{
    res.render('rooms/home');
});

app.get('/rooms/new', (req, res) =>{
    res.render('rooms/new');
});

app.post('/rooms', async (req, res) =>{
    const newRoom = new Hospedaje(req.body);
    await newRoom.save();
    res.redirect(`/rooms/${newRoom._id}`);
})

app.get('/rooms/:id/edit', async (req, res) =>{
    const { id } = req.params;
    const room = await  Hospedaje.findById(id);
    res.render('rooms/edit', { room });
});

app.put('/rooms/:id', async(req, res)=>{
    const { id } = req.params;
    const room = await Hospedaje.findByIdAndUpdate(id, req.body, {runValidators: true});
    res.redirect(`/rooms/${room._id}`);
 });

 app.delete('/rooms/:id', async(req, res)=>{
    const { id } = req.params; // La id de la ruta de búsqueda
    const deleteRoom = await Hospedaje.findByIdAndRemove(id);
    res.redirect('/rooms');
});

app.get('/rooms', async (req, res)=>{
    const rooms = await Hospedaje.find({});
    console.log(rooms);
    res.render('rooms/index', { rooms });
});

app.get('/rooms/:id', async (req, res) =>{
    const { id } = req.params;
    const room = await Hospedaje.findById(id);
    console.log(room);
    res.render('rooms/show', { room });
});

app.listen('4000', ()=>{
    console.log('App abierta en el puerto 4000');
});

