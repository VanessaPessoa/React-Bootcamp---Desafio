import React from "react";
import Item from "./Itens";

const Repositorio = ({ repos, owner, user}) => {
  
 return(
    <div className="repos">  
      {repos.length !== 0? (
        <div className="owner">
          <img className="img-user" src={owner.avatar_url} />   
          <p className="login"> {owner.login}</p>
          <p className="tipo">Tipo: {owner.type} </p>
          {/* <a className="tipo"  href={owner.followers_url}>Visualizar seguidores</a>
          <a className="tipo"  href={owner.following_url}> Seguindo</a> */}
          <a className="perfil" href={owner.html_url}> Acessar perfil </a>
      </div>
      ) : null}
        { repos.map(repo => (
            <div>
              <Item repo={repo} />
              </div>
            

        ))}


      </div>
  )
}

export default Repositorio
