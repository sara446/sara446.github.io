function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML = contenido.innerHTML + '<p>' + texto + '</p>';
}
document.getElementById('imagen').onchange = function (evt) {
    var entradaArchivo = evt.target,
        archivos = entradaArchivo.files;
    if (FileReader && archivos && archivos.length) {
        var imagen = new FileReader();
        imagen.onload = function () {
            var etiquetaImg = document.createElement("img");
            etiquetaImg.setAttribute('src', imagen.result);
            etiquetaImg.setAttribute('width', '200px');
            etiquetaImg.setAttribute('height', '180px');
            var contenido = document.getElementById('contenido');
            contenido.appendChild(etiquetaImg);
        }
        imagen.readAsDataURL(archivos[0]);
    }
}

function imprimir() {
    var contenido = document.getElementById("contenido").innerHTML;

    // Crear una nueva ventana para imprimir
    var ventana = window.open('', '', 'width=900,height=700');
    
    ventana.document.write(`
        <html>
        <head>
            <title>Impresión</title>
            <link rel="stylesheet" href="css/bootstrap.min.css">
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { text-align: center; }
                img { max-width: 100%; height: auto; display: block; margin: 10px auto; }
                .card { border: 1px solid #000; padding: 10px; margin: 10px 0; }
            </style>
        </head>
        <body>
            <h1>Resultado</h1>
            <div id="print-content">${contenido}</div>
            <script>
                // Esperar a que las imágenes se carguen antes de imprimir
                window.onload = function () {
                    setTimeout(function () {
                        window.print();
                        window.close();
                    }, 1000);  // Aumenta el tiempo si sigue sin cargar correctamente
                };
            </script>
        </body>
        </html>
    `);
    ventana.document.close();
}


    function nuevoTitulo() {
        var contenido = document.getElementById('contenido'); 
        var texto = document.getElementById("texto").value.trim();
    
        if (texto) {
            var titulo = document.createElement("h1"); 
            titulo.textContent = texto;  
            contenido.appendChild(titulo);  
    
            document.getElementById("texto").value = ""; // Limpiar el campo de texto
        } else {
            alert("Por favor, ingresa un título.");
        }
    }

    function nuevoEnlace() {
        var contenido = document.getElementById('contenido');  
        var url = prompt("Ingrese la URL del enlace:");
        var texto = prompt("Ingrese el texto del enlace:");
    
        if (url && texto) { 
            var enlace = document.createElement("a");  
            enlace.href = url;  
            enlace.textContent = texto;  
            enlace.target = "_blank";  
    
            contenido.appendChild(enlace);  
            contenido.appendChild(document.createElement("br")); // Salto de línea
        } else {
            alert("Por favor, ingresa una URL y un texto válido.");
        }
    }
    
    function limpiarContenido() {
        document.getElementById("contenido").innerHTML = "";  // Borra el contenido generado
        document.getElementById("texto").value = "";          // Borra el texto ingresado
        document.getElementById("imagen").value = "";         // Resetea el input de imagen
    }
    
    
    
