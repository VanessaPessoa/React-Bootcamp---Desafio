import React, {useState} from "react";

const Item = ({ repo, user}) => {    
    return(

        <div className="repo-item">
            <h2>{repo.name}</h2>
                <p>Estrelas: {repo.stargazers_count}</p>
                <p>Problemas: {repo.open_issues}</p>
                <p>Forks: {repo.forks} </p>
                <p> Linguagem: {repo.language} </p>
                {/* <img className= "img-user" src={repo.owner.avatar_url} /> */}

                {/* {IsModalVisible  ? (
                    <div className="modal" onClick={()=>setIsModalVisible(false)}> 
                        <div className="area-text">
                         
                            <p> Login: {repo.owner.login}</p>
                            <p>Tipo: {repo.owner.type} </p>
                            <a href={repo.owner.html_url}> Acessar perfil </a>

                            <h2> Repositorio: {repo.name} </h2>
                            <h3> Linguagem: {repo.language} </h3>
                            <h3>Dados da owen:</h3>
                        </div>

                    </div>     
                        ) : null}  */}
        </div>
    )
}

export default Item;


// href={repo.html_url}
//            key={repo.id}
//            target="_blank"]