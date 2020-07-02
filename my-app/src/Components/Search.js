import React from "react";

import Lupa from '../img/lupa.png'
import './style.css'

const Form = ({ user, loading, error, buttonAction, changeUser }) => (
  <div className="form">
    <input
      type="text"
      className="search"
      value={user}
      placeholder="Usuário ou organização"
      onChange={e => changeUser(e.target.value)}
    />
    <button className="btn-search" onClick={buttonAction}>
      {/* <img src={Lupa} className=" img-btn"/> */}
      Buscar
    </button>
  </div>
);

export default Form;
