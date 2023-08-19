import { updateService } from "./updateService.js";
import { getServices} from "./getServices.js";
import { createServices } from "./createService.js";

const CREATELINKINPUT = document.getElementById('linkImg');
const CREATETITULOINPUT = document.getElementById('titulo');
const CREATEDESCRIPTIONINPUT = document.getElementById('descripcion');
const BTNCREATE = document.getElementById('guardarService');
const BTNEDITARSERVICE = document.getElementById('btnEditar');

var params = new URLSearchParams(window.location.search);
const URL= 'http://localhost:3000/services/';
var serviceId = params.get('id');


BTNCREATE.addEventListener('click', async () => {
    const SERVICE ={
        img: CREATELINKINPUT.value,
        title: CREATETITULOINPUT.value,
        description: CREATEDESCRIPTIONINPUT.value
    }
    
    await createServices(URL, SERVICE);
    
});



BTNEDITARSERVICE.addEventListener('click', async ()=>{
    let id = parseInt(serviceId);
    const SERVICE ={
        id: id,
        img: CREATELINKINPUT.value,
        title: CREATETITULOINPUT.value,
        description: CREATEDESCRIPTIONINPUT.value
    }
    await updateService(SERVICE);
    alert('Servicio editado exitosamente');
   
})

async function cargardatos (){
    let SERVICES = await getServices(URL);
    let id = parseInt(serviceId)
    const SERVICE = SERVICES.find(serv => serv.id === id );
    console.log(SERVICE)
    if(SERVICE)
    {
        showUpdateForm(SERVICE)
    }
}

function showUpdateForm (SERVICE)
{
    CREATELINKINPUT.value = SERVICE.img;
    CREATETITULOINPUT.value = SERVICE.title;
    CREATEDESCRIPTIONINPUT.value = SERVICE.description;
}

cargardatos();
