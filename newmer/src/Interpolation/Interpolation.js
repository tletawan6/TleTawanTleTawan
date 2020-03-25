import React from "react"
import { Container, Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import { Collapse} from "react-bootstrap"
import NewtonIN from "./NewtonIN"
import Lagrange from "./Lagrange"
import Spline from "./Spline"

class Interpolation extends React.Component {
    constructor(props){
        super(props)
        this.state={
          menucontent:false,
          menuon1:false,
          menuon2:false,
          menuon3:false
        }
        this.setmenucontent=this.setmenucontent.bind(this)
        this.setmenuzero=this.setmenuzero.bind(this)
        this.setmenuon1=this.setmenuon1.bind(this)
        this.setmenuon2=this.setmenuon2.bind(this)
        this.setmenuon3=this.setmenuon3.bind(this)
        this.delaytime=this.delaytime.bind(this)
        this.delaytimezero=this.delaytimezero.bind(this)
    }
    setmenuzero(){
        this.setState({menucontent:false})
        this.delaytimezero()
    }
    setmenucontent(event){
        this.setState({menucontent:event})
    }
    setmenuon1(event){
        this.setState({menuon1:event})
        this.delaytime(event)
    }
    setmenuon2(event){
        this.setState({menuon2:event})
        this.delaytime(event)
    }
    setmenuon3(event){
        this.setState({menuon3:event})
        this.delaytime(event)
    }
    callNewtonIN(){
        return  <NewtonIN/>
    }
    callLagrange(){
        return  <Lagrange/>
    }
    callSpline(){
        return  <Spline/>
    }
    delaytime(event){
        if(event){
            setTimeout(function() {
                this.setState({menucontent:event})
            }.bind(this), 100);
        }
    }
    delaytimezero(){
        setTimeout(function() {
            this.setState({menuon1:false})
            this.setState({menuon2:false})
            this.setState({menuon3:false})
        }.bind(this), 300);  
    }
    render(){
        const styles={ backgroundColor: '#333', borderColor: '#333' }
        return(
            <div className="card col-mb-12" style={styles}>
                <Collapse in={!this.state.menucontent}>
                <Container>
                    <Row>
                        <Col>
                            <div className="cardlistST" style={styles}><div className="card mb-4 shadow-sm">
                                <div className="card card-body center">
                                    <div className=" STspacetop"/>
                                    Newton's divided-difference
                                    <div className=" STspacebottom"/>
                                </div>
                                <div className="card card-body">
                                    <button className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon1(!this.state.menuon1)}>View</button>
                                </div>
                            </div></div>
                        </Col>
                        <Col>
                            <div className="cardlistST" style={styles}><div className="card mb-4 shadow-sm">
                                <div className="card card-body center">
                                    <div className=" STspacetop"/>
                                    Lagrange polynomials
                                    <div className=" STspacebottom"/>
                                </div>
                                <div className="card card-body">
                                    <button className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon2(!this.state.menuon2)}>View</button>
                                </div>
                            </div></div>
                        </Col>
                        <Col>
                            <div className="cardlistST" style={styles}><div className="card mb-4 shadow-sm">
                                <div className="card card-body center">
                                    <div className=" STspacetop"/>
                                    Spline interpolation
                                    <div className=" STspacebottom"/>
                                </div>
                                <div className="card card-body">
                                    <button className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon2(!this.state.menuon2)}>View</button>
                                </div>
                            </div></div>
                        </Col>
                    </Row>
                </Container>
                </Collapse>
                <Collapse in={this.state.menuon1}>
                    <div className="card">
                        {this.state.menuon1 && this.callNewtonIN()}
                        <button onClick={()=>this.setmenuzero()} className="btn btn-primary">Back</button>
                    </div>
                </Collapse>
                <Collapse in={this.state.menuon2}>
                    <div className="card">
                        {this.state.menuon2 && this.callLagrange()}
                        <button onClick={()=>this.setmenuzero()} className="btn btn-primary">Back</button>
                    </div>
                </Collapse>
                <Collapse in={this.state.menuon3}>
                    <div className="card">
                        {this.state.menuon3 && this.callSpline()}
                        <button onClick={()=>this.setmenuzero()} className="btn btn-primary">Back</button>
                    </div>
                </Collapse>
            <div className="ContainerCM"/></div>
        )
    }
}
export default Interpolation;