import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Collapse } from "react-bootstrap"
import {create,all} from'mathjs'
const math = create(all)
var dataTra=[]
var Algebrite = require('algebrite')
const axios = require('axios');

class Trapezidal extends React.Component{
    constructor(props){
        super(props)
        this.state={
          sumx:"",
          spoint:"",
          epoint:"",
          npoint:"",
          talang:false,
          talang2:false
        }
        this.setsumx=this.setsumx.bind(this)
        this.setspoint=this.setspoint.bind(this)
        this.setepoint=this.setepoint.bind(this)
        this.setnpoint=this.setnpoint.bind(this)
        this.runauto=this.runauto.bind(this)
    }
    setsumx(event){
        this.setState({sumx:event.target.value})
    }
    setspoint(event){
        this.setState({spoint:event.target.value})
    }
    setepoint(event){
        this.setState({epoint:event.target.value})
    }
    setnpoint(event){
        this.setState({npoint:event.target.value})
    }
    runauto(){
        axios.get('http://192.168.99.100:3001/users/TR')
        .then((response) => {
            console.log(response)
            this.setState({sumx:response.data[0].sumx})
            this.setState({spoint:response.data[0].start})
            this.setState({epoint:response.data[0].end})
            this.setState({npoint:response.data[0].n})
        })   
    }
    runfunauto(event1,event2,event3,event4){
            this.setState({sumx:event1})
            this.setState({start:event2})
            this.setState({end:event3})
            this.setState({n:event4})
            this.setState({talang:true})
            dataTra=[]
            this.fun()
    }
    runfun(event){
        this.setState({talang:event})
        if(event){
            dataTra=[]
            this.fun()
        }
    }
    showfun(){
        return dataTra
    }
    fun(){
        var one=math.compile(this.state.sumx)
        let start=parseFloat(this.state.spoint)
        let end=parseFloat(this.state.epoint)
        let n=parseInt(this.state.npoint)
        let h=(end-start)/n
        let round=start+h
        let integrate=math.compile(Algebrite.integral(Algebrite.eval(this.state.sumx)).toString())
        let integrateALL=(integrate.eval({x:end})-integrate.eval({x:start}))
        var data=0,error=''
        for(var i=1;i<n;i++){
            let scope={x:round}
            data+=one.evaluate(scope)
            round+=h
        }
        let scopes={x:start}
        let scopee={x:end}
        let sum=(h/2)*(one.evaluate(scopes)+one.evaluate(scopee)+(2*data))
        error=Math.abs((integrateALL-sum)/integrateALL)
        dataTra.push(<h2>Integrate = {integrateALL}<br/>Trapezidal = {sum}<br/>Error ={error}</h2>)
    }
    render(){
        const styles={
			width: "250px"
        }
        return(
            <div>
                <label className="alert">
                    <br/><div className="Contentnumersub1">Trapezidal</div> 
                    <br/>
                        <div className="input-group" >
                        <div className="input-group-prepend"><span className="input-group-text">f(x)</span></div>
                            <input type="text" id="Inputsumx" style={styles} value={this.state.sumx} onChange={this.setsumx}/>
                        </div><br/>
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">start point</span></div>
                                <input type="number" id="Inputstart" style={styles} value={this.state.spoint} onChange={this.setspoint}/>
                        </div><br/>
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">end point</span></div>
                                <input type="number" id="Inputend" style={styles} value={this.state.epoint} onChange={this.setepoint}/>
                        </div><br/>
                        <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">point</span></div>
                                <input type="number" id="Inputn" style={styles} value={this.state.npoint} onChange={this.setnpoint}/>
                        </div><br/>
                        <button onClick={()=>this.runfun(true)} className="btn btn-danger">sum</ button>
                        <button onClick={()=>this.runauto(true)} className="btn btn-danger">auto</ button>
                </label>
                <Collapse in={this.state.talang}>
                    <div>
                    {this.showfun()}
                    </div>
                </Collapse>
            </div>
        )
    }
}
export default Trapezidal;