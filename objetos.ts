interface Persona {
  Nombre: string,
  Apellido: string,
}

let porfolio: Persona = {
  Nombre: "",
  Apellido: ""
}

function getNombre(nombre: string): void {
  const nombre1 = document.getElementById("nombre");
  nombre1!.textContent = nombre;
}

function getApellido(apellido: string): string {
  const a = document.getElementById("apellido");
  a!.textContent = apellido;
  return porfolio.Apellido = apellido;
}

function showFile1(input: { files: any[]; }) {
  let file = input.files[0];
  let reader = new FileReader();

  reader.readAsText(file);
  reader.onload = (ProgressEvent) => {
    let s = reader.result?.toString();
    console.log(s);

    let stringArray = s!.split('\n');
    getNombre(stringArray[0]);
    getApellido(stringArray[1]);


  }
}