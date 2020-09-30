import React from "react"
import styled from '@emotion/styled'

const InputText = styled.input`
    border : 1px solid var(--gris3);
    padding: .5rem;
    width:100%;
`;

const InputSubmit = styled.input`
    height : 32px;
    width : 32px;
    display: block;
    background-size : 1.5rem;
    background-image : url('/static/img/lupa2.png');
    background-repeat : no-repeat;
    position : absolute;
    right : .1rem;
    top: 5px;
    background-color : white;
    border : none;
    text-indent : -9999px;

    :hover{
        cursor:pointer;
    }
`

const Formulario = styled.form`
    position : relative;
    border-bottom: 1px solid black;
`

const Header = () => {
    return (
        <header>
            <div className="d-flex flex-row bd-highlight mb-3 colorNew justify-content-center p-1">
                <h4 className="text-white mr-5 pt-2">NUEVA COLECCIÓN</h4>
                <button type="button" className="btn colorNew border-white text-white">COMPRAR AHORA</button>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="col-md-4">
                    <a 
                        href="http://www.tsakana.com" 
                        title="TSAKANA" 
                    >
                        <img className="logo-main scale-with-grid" src="http://www.tsakana.com/wp-content/uploads/2020/07/tsakana_slogan-03.png" data-retina="http://www.tsakana.com/wp-content/uploads/2020/07/tsakana_slogan-03.png" data-height="192" alt="tsakana_slogan-03" width="200px" />
                    </a>
                </div>

                <div className="col-md-4">
                    <Formulario>
                        <InputText
                            type="text" 
                            placeholder="Busca por código o nombre del producto"
                        />

                        <InputSubmit
                            type="submit"
                        />
                    </Formulario>
                </div>

                <div className="col-md-4">
                    <ul className="navbar-nav ml-auto">
                        <ul className="navbar-nav ml-auto"> 
                        <li className="nav-item">
                                <a 
                                    className="nav-link active" 
                                    title="Mi cuenta"
                                    href="#"
                                >
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    Ciudad
                                </a>
                            </li>
                        
                            <li className="nav-item active">
                                <a 
                                    className="nav-link" 
                                    title="Mi cuenta"
                                    href="#"
                                >
                                    <i className="fas fa-shopping-cart mr-2"></i>
                                    Carrito  
                                </a>
                            </li>
                            
                            <li className="nav-item active">
                                <a 
                                    className="nav-link text-black" 
                                    rel="nofollow"
                                    href="#"
                                >
                                    <i className="fas fa-user mr-2"></i>
                                    Iniciar Sesión
                                </a>
                            </li>
                        </ul>
                    </ul>
                </div>
            </nav>

            <div className="bg-light row barra2">
            <nav className="navbar navbar-expand-lg navbar-light bg-light barra2">
                <div>
                <a className="navbar-brand border-right border-dark pr-3 ml-5 barra2" href="#">HOMBRE</a>
                <a className="navbar-brand" href="#">MUJER</a>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active espacio">
                            <a className="nav-link text-bold" href="#"><strong>CAMISAS</strong></a>
                        </li>
                        <li className="nav-item active espacio">
                            <a className="nav-link text-bold" href="#"><strong>JEANS</strong></a>
                        </li>
                        <li className="nav-item active espacio">
                            <a className="nav-link text-bold" href="#"><strong>ZAPATOS</strong></a>
                        </li>
                        <li className="nav-item active espacio">
                            <a className="nav-link text-bold" href="#"><strong>RELOJES</strong></a>
                        </li>
                        <li className="nav-item active espacio">
                            <a className="nav-link text-bold" href="#"><strong>CARTERAS</strong></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="d-flex flex-row bd-highlight colorNew justify-content-center p-1 barra2">
                    <p className="text-white mr-4 pt-1 pb-1 pl-2 fuente">NUEVA COLECCIÓN</p>
                    <button type="button" className="colorNew border-white text-white fuente">COMPRAR AHORA</button>
            </div>
            </div>
        </header>
    )
}

export default Header