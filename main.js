const contenedor = document.getElementById("contenedor");
let btn1 = document.getElementById("btn1");


var tmp = 0;

for (var i = 0; i < 5;i++){
    tmp = i*20;
    console.log(tmp);
    contenedor.innerHTML += "<h2>Hola mundo"+i+"</h2>";
}
