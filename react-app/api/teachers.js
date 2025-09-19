// api/teachers.js

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

export default function handler(req, res){
    res.status(200).json(global.teachers);
}
//export global