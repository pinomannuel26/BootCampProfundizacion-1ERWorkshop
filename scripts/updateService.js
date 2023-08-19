export const updateService = async ( service)=>{
    try{
        const RESPONSE = await axios.put(`http://localhost:3000/services/${service.id}`,{
            ...service
        });
        
        return RESPONSE;
    }catch(error){
        console.error('Error, updating service: ',error);
        alert('Hubo un error al actualizar el producto. Por favor, inténtalo de nuevo.');
    }
}


