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

const port = 3333;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});