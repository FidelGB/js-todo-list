import "../css/componentes.css"
import webpacklogo from "../assets/img/webpack-logo.png"

export const saludar = (nombre = "sin nombre") => {
    console.log("Creando etiqueta h1");

    const h1 = document.createElement("h1")
    h1.innerHTML = `Hola ${nombre}!!!!`
    h1.style = 
    document.body.append(h1);

    // IMG
    const img = document.createElement("img");
    img.src = webpacklogo;
    document.body.append(img)
}

