'use strict';

const video= document.getElementById('video');
const container= document.querySelector(".js__container")

function handleStart(){
    alert("Cargando las especificidades de video/audio...")
    container.innerHTML="Cargando...las especificidades de video/audio"
}

function handleChange(){
    alert("Cargando...y actualizando la duración de los datos")
    container.innerHTML="Cargando...y actualizando la duración de los datos"
}

function handleMeta(){
    alert("Cargando...duración dimensiones y texto")
    container.innerHTML="Cargando...duración dimensiones y texto"
}

function handleLoading(){
    container.innerHTML="Tu video está listo"
    console.log("El video ya estaría cargado")
}

video.addEventListener("loadstart", handleStart);
video.addEventListener("durationchange", handleChange);
video.addEventListener("loadedmetadata", handleMeta);
video.addEventListener("loadeddata", handleLoading);