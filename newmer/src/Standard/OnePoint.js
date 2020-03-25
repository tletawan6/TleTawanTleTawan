import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import {compile} from 'mathjs'
import { Collapse } from "react-bootstrap"
const axios = require('axios');
var labelBic=[]

class OnePoint extends React.Component{
    constructor(props){
        super(props)
        this.state={
          SumX:"",
          SumG:"",
          errro:"",
          talang:false
        }
        this.setSumX=this.setSumX.bind(this);
        this.setSumG=this.setSumG.bind(this);
    }
    setSumX(event){
        this.setState({SumX:event.target.value})
    }
    setSumG(event){
        this.setState({SumG:event.target.value})
    }
    runauto(){
        axios.get('http://192.168.99.100:3001/users/OP')
        .then((response) => {
            console.log(response)
            this.setState({SumG:response.data[0].sumx})
            this.setState({SumX:response.data[0].sumg})
        })   
    }
    runfun(event){
        if(event){
            labelBic.length=0
           this.fun()
        }
        this.setState({talang:event})   
    }
    showfun(){
        return labelBic
    }
    fun(){
        var one=compile(this.state.SumG)
        var sumx=parseFloat(this.state.SumX)
        var scope={x:sumx}
        var sumg=one.evaluate(scope)
        var error=(sumg-sumx)/sumg
        labelBic.push(<tr>
            <td>0</td>
            <td>{sumx}</td>
            <td>{error}</td>
        </tr>)
        sumx=sumg
        var i=1
        while(error>0.000001){
            scope={x:sumx}
            sumg=one.evaluate(scope)
            error=((sumg-sumx)/sumg)*100
            labelBic.push(<tr>
                <td>{i}</td>
                <td>{sumx}</td>
                <td>{error}</td>
            </tr>)
            sumx=sumg
            i++
            if(i>50){
                labelBic.push(<tr>
                    <td colSpan="3">Infinity</td>
                </tr>)
                break
            }
        }
    }
    render(){
        const styles={
			width: "250px"
        }
        const styles2={
                width: "200px"
        }
        return(
            <div className="card">
                <label className="alert">
                    <br/><div className="Contentnumersub1">OnePoint</div>
                    <div className="Contentnumersub2 STspacebottom"> The simple one point iteration method is a kind of open methods. In this method the root of equation isn’t searched within an interval, but it is searched by using a single start point in an open area. Different to bracketing methods which are always convergent, the open methods can be convergent or divergent, but when they are convergent, their convergent speed is usually better than bracketing methods.
                                                    Assume f(x) is an arbitrary function of x. It is clear that the roots of function f(x) can be found by solving the equation f(x)=0. Using some mathematical manipulation, this equation can be rewritten in the form of x=g(x). Choosing a start point, simple one point iteration method employs this equation for finding a new guess of the root as it is illustrated in Fig. 1</div>
                    <br/>
                    <div className="input-group" >
                        <div className="input-group-prepend"><span className="input-group-text">G(x)</span></div>
                            <input type="text" style={styles} value={this.state.SumG} onChange={this.setSumG}/>
                        </div><br/>
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">X</span></div>
                                <input type="number" style={styles2} value={this.state.SumX} onChange={this.setSumX}/>
                        </div><br/>
                        <button onClick={()=>this.runfun(true)} className="btn btn-danger">sum</ button>
                        <button onClick={()=>this.runauto(true)} className="btn btn-danger">auto</ button>
                </label>
                <Collapse in={this.state.talang}><Table>
                    <thead>
                        <tr>
                        <th>Iteration</th>
                        <th>X</th>
                        <th>Y</th>
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
export default OnePoint;