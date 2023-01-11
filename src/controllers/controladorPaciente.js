//Importaciones



import {capturarDatosPte} from '../formularios/formularioPacientes.js'

//etiquetas de control
let etiquetaNombrePte=document.getElementById("nombrespacientes")
let etiquetaBotonPte=document.getElementById("botonenviopte")
let etiquetaDocumentoPte=document.getElementById("documentopacientes")
let etiquetaRegimen=document.getElementById("regimen")
let etiquetaTelefonoPte=document.getElementById("telefonopacientes")
let etiquetaCorreoPte=document.getElementById("correopacientes")
let etiquetaGrupoIngreso=document.getElementById("grupoingreso")
let etiquetaCuota=document.getElementById("cuota")

//detectar el evento clic

etiquetaBotonPte.addEventListener("click",function(evento){
    evento.preventDefault()
   
   capturarDatosPte(etiquetaNombrePte,etiquetaDocumentoPte,etiquetaRegimen,etiquetaTelefonoPte,etiquetaCorreoPte,etiquetaGrupoIngreso,etiquetaCuota)
})