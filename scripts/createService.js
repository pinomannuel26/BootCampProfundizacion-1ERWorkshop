export const createServices = async (URL, service)=>{
    try{
        const RESPONSE = await axios.post(URL,service);
        return RESPONSE;
    }catch(error){
        console.log('Error crating service: ', error);
        alert('Hubo un error al crear el nuevo servicio, por favor, intentalo de nuevo.');
    }
}
