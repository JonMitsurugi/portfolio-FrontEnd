"use strict";
let porfolio = {
    Nombre: "",
    Apellido: ""
};
function getNombre(nombre) {
    const nombre1 = document.getElementById("nombre");
    nombre1.textContent = nombre;
}
function getApellido(apellido) {
    const a = document.getElementById("apellido");
    a.textContent = apellido;
    return porfolio.Apellido = apellido;
}
function showFile1(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (ProgressEvent) => {
        var _a;
        let s = (_a = reader.result) === null || _a === void 0 ? void 0 : _a.toString();
        console.log(s);
        let stringArray = s.split('\n');
        getNombre(stringArray[0]);
        getApellido(stringArray[1]);
    };
}
