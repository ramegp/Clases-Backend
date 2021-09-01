let ul = document.querySelector('ul');
let template = Handlebars.compile(ul.innerHTML);
let datos = {
    Nombre: "Ramiro",
    Edad: 30,
    apellido : "Gonzalez Perez",
    tel: "4562258",
    email: "ramegp@gmail.com"
}
ul.innerHTML = template(datos);
console.log(template(datos))