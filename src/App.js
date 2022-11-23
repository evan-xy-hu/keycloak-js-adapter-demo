import logo from './logo.svg';
import './App.css';
import React from 'react';
import keycloak from "./Keycloak";

// const initKeycloak = (cb_success, cb_fail) => {
//   return keycloak.init({
//     onLoad: "login-required",
//     checkLoginIframe: false
//   }).then(function (authenticated) {
//     alert(authenticated ? 'authenticated' : 'not authenticated');
//     if (!!authenticated){
//       console.log("keycloak", keycloak)
//       cb_success()
//     }else{
//       cb_fail()
//     }
//   }).catch(function () {
//     alert('failed to initialize');
//     console.log("keycloak", keycloak)
//     cb_fail()
//   });
// }


class Welcome extends React.Component{
  render(){
    return (
      <h1>Welcome {this.props.name}, Have a nice Day!</h1>
    )
  }
}

class Anonymous extends React.Component{
  login = () => {
    keycloak.login().success(function (authenticated) {
      console.log("keycloak", keycloak)
      alert('success to login');
    }).error(function () {
      console.log("keycloak", keycloak)
      alert('failed to login');
    });
  }
  render(){
    return (
      <div>
        <h1>Welcom Anonymous, please login!</h1>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}




class App extends React.Component{

  componentDidMount(){
    // initKeycloak()
  }

  logout = () => {
    keycloak.logout().then( (sucess) => {
        alert("Logout success");
    }).catch( (error) => {
       alert("logout error: ")
       console.error(error)
    } ) 
  }

  render() {
    let username = keycloak.idTokenParsed.preferred_username
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <Hello name="Keycloak SSO"></Hello> */}
          <Welcome name={username}></Welcome>
          {/* <Anonymous></Anonymous> */}
          <button onClick={this.logout}>Logout</button>
        </header>
      </div>
    );
  }
}

export default App;
