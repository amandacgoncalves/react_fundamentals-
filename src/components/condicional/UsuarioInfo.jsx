import React from "react";
import If from "./If";
import { Else } from "./If";

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            {/* <If test={usuario && usuario.nome}>
            Seja bem Vinda <strong>{ usuario.nome }</strong>!
            </If>
            <If test={!usuario || !usuario.nome}>
            Seja bem Vinda <strong>Pessoa</strong>!
            </If> */}


            <If test={usuario && usuario.nome}>
            Seja bem Vinda <strong>{ usuario.nome }</strong>!
            <Else>
                Seja bem Vinda <strong>Pessoa</strong>!
            </Else>
            </If>
        </div>
    )
}