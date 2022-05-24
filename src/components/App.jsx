import React from "react";

import Card from "./layout/Card";
import Random from "./basic/Random";
import First from "./basic/First";
import WParams from "./basic/WParams";
import Fragment from "./basic/Fragment";

export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>

    <Card title="#04 - Desafio Aleatório">
    <Random min={1} max={60} />
    </Card>

    <Card title="#03 - Fragmento">
          <Fragment />
    </Card>

    <Card title="#02 - Com parâmetro">
    <WParams title="Situação do Aluno" aluno="Pedro" nota={9.3} />
    </Card>

    <Card title="#01 - Primeiro Componente">
    <First></First>
    </Card>

  </div>
);
