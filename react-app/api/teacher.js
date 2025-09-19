// /api/teacher.js

import {globalTeachers} from './global.js'

export default async function handler(req, res){
    let global = global
    console.log('global', global)
    console.log('globalTeachers', globalTeachers)

    let found = null;
    if (global) found = global.teachers.find(teacher => teacher.favorite)
    if(found){
        res.status(200).json(found);
    } else {
        res.status(404).json({error: 'Not found'});
    }
}