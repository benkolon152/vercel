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
    if (req.method == 'GET') console.log('Get /teachers serverless function starts', global)

    res.status(200).json(global.teachers);
}
//export global