//creamos una función que nos permita recibir los datos del formulario
import {validarFormularioPtes} from './validacionFormularioPacientes.js'
export function capturarDatosPte(etiquetaNombrePte,etiquetaDocumentoPte,etiquetaRegimen,etiquetaTelefonoPte,etiquetaCorreoPte,etiquetaGrupoIngreso,etiquetaCuota){

let nombrespacientes=etiquetaNombrePte.value
let documentopacientes=etiquetaDocumentoPte.value
let regimenpaciente=etiquetaRegimen.value
let telefonopacientes=etiquetaTelefonoPte.value
let correopacientes=etiquetaCorreoPte.value
let grupoingreso=etiquetaGrupoIngreso.value
let cuota=etiquetaCuota.value

//debemos almacenar todos los valores del formularion en una sola variable
//en una sola variable
//objeto= almacenar varios datos en 1 solo espacio de memoria

let datosFormularioPacientes={
    nombrepte:nombrespacientes,
    documentopte:documentopacientes,
    regimen:regimenpaciente,
    telefono:telefonopacientes,
    correopte:correopacientes,
    grupoin:grupoingreso,
    cuotamoderadora:cuota

}

validarFormularioPtes(datosFormularioPacientes)

}