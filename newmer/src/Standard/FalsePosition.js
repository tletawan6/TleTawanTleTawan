import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import {compile} from 'mathjs'
import { Collapse } from "react-bootstrap"
var labelBic=[]
const axios = require('axios');

class FalsePosition extends React.Component{
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
        axios.get('http://192.168.99.100:3001/users/FP')
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
        let xmnew=""
        let errorxm=""
        var scopeXl ={x:parseFloat(this.state.Xl)}
        var scopeXr ={x:parseFloat(this.state.Xr)}
        var sumxr =one.evaluate(scopeXr)
        var sumxl =one.evaluate(scopeXl)
        let xmold=(xr-((sumxr*(xl-xr))/(sumxl-sumxr)))
        var scopeXm ={x:parseFloat(xmold)}
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
          scopeXl ={x:parseFloat(xl)}
          scopeXr ={x:parseFloat(xr)}
          sumxr =one.evaluate(scopeXr)
          sumxl =one.evaluate(scopeXl)
          xmnew=(xr-((sumxr*(xl-xr))/(sumxl-sumxr)))
          scopeXm ={x:parseFloat(xmnew)}
          sumxm =one.evaluate(scopeXm)
          sumvalue=parseFloat(sumxm)*parseFloat(sumxr)
          if(sumvalue<0){
            xl=xmnew
          }
          else{
            xr=xmnew
          }
          errorxm=(xmnew-xmold)/xmnew
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
            <div className="card">
                <label className="alert">
                    <br/><div className="Contentnumersub1">FalsePosition</div>
                    <div className="Contentnumersub2 STspacebottom"> the regula falsi, method of false position, or false position method is a very old method for solving an equation in one unknown, that, in modified form, is still in use. In simple terms, the method is the trial and error technique of using test ("false") values for the variable and then adjusting the test value according to the outcome. This is sometimes also referred to as "guess and check". Versions of the method predate the advent of algebra and the use of equations.
                                                        As an example, consider problem 26 in the Rhind papyrus, which asks for a solution of (written in modern notation) the equation x + x/4 = 15. This is solved by false position,[1]. First, guess that x = 4 to obtain, on the left, 4 + 4/4 = 5. This guess is a good choice since it produces an integer value. However, 4 is not the solution of the original equation, as it gives a value which is three times too small. To compensate, multiply x (currently set to 4) by 3 and substitute again to get 12 + 12/4 = 15, verifying that the solution is x = 12.
                                                        Modern versions of the technique employ systematic ways of choosing new test values and are concerned with the questions of whether or not an approximation to a solution can be obtained, and if it can, how fast can the approximation be found.</div>
                    <br/>
                    <div className="input-group" >
                        <div className="input-group-prepend"><span className="input-group-text">f(x)</span></div>
                            <input type="text" style={styles} value={this.state.SumX} onChange={this.setSumX}/>
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
export default FalsePosition;