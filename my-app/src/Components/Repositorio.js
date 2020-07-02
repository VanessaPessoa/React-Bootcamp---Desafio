import React from "react";
import Item from "./Itens";

const Repositorio = ({ repos }) => (
  <div className="repos">
      <p> Encontrados {repos.length} repositorios</p>
    {repos.map(repo => (
      <Item repo={repo} />
    ))}
  </div>
);

export default Repositorio
