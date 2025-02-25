function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML += '<p>' + texto + '</p>';
}

function nuevoTitulo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML += '<h1>' + texto + '</h1>';
    alert("Hola, espero tengas un lindo día :)");
}

function nuevoImg() {
    var contenido = document.getElementById('contenido');
    var imgURL = "https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_640.jpg";
    contenido.innerHTML += '<img src="' + imgURL + '" alt="Imagen" style="max-width: 100%; height: auto;">';
}

function nuevoImprimir() {
    window.print();
}

function nuevoEnlace() {
    var enlace = "https://virtual.konradlorenz.edu.co/login/index.php"; 
    window.location.href = enlace;
}
