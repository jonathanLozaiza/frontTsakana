import React from "react"

const Productos = () => {
    return (
        <div className="d-flex flex-row justify-content-center pt-5 colorNew">
                <div className="col-lg-4 marginComponentProds">
                    <h1 className="text-white">NUEVA COLECCIÓN</h1>
                </div>

                <div className="contenedor marginComponentProds">
                    <div className="carousel">
                        <div className="carousel__contenedor">
                            <button aria-label="Anterior" className="carousel__anterior">
                                <i className="fas fa-chevron-left"></i>
                            </button>

                            <div className="carousel__lista">
                                <div className="carousel__elemento">
                                    <img src="https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/3052267.jpg" alt="Rock and Roll Hall of Fame" height="200px" width="300px"/>
                                    <p>Pantaloneta de baño azul claro con rayas</p>
                                    <span>$80.000</span>
                                </div>
                                <div className="carousel__elemento">
                                    <img src="https://data.pixiz.com/output/user/frame/preview/api/big/1/3/3/9/3069331_726cc.jpg" alt="Constitution Square - Tower I" height="200px"/>
                                    <p>Camisa negra, fondo entero y manga larga</p>
                                    <span>$130.000</span>
                                </div>
                                <div className="carousel__elemento">
                                    <img src="https://data.pixiz.com/output/user/frame/preview/api/big/1/3/3/9/3069331_726cc.jpg" alt="Empire State Building" height="200px"/>
                                    <p>Jean desteñido azul claro, silueta normal</p>
                                    <span>$150.000</span>
                                </div>
                                <div className="carousel__elemento">
                                    <img src="https://data.pixiz.com/output/user/frame/preview/api/big/1/3/3/9/3069331_726cc.jpg" alt="Harmony Tower" height="200px"/>
                                    <p>Mochila negra cuero</p>
                                    <span>$170.000</span>
                                </div>
                
                                <div className="carousel__elemento">
                                    <img src="https://data.pixiz.com/output/user/frame/preview/api/big/1/3/3/9/3069331_726cc.jpg" alt="Empire State Building" height="200px"/>
                                    <p>Empire State Building</p>
                                </div>
                                <div className="carousel__elemento">
                                    <img src="https://data.pixiz.com/output/user/frame/preview/api/big/1/3/3/9/3069331_726cc.jpg" alt="Harmony Tower" height="200px"/>
                                    <p>Harmony Tower</p>
                                </div>
                                <div className="carousel__elemento">
                                    <img src="https://data.pixiz.com/output/user/frame/preview/api/big/1/3/3/9/3069331_726cc.jpg" alt="Empire State Building" height="200px"/>
                                    <p>Empire State Building</p>
                                </div>
                                <div className="carousel__elemento">
                                    <img src="https://data.pixiz.com/output/user/frame/preview/api/big/1/3/3/9/3069331_726cc.jpg" alt="Harmony Tower" height="200px"/>
                                    <p>Harmony Tower</p>
                                </div>
                            </div>

                            <button aria-label="Siguiente" className="carousel__siguiente">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>

                        <div role="tablist" className="carousel__indicadores"></div>
                    </div>
                </div>
        </div> 
    )
}

export default Productos;