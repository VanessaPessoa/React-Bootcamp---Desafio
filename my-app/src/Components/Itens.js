import React from "react";

const Item = ({ repo }) => (
 <div className="repo-item">
     <h2>{repo.name}</h2>
        <p>Estrelas: {repo.stargazers_count}</p>
        <p>Problemas: {repo.open_issues}</p>
        <a className="ver-mais"
           href={repo.html_url}
           key={repo.id}
           target="_blank"
        > 
            Ver mais
        </a>
 </div>
);

export default Item;
