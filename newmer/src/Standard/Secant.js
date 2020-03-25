import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import {compile} from 'mathjs'
import { Collapse } from "react-bootstrap"
const axios = require('axios');
var labelSec=[]

class Secant extends React.Component{
    constructor(props){
        super(props)
        this.state={
          SumX:"",
          errorX:"",
          X0:"",
          X1:"",
          Xm:"",
          Iteration:"",
          talang:false
        }
        this.setSumX=this.setSumX.bind(this);
        this.setX0=this.setX0.bind(this);
        this.setX1=this.setX1.bind(this);
        this.setIteration=this.setIteration.bind(this);
    }
    setSumX(event){
        this.setState({SumX:event.target.value})
    }
    setX0(event){
        this.setState({X0:event.target.value})
    }
    setX1(event){
        this.setState({X1:event.target.value})
    }
    setIteration(event){
        this.setState({Iteration:event.target.value})
    }
    runauto(){
        axios.get('http://192.168.99.100:3001/users/ST')
        .then((response) => {
            console.log(response)
            this.setState({SumX:response.data[0].sumx})
            this.setState({X0:response.data[0].x0})
            this.setState({X1:response.data[0].x1})
        })   
    }
    runfun(event){
        this.setState({talang:event})
        if(event){
            labelSec.length=0
           this.fun()
        }
        
    }
    showfun(){
        return labelSec
    }
    fun(){
        var j=1
        var Errornew=0
        var Errorx=-1
        const Fx1 = compile(this.state.SumX)
        var x=[]
        x[0]= parseFloat(this.state.X0)
        x[1]= parseFloat(this.state.X1)
            let X = {
                x: x[j]
            }
            let Y = {
                x: x[j-1]
            }
            x[j+1] = x[j]-(Fx1.evaluate(X)*(x[j]-x[j-1]))/(Fx1.evaluate(X)-Fx1.evaluate(Y))
            Errornew=Math.abs((x[j+1]-x[j])/x[j+1])
            labelSec.push(
            <tr>
                <th>0</th>
                <th>{x[j-1]}</th>
                <th>NULL</th>
            </tr>
            )
            labelSec.push(
            <tr>
                <th>1</th>
                <th>{x[j]}</th>
                <th>NULL</th>
            </tr>
            )
            labelSec.push(
            <tr>
                <th>2</th>
                <th>{x[j+1]}</th>
                <th>{Errornew.toFixed(6)}</th>
            </tr>
            )
        while(Errornew>0 && Errorx!==Errornew){
            j++
            Errorx=Errornew
            let X = {
                x: x[j]
            }
            let Y = {
                x: x[j-1]
            }
            x[j+1] = x[j]-(Fx1.evaluate(X)*(x[j]-x[j-1]))/(Fx1.evaluate(X)-Fx1.evaluate(Y))
            Errornew=Math.abs((x[j+1]-x[j])/x[j+1])
            labelSec.push(
            <tr>
                <th>{j+1}</th>
                <th>{x[j+1]}</th>
                <th>{Errornew.toFixed(6)}</th>
            </tr>
            )
        }
    }
    render(){
        const styles={
			width: "250px"
        }
        return(
            <div className="card">
                <label className="alert">
                    <br/><div className="Contentnumersub1">Secant</div>
                    <div className="Contentnumersub2 STspacebottom"> Given a curve, a secant line (or just secant) is a line which passes through two points of that curve. To understand why the secant function is so named, see trigonometric functions.
                                                    The secant method is a technique for finding the root of a scalar-valued function f(x) of a single variable x when no information about the derivative exists. It is similar in many ways to the false-position method, but trades the possibility of non-convergence for faster convergence.</div>
                    <br/>
                    <div className="input-group" >
                        <div className="input-group-prepend"><span className="input-group-text">f(x)</span></div>
                            <input type="text" style={styles} value={this.state.SumX} onChange={this.setSumX}/>
                        </div><br/>
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">X0</span></div>
                                <input type="number" style={styles} value={this.state.X0} onChange={this.setX0}/>
                        </div><br/>
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">X1</span></div>
                                <input type="number" style={styles} value={this.state.X1} onChange={this.setX1}/>
                        </div><br/>
                        <button onClick={()=>this.runfun(true)} className="btn btn-danger">sum</ button>
                        <button onClick={()=>this.runauto(true)} className="btn btn-danger">auto</ button>
                </label>
                <Collapse in={this.state.talang}><Table>
                    <thead>
                        <tr>
                        <th>Iteration</th>
                        <th>X</th>
                        <th>ERROR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showfun()}
                    </tbody>
                </Table></Collapse>
            </div>
        )
    }
}
export default Secant;