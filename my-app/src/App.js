import React, { Component } from "react";

import "./App.css";

import Header from "./Components/Header";
import Search from "./Components/Search";
import Repositorios from "./Components/Repositorio";
class App extends Component {
  state = {
    user: "",
    repos: [],
    error: "",
    loading: false,
    owner: "",
    seguidores: []
  };

  changeUser = user => {
    this.setState({ user });
  };

  searchUser = async() =>{
    const {user} = this.state

    fetch(`https://api.github.com/users/${user}/repos`)
    .then((res) => res.json())
    .then(findresponse => {
        console.log(findresponse)
        this.setState({
            repos: findresponse,
            owner: findresponse[0].owner
        })
    });
  }

  

  buttonAction = ()=>{
    this.searchUser();
  }

 
  render() {
    const { user, repos, error, loading, owner } = this.state;

    return (
      <div className="App">
        <Header >
        <Search
              changeUser={this.changeUser}
              user={user}
              error={error}
              loading={loading}
              buttonAction={this.buttonAction}
            />  
          
            </Header> 

        <Repositorios repos={repos} owner={owner} user={user}/>
      </div>
    );
  }
}

export default App;
