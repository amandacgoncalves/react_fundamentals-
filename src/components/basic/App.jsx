import React from "react";
import Random from "./Random";
import First from "./components/basic/First";
import WParams from "./components/basic/WParams";
import Fragment from "./components/basic/Fragment";

export default () => (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Random min={1} max={60}/>
      <Fragment />
      <WParams title="Situação do Aluno" aluno="Pedro" nota={9.3} />
      <First></First>
    </div>
  );
