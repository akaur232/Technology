let express = require('express'); 

const app = express(); 

const {db} = require('./database/db.js');

db.once('open', ()=>{
    console.log("connected to database");
    app.set('port', process.env.PORT || 8080);
    const server = app.listen(app.settings.port, () => console.log('listening on ', app.settings.port));
});

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


const faq = require('./src/models/faq.js');
app.locals.list = [];

app.locals.answer = [];

app.post('/question',(req,res)=>{
    app.locals.list.push(req.body.question);
});

app.get('/question',(req,res)=>{
    res.send(app.locals.list); 
});

const router = require('./src/routes/index.js');
app.use('/api/v1/',router);

app.get('/api/faq',(req,res)=>{
    res.send(faq);
});
