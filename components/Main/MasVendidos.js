import React from "react"
import styled from "@emotion/styled"
import {Marco} from "./marco"
import Detalles from "./detalles"

const MasVendido = () => {

    const masVendidos = [
        {id:"1", categoria:"CAMISAS", url:"https://chevignon.vteximg.com.br/arquivos/ids/448393-1000-1232/63_639A006_060017_0.jpg?v=637072890811630000"},
        {id:"2", categoria:"JEANS", url:"https://chevignon.vteximg.com.br/arquivos/ids/448393-1000-1232/63_639A006_060017_0.jpg?v=637072890811630000"},
        {id:"3", categoria:"ZAPATOS", url:"https://chevignon.vteximg.com.br/arquivos/ids/448393-1000-1232/63_639A006_060017_0.jpg?v=637072890811630000"},
        {id:"4", categoria:"RELOJES", url:"https://chevignon.vteximg.com.br/arquivos/ids/448393-1000-1232/63_639A006_060017_0.jpg?v=637072890811630000"},
        {id:"5", categoria:"CARTERAS", url:"https://chevignon.vteximg.com.br/arquivos/ids/448393-1000-1232/63_639A006_060017_0.jpg?v=637072890811630000"}
    ]

    return (
        <div className="m-5">
            <div className="d-flex flex-row justify-content-center">
            <div className="col-md-4 col-sm-2">
                <hr></hr>
            </div>
            <div className="col-md-4 col-sm-8">
                <h3>PRODUCTOS MÁS VENDIDOS</h3>
            </div>
            <div className="col-md-4 col-sm-2">
                <hr></hr>
            </div>
            </div>

            <div className="row justify-content-center">
                {masVendidos.map(producto => (
                    <Detalles key={producto.id} producto={producto} />
                ))
                }
            </div>
      </div>
    )
}

export default MasVendido