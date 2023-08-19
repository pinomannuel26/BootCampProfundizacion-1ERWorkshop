import { getServices} from "./getServices.js";
import { showServices } from "./showServices.js";
import { deleteService } from "./deleteService.js";



const ELEMENT =document.querySelector('.contenedor');
const URL= 'http://localhost:3000/services/';





document.addEventListener('DOMContentLoaded', ()=>{
    const SERVICES = getServices(URL);
    showServices(SERVICES, ELEMENT);
});

window.deleteServiceL = async function deleteServiceL(idService)
{
    deleteService(URL, idService);
}



window.createServiceL = async function createServiceL(){
    window.open(`/formulario.html `);
}


window.editService = async function editService (serviceId)
{
    window.open(`/formulario.html?id=${serviceId}`,'_self')
}


window.goToService = function goToService() {

    window.open('/formulario.html','_self')
}