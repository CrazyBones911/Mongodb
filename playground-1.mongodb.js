db.createCollection("users");

db.users.insertMany([
    {
    name:"Arturo",
    lastname:"Vidal",
    email:"artur@correo.com",
    city:"Londres",
    contry:"inglaterra",
    salary: 3000,
    age: 35,
    height:190,
    weight: 190
},
{
    name:"Daniel",
    lastname:"Torres",
    email:"danto@correo.com",
    city:"Paris",
    contry:"Francia",
    salary:"4900",
    age:"32",
    height:165,
    weight: 128
},
{
    name:"Manolo",
    lastname:"Franco",
    email:"",
    city:"Madrid",
    contry:"España",
    salary: 1800,
    age: 25,
    height: 153,
    weight: 120
},
{
    name:"Mike",
    lastname:"Smith",
    email:"mikesm@correo.com",
    city:"New York",
    contry:"EEUU",
    salary:5000,
    age:45,
    height:200,
    weight:220
},
{
    name:"Pedro",
    lastname:"Sanchez",
    email:"frijolero@mail.com",
    city:"Ciudad de Mexico",
    contry:"Mexico",
    salary:1500,
    age:22,
    height:170,
    weight:130
},
{
    name:"Juan",
    lastname:"Gutierrez",
    email:"",
    city:"Barranquilla",
    contry:"Colombia",
    salary:6000,
    age:28,
    height:169,
    weight: 157
},
{
    name:"Marry",
    lastname:"Bones",
    email:"BonesMary@correo.com",
    city:"Sidney",
    contry:"Australia",
    salary:8345,
    age:30,
    height:190,
    weight:180
},
{
    name:"Dina",
    lastname: "Molina",
    email:"Dinosaurio@correo.com",
    city:"Toronto",
    contry:"Canada",
    salary:"6789",
    age:22,
    height:155,
    weight: 150
}
,    {
    name:"Francessco",
    lastname:"Ferrai",
    email:"carroslocos@correo.com",
    city:"Monaco",
    contry:"Italia",
    salary:7654,
    age:26,
    height:210,
    weight: 220
}
,    {
    name:"Ronahino",
    lastname:"Gaucho",
    email:"Rona@correo.com",
    city:"Brasilia",
    contry:"Brasil",
    salary:700,
    age:18,
    height:160,
    weight:105
}
,    {
    name:"Guillermo",
    lastname:"cuchetino",
    email:"nariz10@correo.com",
    city:"Buenos Aires",
    contry:"Argentino",
    salary:1500,
    age:20,
    height:200,
    weight: 300
}
,    {
    name:"Laura",
    lastname:"Fome",
    email:"Lwea@correo.com",
    city:"Santiago",
    contry:"Chile",
    salary:600,
    age:52,
    height:160,
    weight:230
}
,    {
    name:"mirallocoshii",
    lastname:"lastorf",
    email:"",
    city:"Berlin",
    contry:"Alemania",
    salary:6000,
    age:50,
    height:200,
    weight:150
},
{
    name:"hammad",
    lastname:"daychoumm",
    email:"namaste@correo.com",
    city:"Deli",
    contry:"India",
    salary:"",
    age:49,
    height:150,
    weight: 180
},
{
    name:"Catalina",
    lastname:"plant",
    email:"cata@correo",
    city:"moscu",
    contry:"Rusia",
    salary:1230,
    age:50,
    height: 234,
    weight:345
},
{
    "name": "Catalina",
    "lastname": "Plant",
    "email": "cata@correo",
    "city": "New York",
    "country": "USA",
    "salary": 55000,
    "age": 30,
    "height": 165,
    "weight": 135
},
{
    "name": "Juan",
    "lastname": "González",
    "email": "juan@correo",
    "city": "Madrid",
    "country": "Spain",
    "salary": 50000,
    "age": 35,
    "height": 175,
    "weight": 160
},
{
    "name": "Emily",
    "lastname": "Smith",
    "email": "emily@correo",
    "city": "London",
    "country": "Inglaterra",
    "salary": 60000,
    "age": 28,
    "height": 170,
    "weight": 145
},
{
    "name": "Carlos",
    "lastname": "Rodríguez",
    "email": "carlos@correo",
    "city": "Barcelona",
    "country": "España",
    "salary": 48000,
    "age": 32,
    "height": 180,
    "weight": 170
},
{
    "name": "Sophia",
    "lastname": "Brown",
    "email": "sophia@correo",
    "city": "Toronto",
    "country": "Canada",
    "salary": 55000,
    "age": 29,
    "height": 168,
    "weight": 140
},
{
    "name": "Liam",
    "lastname": "Wilson",
    "email": "liam@correo",
    "city": "Sydney",
    "country": "Australia",
    "salary": 62000,
    "age": 38,
    "height": 183,
    "weight": 180
},
{
    "name": "Isabella",
    "lastname": "Martinez",
    "email": "isabella@correo",
    "city": "Ciudad de Mexico",
    "country": "Mexico",
    "salary": 51000,
    "age": 31,
    "height": 165,
    "weight": 130
},
{
    "name": "Oliver",
    "lastname": "Anderson",
    "email": "oliver@correo",
    "city": "Melbourne",
    "country": "Australia",
    "salary": 59000,
    "age": 36,
    "height": 175,
    "weight": 160
},
{
    "name": "Mia",
    "lastname": "Lopez",
    "email": "mia@correo",
    "city": "Los Angeles",
    "country": "USA",
    "salary": 53000,
    "age": 33,
    "height": 162,
    "weight": 125
},
{
    "name": "Jack",
    "lastname": "White",
    "email": "jack@correo",
    "city": "Vancouver",
    "country": "Canada",
    "salary": 57000,
    "age": 34,
    "height": 180,
    "weight": 175
}

//Consultar todos los archivos

db.users.find();

// Notas y tips
//Renombrar llave sin modificar el valor
db.users.updateMany({}, { $rename: { "contry": "country" } });

//Ejercicio_1 ://Ejercicio_  : Obtener  todos los usuarios que sean mayores de 18 años.

db.users.find({age: {$gt:18}});

//Ejercicio_2 :Obtener todos los usuarios que sean de Londres o de París.

db.users.find({
    $or:[
        {city:{$eq:"Londres"}},
        {city:{$eq:"paris"}}
    ]
});

// Ejercicio_3 : Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.

db.users.find({
    $and:[
        {salary:{$gt:2000}},
        {age:{$lt:30}}
    ]
})

//Ejercicio_4 : Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.

db.users.find({
    $and:[
        {country:{$eq:"España"}},
        {salary:{$gt:3000}}
    ]
})

//Ejercicio_5 : Obtener todos los usuarios que tengan entre 25 y 35 años.

db.users.find({
    $and:[
        {age:{$gte:25}},
        {age:{$lte:35}}
    ]
})

//Ejercicio_6 : Obtener a todos los usuarios que no sean de Estados Unidos.

db.users.find({country:{$ne:"USA"}});

//Ejercicio_7 : Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.

db.users.find({
    city: "Londres",
    $or: [
        { salary: { $gt: 2500 } },
        { age: { $gt: 30 } }
    ]
});

//Ejercicio_8 : Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.

db.users.find({
    $and:[
        {country:{ $eq: "Australia"}},
        {weight:{$gt: 140}}
    ]
});


//Ejercicio_9 : Obtener a todos los usuarios que no sean de Londres ni de París.

db.users.find({
    $and:[
        {city:{$ne:"Londres"}},
        {city:{$ne:"paris"}}
    ]
});

//Ejercicio_10 : Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.

db.users.find({
    $or:[
        {salary:{$lt:2000}},
        {age:{$gt:40}}
    ]
});

//Ejercicio_11 : Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.

db.users.find({
    country:"canada"
    $or:[
        {salary:{$gt: 4000}},
        {height:{$gt:180}}
    ]
});

//Ejercicio_12 : Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.

db.users.find({
    $and:[
        {country: {$eq: "Italia"}},
        {age: {$gte: 20}},
    ]
});

//Ejercicio_13 : Obtener todos los usuarios que no tengan un correo electrónico registrado.

db.users.find({email: {$eq: ""}})

//Ejercicio_14 : Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.

db.users.find({
    $and:[
        {country: {$eq: "Francia"}},
        {salary:{$gte: 3000}},
        {salary:{$lte: 5000}},
    ]
})

//Ejercicio_15 : Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.

db.users.find({
    $and:[
        {country: {$eq: "Brasil"}}
    ],
    $or:[
        {weight:{$lt: 120}},
        {weight:{$gt: 140}}
    ]
})

//Ejercicio_16 : Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.

db.users.find({
    $or:[
        {country:{$eq:"Argentino"}},
        {country:{$eq: "Chile"}}
    ],
    $and:[
        {age: {$lt:25}}
    ]
})

//Ejercicio_17 : Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.

db.users.find({
    country:{$nin:["España","Mexico"]}, 
    salary :{$lt:3000}
})

//Ejercicio_18 : Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.

db.users.find({
    country:"Alemania"
    $or:[{
        {salary:{$lt: 4000}},
        {age:{$gt: 35}}
    }]
});

//Ejercicio_19 : Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.

db.usuarios.find({
    $and: [
        { counnty: { $ne: "Colombia" } },
        { heigth: { $lt: 170 } }
    ]
});

//Ejercicio_20 : Obtener todos los usuarios que sean de India y que no tengan un salario registrado.

db.users.find({
    country: "India",
    salary: { "$exists": false }
})


