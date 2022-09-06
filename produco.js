function change_image(image){
    let container = document.getElementById("main.image")
    container.scr = image.scr;
}

let recolectar_datos = function() {
    let producto = {} 
    
    producto.color = document.querySelector('#colorHtml').innerText
    producto.precio = document.querySelector('.act-price').innerText
    producto.marca = document.querySelector('.brand').innerText
    producto.nombre = document.querySelector('#nombre').innerText
    producto.talle = document.querySelector('input[type = radio] : checked').value
    console.log
 }