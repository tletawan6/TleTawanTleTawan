import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import {compile} from 'mathjs'
import { Collapse } from "react-bootstrap"
var labelBic=[]
const axios = require('axios');

class Standard extends React.Component {
    constructor(props){
        super(props)
        this.state={
          SumX:"",
          errorX:"",
          Xl:"",
          Xr:"",
          Xm:"",
          Iteration:"",
          talang:false
        }
        this.setSumX=this.setSumX.bind(this);
        this.setXl=this.setXl.bind(this);
        this.setXr=this.setXr.bind(this);
        this.setIteration=this.setIteration.bind(this);
    }
    zero = () =>{
        console.log("sads")
        this.setzero()
    }
    setzero(){
        document.getElementById('InputBic').value = ''
    }
    setSumX(event){
        this.setState({SumX:event.target.value})
    }
    setXl(event){
        this.setState({Xl:event.target.value})
    }
    setXr(event){
        this.setState({Xr:event.target.value})
    }
    setIteration(event){
        this.setState({Iteration:event.target.value})
    }
    runauto(){
        axios.get('http://192.168.99.100:3001/users/BT')
        .then((response) => {
            console.log(response)
            this.setState({SumX:response.data[0].sumx})
            this.setState({Xl:response.data[0].xl})
            this.setState({Xr:response.data[0].xr})
            this.setState({Iteration:response.data[0].i})
        })   
    }
    runfun(event){
        this.setState({talang:event})
        if(event){
            labelBic.length=0
           this.fun(this.state.Iteration)
        }
        
    }
    showfun(){
        return labelBic
    }
    fun(event){
        var one =compile(this.state.SumX)
        let xl=parseFloat(this.state.Xl)
        let xr=parseFloat(this.state.Xr)
        let iteration=event
        let xmold=(xl+xr)/2
        let xmnew=""
        let errorxm=""
        let scopeXr ={x:parseFloat(this.state.Xr)}
        let scopeXm ={x:parseFloat(xmold)}
        let sumxr =one.evaluate(scopeXr)
        var sumxm =one.evaluate(scopeXm)
        var sumvalue=parseFloat(sumxm)*parseFloat(sumxr)
        if(sumvalue<0){
          xl=xmold
        }
        else{
          xr=xmold
        }
        labelBic.push(<tr>
                        <td>0</td>
                        <td>{xl}</td>
                        <td>{xr}</td>
                        <td>{xmold}</td>
                        <td>null</td>
                    </tr>)
        for(var i=1;i-1<iteration;i++){
          xmnew=(xl+xr)/2
          scopeXm ={x:parseFloat(xmnew)}
          sumxr =one.evaluate(scopeXr)
          sumxm =one.evaluate(scopeXm)
          sumvalue=parseFloat(sumxm)*parseFloat(sumxr)
          if(sumvalue<0){
            xl=xmnew
          }
          else{
            xr=xmnew
          }
          errorxm=Math.abs((xmnew-xmold)/xmnew)
          labelBic.push(<tr>
                <td>{i}</td>
                <td>{xl}</td>
                <td>{xr}</td>
                <td>{xmnew}</td>
                <td>{errorxm}</td>
            </tr>)
          xmold=xmnew
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
            <div >
                <label className="alert">
                    <br/><div className="Contentnumersub1">Bisection</div>
                    <div className="Contentnumersub2 STspacebottom"> The bisection method in mathematics is a root-finding method that repeatedly bisects an interval and then selects a sub-interval in which a root must lie for further processing. It is a very simple and robust method, but it is also relatively slow. Because of this, it is often used to obtain a rough approximation to a solution which is then used as a starting point for more rapidly converging methods.
                                                                    This method is also called the Interval Halving Method, the Binary Search Method, the Dichotomy Method, Robust Root Finding Method and Bolzano’s Method. It’s strategy is to begin with two values of x, say xL and xU, that brackets a root of       f(x) = 0. It determines that the initial values x = xL and x = xU. The method treats the interval distance between the initial values as line segment then successively divides the interval in half and replaces one endpoint with the midpoint so that again the root is bracketed.
                                                                    Note : xL for lower limit
                                                                    xU for upper limit
                                                                    xR for average of upper and lower limit ()
                                                                    At each step, the method divides the interval in two by computing the midpoint xR = (xL + xU) / 2 of the interval and the value of the function f(xR) at that point. Unless xR is itself a root (which is very unlikely, but possible) there are now two possibilities: either f(xL) and f(xR) have opposite signs and bracket a root, or f(xR) and f(xU) have opposite signs and bracket a root. The method selects the subinterval that is a bracket as a new interval to be used in the next step. In this way the interval that contains a zero of f is reduced in width by 50% at each step. The process is continued until the interval is sufficiently small.
                                                                    Explicitly, if f(xL) and f(xR) are opposite signs, then the method sets xR as the new value for xU, and if f(xL) and f(xR) are same signs then the method sets xR as the new xL. (If f(xR)=0 then xR may be taken as the solution and the process stops.)In both cases, the new f(xL) and f(xU) have opposite signs, so the method is applicable to this smaller interval.</div>
                    <br/>
                        <div className="input-group" >
                        <div className="input-group-prepend"><span className="input-group-text">f(x)</span></div>
                            <input type="text" style={styles} value={this.state.SumX} onChange={this.setSumX} id="InputBic"/>
                        </div><br/>
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">XL</span></div>
                                <input type="number" style={styles} value={this.state.Xl} onChange={this.setXl}/>
                        </div><br/>
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">XR</span></div>
                                <input type="number" style={styles} value={this.state.Xr} onChange={this.setXr}/>
                        </div><br/>
                        <div className="input-group" >
                            <div className="input-group-prepend"><span className="input-group-text">Iteration</span></div>
                                <input type="number" style={styles2} value={this.state.Iteration} onChange={this.setIteration}/>
                        </div><br/>
                        <button onClick={()=>this.runfun(true)} className="btn btn-danger">sum</ button>
                        <button onClick={()=>this.runauto(true)} className="btn btn-danger">auto</ button>
                </label>
                <Collapse in={this.state.talang}><Table>
                    <thead>
                        <tr>
                        <th>Iteration</th>
                        <th>XL</th>
                        <th>XR</th>
                        <th>XM</th>
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
export default Standard;