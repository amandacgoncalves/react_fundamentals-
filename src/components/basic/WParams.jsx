import React from "react"
export default function WParams(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.aluno} tem nota {props.nota} e está {status}</h3>
        </div>
    )
}