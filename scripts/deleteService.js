export const deleteService = async (URL, serviceID)=>{
    try{
        await axios.delete(`${URL}${serviceID}`);
        return true;
    }catch(e){
        console.log('Error, deleting service: ',e);
        alert('Hubo un error al eliminar el servicio, intentalo de nuevo.');
    }
}