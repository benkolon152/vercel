const express = require('express');
const cors = require('cors');
const app = express();

var global= {
    teachers: [
        {
            name: "John Doe",
            hisClass: "13/A",
            favorite: false,
        },
        {
            name: "Jane Doe",
            hisClass: "18/C",
            favorite: true,
        }, 
    ],
    //favoriteTeacherIdx: null,
}

app.use(cors())

app.get('/teachers', (req, res)=>{
    res.status(200).json(global.teachers);
})

app.get('/teacher/:isfavorite', (req, res)=>{
    //const found = global.teachers.find(teacher => teacher.favorite)

    let found = null;
    for (let teacher of global.teachers){
        if (teacher.favorite) found = teacher
    }

    if(found){
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
})

const port = 3333;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});