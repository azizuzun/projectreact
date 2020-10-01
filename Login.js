import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "home" //home by default
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      target: e.target.value
    });
  }
  render() {
    return (
      <div>
        <nav className="navstyle">
          <div className="container ">
            <div className="row">
              <div className="col-md-3">

              </div>
              <div className="col-md-6 text-center">
                <div className="col-md-6 d-inline-block">
                  <button className="btn btn-secondary" onClick={this.handleClick} value="home">
                    home
                  </button>
                </div>
              
            
                <div className="col-md-6 d-inline-block">
                  <button className="btn btn-secondary" onClick={this.handleClick} value="contact">
                    contact
                  </button>
                </div>
              </div>
              <div className="col-md-3">

              </div>
              
            </div>
          </div>
          
        </nav>
        <main>
          {this.state.target === "home" && <Home />}
    
          {this.state.target === "contact" && <Contact />}
        </main>
      </div>
    );
  }
}
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "home" //home by default
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      target: e.target.value
    });
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <script src="https://unpkg.com/react/umd/react.production.min.js" ></script>
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" ></script>
      <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
        
        <div className="container">
          <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-6">
            <img className="App-logo p-5" />
              <div className="mb-3 mx-auto">
                <div className="mb-3">
                  <div className="col-md-12 col-xs-12 mb-3">
                    <input className="form-control" placeholder="Username" maxLength="20"></input>
                  </div>
                  <div className="col-md-12 col-xs-12 mb-3">
                    <input className="form-control" placeholder="Password" maxLength="20"></input>
                  </div>
                  
                </div>
                <button className="btn btn-danger mr-3">Login</button>
                <button className="btn btn-dark" >Register</button>
              </div>
              
          </div>
          </div>
          <a>
            Şifremi Unuttum
          </a>
            </div>
            <div className="col-md-3">

            </div>
            
      </header>
      
    </div>
  );
}
}
class Contact extends React.Component {
  
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <script src="https://unpkg.com/react/umd/react.production.min.js" ></script>
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" ></script>
      <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
        
        <div className="container">
          <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-6">
            <img className="App-logo p-5" />
              <div className="mb-3 mx-auto">
                <div className="mb-3">
                  <div className="col-md-12 col-xs-12 mb-3">
                    <input className="form-control" placeholder="Username" maxLength="20"></input>
                  </div>
                  <div className="col-md-12 col-xs-12 mb-3">
                    <input className="form-control" placeholder="Password" maxLength="20"></input>
                  </div>
                  <div className="col-md-12 col-xs-12 mb-3">
                    <input className="form-control" placeholder="Confirm Password" maxLength="20"></input>
                  </div>
                  <div className="col-md-12 col-xs-12 mb-3">
                    <input className="form-control" placeholder="E-Mail" maxLength="40"></input>
                  </div>
                </div>
                <button className="btn btn-danger mr-3">Login</button>
                <button className="btn btn-dark">Register</button>
              </div>
              
          </div>
          </div>
          <a>
            Şifremi Unuttum
          </a>
            </div>
            <div className="col-md-3">

            </div>
            
      </header>
      
    </div>
    );
  }
}
export default App;
