import React from "react"
import styled from "@emotion/styled"
import {Marco} from "./marco"

const Detalles = ({producto}) => {
    console.log(producto.url)
    return (
            <Marco className="mr-3 ml-3 mt-5 justify-content-center" image={producto.url}>
                <h1 className="mt-5">{producto.categoria}</h1>
                <a href="#">Ver más</a>
            </Marco>         
         
    )
}

export default Detalles