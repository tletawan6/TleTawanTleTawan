import React from "react"
import Home from "./Home.js"
import ChooseMenu from "./ChooseMenu.js"
import Standard from "./Standard/Standard"
import Direct from "./Direct/Direct"
import Integration from "./Integration/Integration"
import Interpolation from "./Interpolation/Interpolation"
import Regression from "./Regression/Regression"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import {Container, Row,Col,Nav} from "react-bootstrap";
import {BrowserRouter as Router,Route,} from "react-router-dom"


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      homemenustart:false,
      homemenu:false,
      wait:""
    }
  }
  sethomemenu(event){
    this.setState({wait:500})
    this.setState({homemenu:event}) 
    this.space(event);
  }
  space(event){
    if(event){
      setTimeout(function() {
        this.setState({homemenustart:event})
      }.bind(this), 200);  
    }    
  }
  render() {
    return (
      <div className="text-center bg-dark">
          <div className="APPhead2">
          <Container className="main-container APPbackground d-flex ContainerAPP flex-column h-100 p-3 mx-auto">
            <div className="container mb-auto APPhead">
            <Row>
              <Col className="md-2 mb-3 mb-md-auto h1">Numer</Col>
              <Col className="md-10">
                <Nav className=" nav-header justify-content-center justify-content-md-end">
                  <Nav.Item>
                    <a className="nav-link active" href="/">HOME</a>
                  </Nav.Item>
                  <Nav.Item>
                    <a className="nav-link active" href="/ChooseMenu">CONTENT</a>
                  </Nav.Item>
                  <Nav.Item>
                    <a className="nav-link active" href="https://www.facebook.com/title.tawan">CONTACT</a>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            </div>
          </Container>
          </div>
          <Router>
            <Route path="/" component={Home} exact/>
            <Route className="CMbackground " path="/ChooseMenu" component={ChooseMenu} exact/>
            <Route path="/Standard" component={Standard} exact/>
            <Route path="/Direct" component={Direct} exact/>
            <Route path="/Integration" component={Integration} exact/>
            <Route path="/Interpolation" component={Interpolation} exact/>
            <Route path="/Regression" component={Regression} exact/>
          </Router>
        <footer className="footer center">
          <div>Made By <a href="https://www.facebook.com/title.tawan" target="_self">Title Tawan.</a></div >
        </footer>
      </div>
    )
  }
}

export default App;