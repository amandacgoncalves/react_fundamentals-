import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import First from './components/basic/First'
import WParams from './components/basic/WParams'

ReactDOM.render(
    <div>
    <First></First>
    <WParams 
    title="Situação do Aluno" 
    aluno="Pedro" 
    nota={9.3} 
    />
    </div>, 
    document.getElementById('root')
);
