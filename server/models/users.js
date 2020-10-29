/*
*/

const data = [{ name: 'Alex', age: 29}, { name: 'Michael', age: 51 }]

async function getAll(){
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All")
    return data;
}

async function add(name, age){
    data.push({name, age});
}


module.exports = { getAll, add, search: async q => data.filter(x=> x.name == q) }