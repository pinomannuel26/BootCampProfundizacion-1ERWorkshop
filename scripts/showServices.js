
export const showServices = async (listServices, element)=>{
    const SERVICE =await listServices;
    SERVICE.forEach(service => {
        const{id,img,title,description}= service; /**Desestructuracion */                
        element.innerHTML += `
            <div class="card" style="width: 18rem;">
                <div class="contenedor-imagenes">
                    <img id="img-servicio1" src="https://res.cloudinary.com/dbktnqag9/image/upload/v1691550943/workshop1-profundizacion/service_icon_bg_1_ibyaav.png" class="card-img-top" alt="fondo-servicio">
                    <img id="img-servicio2" src=${img} class="card-img-top" alt="fondo-servicio">
                </div>
                <div class="card-body">
                  <h2 >${title}</h2>
                  <p class="card-text">${description}</p>
                  <div class="botnes-CRUD">
                    <button onclick="editService(${id})" id="btnEditarTarget" class="btn btn-success"><i class="fas fa-edit"></i> EDITAR</button>
                    <button onclick="deleteServiceL(${id})"  class="btn btn-danger"> <i class="fas fa-trash-alt"></i> ELIMINAR</button>
                  </div>  
                </div>
            </div>
        `
    });
}