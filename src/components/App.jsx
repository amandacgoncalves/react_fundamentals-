import "./../App.css";
import React from "react";

import Card from "./layout/Card";

import ListaAlunos from "./repeticao/ListaAlunos";
import Familia from "./basic/Familia";
import FamiliaMembro from "./basic/FamiliaMembro";
import Random from "./basic/Random";
import First from "./basic/First";
import WParams from "./basic/WParams";
import Fragment from "./basic/Fragment";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card title="#06 -  Repetição" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card title="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Amanda" />
          <FamiliaMembro nome="Júlia" />
          <FamiliaMembro nome="Ana" />
        </Familia>
      </Card>

      <Card title="#04 - Desafio Aleatório" color="#FA6900">
        <Random min={1} max={60} />
      </Card>
      <Card title="#03 - Fragmento" color="#E94C6F">
        <Fragment />
      </Card>
      <Card title="#02 - Com parâmetro" color="#E8B71A">
        <WParams title="Situação do Aluno" aluno="Pedro" nota={9.3} />
      </Card>
      <Card title="#01 - Primeiro Componente" color="#588C73">
        <First></First>
      </Card>
    </div>
  </div>
);
