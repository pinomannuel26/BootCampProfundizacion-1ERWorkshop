export const getServices = async (URL) =>{
    try{
        const RESPONSE = await axios.get(URL); 
        return RESPONSE.data;
    }catch(error){
        console.log('Error fetching services: ', error);
        return[];
    }
    
}