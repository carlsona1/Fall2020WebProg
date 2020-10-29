/*
*/
const mysql = require('./mysql');
const data = [{ name: 'Alex', age: 29}, { name: 'Michael', age: 51 }]

async function getAll(){
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM Users`);
}

async function get(id){
    return await mysql.query(`SELECT * FROM Types WHERE id=?`, [id]);
}

async function getTypes(){
    return await mysql.query(`SELECT id,Name FROM Types WHERE Type_id = 2`);
}

async function add(name, age){
    data.push({name, age});
}

const search = async q => await mysql.query(`SELECT id, firstName, lastName FROM Users WHERE LastName LIKE '%${q}% ' OR FirstName LIKE '%${q}%' `);

module.exports = { get, getAll, getTypes, add, search, }