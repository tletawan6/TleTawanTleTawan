import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import {compile,derivative} from 'mathjs'
import { Collapse } from "react-bootstrap"
var labelBic=[]

class NewtonRaphson extends React.Component{
    constructor(props){
        super(props)
        this.state={
          SumX:"",
          errorX:"",
          X:"",
          talang:false
        }
        this.setSumX=this.setSumX.bind(this);
        this.setX=this.setX.bind(this);
    }
    setSumX(event){
        this.setState({SumX:event.target.value})
    }
    setX(event){
        this.setState({X:event.target.value})
    }
    runfun(event){
        this.setState({talang:event})
        if(event){
            labelBic.length=0
           this.fun()
        }
        
    }
    showfun(){
        return labelBic
    }
    fun(){
        var x=this.state.X,sum=this.state.SumX,fun="",diff="",xold=parseFloat(x),scope="",ffun="",fdif="",xnew="",error="9999",i=0
        while(error>0.000001){   
            fun=compile(sum)
            diff=derivative(sum,"x")
            scope={x:parseFloat(xold)}
            ffun=fun.evaluate(scope)
            fdif=diff.evaluate(scope)
            xnew=xold-(ffun/fdif)
            error=Math.abs((xnew-xold)/xnew)
            xold=xnew
            labelBic.push(<tr>
                <td>{i}</td>
                <td>{xold}</td>
                <td>{error}</td>
            </tr>)
            i++
        }
        
    }
    render(){
        const styles={
			width: "250px"
        }
        return(
            <div className="card">
                <label className="alert">
                    <br/><div className="Contentnumersub1">NewtonRaphson</div>
                    <div className="Contentnumersub2 STspacebottom"> The idea is to start with an initial guess which is reasonably close to the true root, then to approximate the function by its tangent line using calculus, and finally to compute the x-intercept of this tangent line by elementary algebra. This x-intercept will typically be a better approximation to the original function's root than the first guess, and the method can be iterated.
                                                    More formally,suppose f : (a, b) → ℝ is a differentiable function defined on the interval (a,b) with values in the real numbers ℝ, and we have some current approximation xn. Then we can derive the formula for a better approximation, xn+1 by referring to the diagram on the right. The equation of the tangent line to the curve y=f(x) at x = xn </div>
                    <br/>
                    <div className="input-group" >
                        <div className="input-group-prepend"><span className="input-group-text">f(x)</span></div>
                            <input type="text" style={styles} value={this.state.SumX} onChange={this.setSumX}/>
                        </div><br/>
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">X</span></div>
                                <input type="number" style={styles} value={this.state.X} onChange={this.setX}/>
                        </div><br/>
                        <button onClick={()=>this.runfun(true)} className="btn btn-danger">sum</ button>
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
export default NewtonRaphson;