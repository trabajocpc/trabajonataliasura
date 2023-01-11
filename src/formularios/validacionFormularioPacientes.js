export function validarFormularioPtes(datos){

    console.log(datos)

    //Referencias a etiquetas que quiero validar
    let etiquetaNombrePte=document.getElementById("nombrespacientes")
    let etiquetaDocumentoPte=document.getElementById("documentopacientes")

    //Validemos 3 campos del formulario
//nombres-docuemento-registro del médico
let nombrepaciente=datos.nombrepte
let documentopaciente=datos.documentopte

console.log(nombrepaciente)
console.log(documentopaciente)

//Agregar todos los caminos posibles para validar el formulario
if(nombrepaciente=="" && documentopaciente==""){
    etiquetaNombrePte.classList.add("is-invalid")
    etiquetaDocumentoPte.classList.add("is-invalid")
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Nombre y documento son obligatorios',        
      })
}else if(nombrepaciente=="" && documentopaciente!=""){
    etiquetaNombrePte.classList.add("is-invalid")
    etiquetaDocumentoPte.classList.remove("is-invalid")
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El nombre es obligatorio',        
      })
}else if(nombrepaciente!="" && documentopaciente==""){
    etiquetaNombrePte.classList.remove("is-invalid")
    etiquetaDocumentoPte.classList.add("is-invalid")
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El documento es obligatorio',        
      })
}else{
    etiquetaNombrePte.classList.remove("is-invalid")
    etiquetaDocumentoPte.classList.remove("is-invalid")
}

}

