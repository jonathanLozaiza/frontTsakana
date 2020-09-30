import React from "react"
import Detalles from "./detalles"

const Colecciones = () => {

    return (
        <div className=" bg-light pb-4">
            <div className="d-flex flex-row justify-content-center pt-5">
                <div className="col-md-4 col-sm-2">
                    <hr></hr>
                </div>
                <div className="col-md-4 col-sm-8">
                    <h3>PRODUCTOS RECOMENDADOS</h3>
                </div>
                <div className="col-md-4 col-sm-2">
                    <hr></hr>
                </div>
            </div>

            <div className="row justify-content-center">
                <div id="container">	
	
                    <div className="product-details">
                            
                        <p>CAMISAS</p>
                        <h1>COLECCIÓN DE OTOÑO</h1>
 
                        <div>
                            <button className="buttonProd colorNew">
                           
                                <span>Ver más</span>
                            
                            </button>
                        </div>
                                
                    </div>
                        
                    <div className="product-image">
                        <img src="https://www.dhresource.com/0x0/f2/albu/g7/M00/CA/73/rBVaSVuvjaKAR-lMAAHTwIMKsmw793.jpg" alt="Omar Dsoky"  />
                    </div>

                </div>

                <div id="container">	
	
                    <div className="product-details">
                            
                        <p>PANTALONETAS</p>
                        <h1>INMERSIÓN VERANO</h1>
 
                        <div>
                            <button className="buttonProd colorNew">
                           
                                <span>Ver más</span>
                            
                            </button>
                        </div>
                                
                    </div>
                        
                    <div className="product-image">
                        <img src="https://asturias.com.co/wp-content/uploads/2018/11/m131nbff_blk_1.jpg" alt="Omar Dsoky"  />
                    </div>
                    
                </div>
            </div>
      </div>
    )
}

export default Colecciones