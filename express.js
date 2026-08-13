let express = require('express');
const app = express()

app.use(express.json());

const todolist = [
    {  "id":1, title : "buy groceries", "iscompleted" : false,"createAt" : "2026-09-16T09:20:00Z"  },
     { "id": 2, "title": "finish frontend code ", "iscompleted": true, "createdAt": "2026-08-13T10:30:00Z" },
    { "id": 3, "title": "finish backend code ", "iscompleted": false, "createdAt": "2026-06-13T11:30:00Z" },
    { "id": 4, "title": "full stack developer ", "iscompleted": true, "createdAt": "2026-12-13T01:00:00Z" },
    { "id": 5, "title": " mobile phone ", "iscompleted": true, "createdAt": "2026-14-13T14:22:00Z" }, 
    { "id": 6, "title": " earphone ", "iscompleted": false, "createdAt": "2026-15-13T05:15:00Z" },
    { "id": 7, "title": " desktop ", "iscompleted": true, "createdAt": "2026-16-13T06:23:00Z" },
    { "id": 8, "title": " php ", "iscompleted": false, "createdAt": "2026-13-13T07:25:00Z" },
    { "id": 9, "title": " javascript ", "iscompleted": true, "createdAt": "2026-16-13T08:25:00Z" },
    { "id": 10, "title": " python ", "iscompleted": false, "createdAt": "2026-16-13T09:26:00Z" }
];


app.get('/api/todos', (req,res)=>{
    res.json(todolist);
})

app.post('/api/todos',(req,res)=>{
    const newtodo = {
        id : todolist.length + 1,
        title : req.body.title,
        iscompleted : false
    };
    todolist.push(newtodo);
    res.json(newtodo);
});

app.put('/api/todos/:id',(req,res)=>{
    const todoid =parseInt(req.parms.id);
    const item = todolist.find(t.id==todoid);

    if(!item){
        return res.status(404).json ({message : "task not found"});
    }

    if(req.body.title !== undefined)item.title = req.body.title;
    if(req.body.iscompleted !== undefined) item.iscompleted = req.body.iscompleted;

    res.json(item);
});

app.delete('/api/todos/:id', (req,res)=>{
    const todoid = parseInt(req.parms.id);
    const index = todolist.findIndex(t => t.id ===todoid);

    if(index === -1) {
        return res.status(404).json ({message: "task not found"});
    }
});


app.listen(3000, ()=> console.log('server running'));