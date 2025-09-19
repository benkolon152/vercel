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

export default async function handler(req, res){
    if (req.method == 'GET') console.log('Get /teachers serverless function starts', global)
    console.log('params', req.params)

    res.status(200).json(global.teachers);
}
//export global