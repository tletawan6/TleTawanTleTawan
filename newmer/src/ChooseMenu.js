import React from "react"
import Standard from "./Standard/Standard"
import Direct from "./Direct/Direct"
import Integration from "./Integration/Integration"
import Interpolation from "./Interpolation/Interpolation"
import Regression from "./Regression/Regression"
import Conjugate from "./Conjugate/Conjugate"
import Container from 'react-bootstrap/Container'
import {Collapse, Row,Card} from "react-bootstrap"


class ChooseMenu extends React.Component {
    constructor(props){
        super(props)
        this.state={
          menu1:false,
          menu2:false,
          menu3:false,
          menu4:false,
          menu5:false,
          menu6:false,
          menuon1:false,
          menuon2:false,
          menuon3:false,
          menuon4:false,
          menuon5:false,
          menuon6:false
        }
        this.setmenuon1=this.setmenuon1.bind(this)
        this.setmenuon2=this.setmenuon2.bind(this)
        this.setmenuon3=this.setmenuon3.bind(this)
        this.setmenuon4=this.setmenuon4.bind(this)
        this.setmenuon5=this.setmenuon5.bind(this)
        this.setmenuon6=this.setmenuon6.bind(this)
        this.setmenuzero1=this.setmenuzero1.bind(this)
        this.setmenuzero2=this.setmenuzero2.bind(this)
        this.setmenuzero3=this.setmenuzero3.bind(this)
        this.setmenuzero4=this.setmenuzero4.bind(this)
        this.setmenuzero5=this.setmenuzero5.bind(this)
        this.setmenuzero6=this.setmenuzero6.bind(this)
    }
    setmenuzero1(event){
        
        setTimeout(function() {
            this.setState({menuon1:event})
        }.bind(this), 200);
        setTimeout(function() {
            this.setState({menu1:event})
        }.bind(this), 200);
        window.location.href="#Roots of Equations"  
    }
    setmenuon1(event){   
        setTimeout(function() {
            this.setState({menuon1:event})
        }.bind(this), 200);
            this.setState({menu1:event})
    }
    setmenuzero2(event){    
        setTimeout(function() {
            this.setState({menuon2:event})
        }.bind(this), 200);
        setTimeout(function() {
            this.setState({menu2:event})
        }.bind(this), 200);
        window.location.href="#Linear Algebra"  
    }
    setmenuon2(event){
        setTimeout(function() {
            this.setState({menuon2:event})
        }.bind(this), 200);
            this.setState({menu2:event})
    }
    setmenuzero3(event){    
        setTimeout(function() {
            this.setState({menuon3:event})
        }.bind(this), 200);
        setTimeout(function() {
            this.setState({menu3:event})
        }.bind(this), 200);
        window.location.href="#Integration"  
    }
    setmenuon3(event){
        setTimeout(function() {
            this.setState({menuon3:event})
        }.bind(this), 200);
            this.setState({menu3:event})
    }
    setmenuzero4(event){
        setTimeout(function() {
            this.setState({menuon4:event})
        }.bind(this), 200);
        setTimeout(function() {
            this.setState({menu4:event})
        }.bind(this), 200);  
        window.location.href="#Interpolation"
    }
    setmenuon4(event){
        setTimeout(function() {
            this.setState({menuon4:event})
        }.bind(this), 200);
            this.setState({menu4:event})
    }
    setmenuzero5(event){
        
        setTimeout(function() {
            this.setState({menuon5:event})
        }.bind(this), 200);
        setTimeout(function() {
            this.setState({menu5:event})
        }.bind(this), 200);
        window.location.href="#Regression"  
    }
    setmenuon5(event){
        setTimeout(function() {
            this.setState({menuon5:event})
        }.bind(this), 200);
            this.setState({menu5:event})
    }
    setmenuzero6(event){ 
        setTimeout(function() {
            this.setState({menuon6:event})
        }.bind(this), 200);
        setTimeout(function() {
            this.setState({menu6:event})
        }.bind(this), 200);  
        window.location.href="#Conjugate"
    }
    setmenuon6(event){
        setTimeout(function() {
            this.setState({menuon6:event})
        }.bind(this), 200);
            this.setState({menu6:event})
    }
    callStandard(){
        return <Standard/>
    }
    callDirect(){
        return <Direct/>
    }
    callIntegration(){
        return <Integration/>
    }
    callInterpolation(){
        return <Interpolation/>
    }
    callRegression(){
        return <Regression/>
    }
    callConjugate(){
        return <Conjugate/>
    }
    render(){
        const styles={ backgroundColor: '#333', borderColor: '#333'}
        return(
            <div className="CMbackground ">
            <Container >
                    <div>
                    <Container className="ContainerCM">
                        <Card style={styles}>
                        <div className="APPtexthead">
                            Numerical 
                        </div>
                        <div className="Contentnumer">
                            Mathematical models are a central piece of science and engineering. Some models have closed-form solutions, therefore they can be solved analytically. Many models can not be solved analytically or the analytic solution is too costly to be practical. All models can be solved computationally and the result may not be the exact answer but it can be useful. George E. P. Box was right by saying All models are wrong, but some are useful. Since errors are inevitable a more practical question we ought to ask is how close the answer needs to be for it to be useful. In lots of engineering situations the only way to get the "right answer" is to use the following formula:
                            right answer = wrong answer + corrections
                            Missile Knows Where It Is is an audio click explaining how a missile guidance system can possibly work by repeatedly correcting it errors.
                            Before we discuss how to manage errors lets explore the sources of errors.
                        </div>
                        <br/>
                        <div className="CMspacebottom2"/>
                        <div id="Roots of Equations"/>
                        <div className="Contentnumerhead">
                            Roots of Equations 
                        </div>
                        <div className="Contentnumer">
                            Roots (or Zeros) of a function f(x) are values of x that produces an output of 0. Roots can be real or complex numbers. Finding the root of [\displaystyle f(x)-g(x)][\displaystyle f(x)-g(x)] is the same as solving the equation [\displaystyle f(x)=g(x)]f(x)=g(x). Solving an equation is finding the values that satisfy the condition specified by the equation.
                            Lower degree (quadratic, cubic, and quartic) polynomials have closed-form solutions, but numerical methods may be easier to use. To solve a quadratic equation we can use the quadratic formula.
                        </div>
                        <a href="https://en.wikibooks.org/wiki/Introduction_to_Numerical_Methods/Roots_of_Equations" target="_self">credit</a>  
                        <Row className="ContainerCM">     
                            <Collapse in={!this.state.menuon1}>
                            <Card className="cardCM"><div className="card shadow-sm">
                                <div className="card card-title center">
                                    <div className="STspacetop"/>
                                        <h5>Roots of Equations Methods</h5>
                                    <div className=" STspacebottom"/>
                                </div>
                                <Card className="cardCM2"><ul>
                                    <li>Graphical</li>
                                    <li>Bisection</li>
                                    <li>FlasePosition</li>
                                    <li>OnePoint</li>
                                    <li>NewtonRaphson</li>
                                    <li>Secant</li>
                                </ul></Card>
                                <div className="card card-body">
                                    <button className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon1(!this.state.menuon1)}>View methods</button>
                                </div>
                            </div></Card></Collapse>
                        </Row>
                        <Collapse in={this.state.menu1}>
                                <div >
                                    {this.state.menuon1 && this.callStandard()}
                                    <button  onClick={()=>this.setmenuzero1(!this.state.menu1)} className="btn btn-primary">Hide</button>                                                            
                                    <div className="CMspacebutton"/>
                                </div>
                        </Collapse>
                        <div className="STspacetop"/>
                        <div id="Linear Algebra"/>
                        <div className="Contentnumerhead">
                            Linear Algebra
                        </div>
                        <div className="Contentnumer">
                            Numerical linear algebra is the study of how matrix operations can be used to create computer algorithms which efficiently and accurately provide approximate answers to mathematical questions. It is a subfield of numerical analysis, and a type of linear algebra. Because computers use floating-point arithmetic, they cannot exactly represent irrational data, and many algorithms increase that imprecision when implemented by a computer. Numerical linear algebra uses properties of vectors and matrices to develop computer algorithms that minimize computer error while retaining efficiency and precision.
                            Numerical linear algebra aims to solve problems of continuous mathematics using finite precision computers, so its applications to the natural and social sciences are as vast as the applications of continuous mathematics. It is often a fundamental part of engineering and computational science problems, such as image and signal processing, telecommunication, computational finance, materials science simulations, structural biology, data mining, bioinformatics, and fluid dynamics. Matrix methods are particularly used in finite difference methods, finite element methods, and the modeling of differential equations. Noting the broad applications of numerical linear algebra, Lloyd N. Trefethen and David Bau, III argue that it is "as fundamental to the mathematical sciences as calculus and differential equations",[1]:x even though it is a comparatively small field.[2]
                            Numerical linear algebra has also been called "applied linear algebra", and because many properties of matrices and vectors also apply to functions and operators, it can also be viewed as a type of functional analysis that has a particular emphasis on practical algorithms.[1]:ix
                            Common problems in numerical linear algebra include obtaining matrix decompositions like the singular value decomposition, the QR factorization, the LU factorization, or the eigendecomposition, which can then be used to answer common linear algebraic problems like solving linear systems of equations, locating eigenvalues, or least squares optimisation. Numerical linear algebra is centrally concerned with developing algorithms that do not introduce errors when applied to real data on a finite precision computer. Often this is achieved by iterative methods rather than direct methods.
                        </div>
                        <a href="https://en.wikipedia.org/wiki/Numerical_linear_algebra" target="_self">credit</a>  
                        <Row className="ContainerCM">
                            <Collapse in={!this.state.menuon2}>
                            <Card className="cardCM"><div className="card shadow-sm">
                            <div className="card card-title center">
                                    <div className="STspacetop"/>
                                        <h5>Linear Algebra Methods</h5>
                                    <div className=" STspacebottom"/>
                                </div>
                                <Card className="cardCM2"><ul>
                                    <li>Cramer's Rule</li>
                                    <li>Guess Elimination</li>
                                    <li>Guess Jurdan</li>
                                    <li>Lu Decomposition</li>
                                    <li>Cholesky Decomposition</li>
                                </ul></Card>
                                <div className="card card-body">
                                    <button href="#Linear Algebra" className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon2(!this.state.menuon2)}>View methods</button>
                                </div>
                            </div></Card></Collapse>
                        </Row>
                        <Collapse in={this.state.menu2}>
                                <div className="ContainerCMA">
                                    {this.state.menuon2 && this.callDirect()}
                                    <button onClick={()=>this.setmenuzero2(!this.state.menu2)} className="btn btn-primary">Hide</button>
                                    <div className="CMspacebutton"/>
                                </div>
                        </Collapse>
                        <div id="Integration"/>
                        <div className="Contentnumerhead">
                            Integration
                        </div>
                        <div className="Contentnumer">
                            The fundamental theorem of calculus states that differentiation and integration are inverse operations: when a continuous function is first integrated and then differentiated or vice versa, the original function will be obtained. However the integrand [\displaystyle f(x)]f(x) may be known only at certain points, such as data measured from an experiment or from sampling, which is common in computer applications. Sometimes even though the formula for an integrand is known, it is difficult or impossible to find the antiderivative in an elementary function form, e.g the antiderivative of [\displaystyle f(x)=exp(-x^2)][\displaystyle f(x)=exp(-x^2)], cannot be written in elementary form. Computing a numerical integration (approximation) can be easier than solving the integral symbolically.
                        </div>
                        <a href="https://en.wikibooks.org/wiki/Introduction_to_Numerical_Methods/Integration" target="_self">credit</a>
                        <Row className="ContainerCM">
                            <Collapse in={!this.state.menuon3}>
                            <Card className="cardCM"><div className="card shadow-sm">
                            <div className="card card-title center">
                                    <div className="STspacetop"/>
                                        <h5>Integration</h5>
                                    <div className=" STspacebottom"/>
                                </div>
                                <Card className="cardCM2"><ul>
                                    <li>Trapezidal</li>
                                    <li>Simpsom</li>
                                </ul></Card>
                                <div className="card card-body">
                                    <button href="#Integration" className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon3(!this.state.menuon3)}>View methods</button>
                                </div>
                            </div></Card></Collapse>  
                        </Row>
                        <Collapse in={this.state.menu3}>
                            <div className="ContainerCMA">
                                {this.state.menuon3 && this.callIntegration()}
                                <button onClick={()=>this.setmenuzero3(!this.state.menu3)} className="btn btn-primary">Hide</button>
                            <div className="CMspacebutton"/>
                            </div>
                        </Collapse> 
                        <div id="Interpolation"/>
                        <div className="Contentnumerhead">
                            Interpolation
                        </div>
                        <div className="Contentnumer">
                            Interpolation is the process of deriving a simple function from a set of discrete data points so that the function passes through all the given data points (i.e. reproduces the data points exactly) and can be used to estimate data points in-between the given ones. It is necessary because in science and engineering we often need to deal with discrete experimental data. Interpolation is also used to simplify complicated functions by sampling data points and interpolating them using a simpler function. Polynomials are commonly used for interpolation because they are easier to evaluate, differentiate, and integrate - known as polynomial interpolation.
                            It can be proven that given n+1 data points it is always possible to find a polynomial of order/degree n to pass through/reproduce the n+1 points.
                        </div>
                        <a href="https://en.wikibooks.org/wiki/Introduction_to_Numerical_Methods/Interpolation" target="_self">credit</a>
                        <Row className="ContainerCM">
                            <Collapse in={!this.state.menuon4}>
                            <Card className="cardCM"><div className="card shadow-sm">
                            <div className="card card-title center">
                                    <div className="STspacetop"/>
                                        <h5>Interpolation</h5>
                                    <div className=" STspacebottom"/>
                                </div>
                                <Card className="cardCM2"><ul>
                                    <li>Newton's divided-difference</li>
                                    <li>Lagrange polynomials</li>
                                    <li>Spline interpolation</li>
                                </ul></Card>
                                <div className="card card-body">
                                    <button href="#Interpolation" className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon4(!this.state.menuon4)}>View methods</button>
                                </div>
                            </div></Card></Collapse>
                            
                        </Row>
                        <Collapse in={this.state.menu4}>
                            <div className="ContainerCMA">
                                {this.state.menuon4 && this.callInterpolation()}
                                <button onClick={()=>this.setmenuzero4(!this.state.menu4)} className="btn btn-primary">Hide</button>
                                <div className="CMspacebutton"/>
                            </div>
                        </Collapse>
                        <div id="Regression"/>
                        <div className="Contentnumerhead">
                            Regression
                        </div>
                        <div className="Contentnumer">
                            Regression is different from interpolation in that it allows us to approximate overdetermined system, which has more equations than unknowns. This is useful when the exact solution is too expensive or unnecessary due to errors in the data, such as measurement errors or random noise. Linear regression finds a linear function that most nearly passes through the given data points - the regression (function) line best fits the data. We must define our metric for measuring the goodness of fit. If all data points lie on the function it is a perfect fit, otherwise there are errors in the function representation of the data. We can measure the deviations of the data points from the function. As shown in the following example (source) neither the sum of errors nor the sum of the absolute errors is a good metric. The data include four points (2, 4), (3, 6), (2, 6), and (3, 8). We use a straight line to fit the data.
                        </div>
                        <a href="https://en.wikibooks.org/wiki/Introduction_to_Numerical_Methods/Regression" target="_self">credit</a>
                        <Row className="ContainerCM">
                            <Collapse in={!this.state.menuon5}>
                            <Card className="cardCM"><div className="card shadow-sm">
                            <div className="card card-title center">
                                    <div className="STspacetop"/>
                                        <h5>Regression</h5>
                                    <div className=" STspacebottom"/>
                                </div>
                                <Card className="cardCM2"><ul>
                                    <li>Least-Square Regression</li>
                                    <li>Linear Regression</li>
                                    <li>Multiple linear Regression</li>
                                    <li>Polynomial Regression</li>
                                </ul></Card>
                                <div className="card card-body">
                                    <button href="#Regression" className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon5(!this.state.menuon5)}>View methods</button>
                                </div>
                            </div></Card></Collapse>    
                        </Row>
                        <Collapse in={this.state.menu5}>
                            <div className="ContainerCMA">
                                {this.state.menuon5 && this.callRegression()}
                                <button onClick={()=>this.setmenuzero5(!this.state.menu5)} className="btn btn-primary">Hide</button>
                                <div className="CMspacebutton"/>
                            </div>
                        </Collapse>
                         <div id="Conjugate"/>
                        <div className="Contentnumerhead">
                            Conjugate
                        </div>
                        <div className="Contentnumer">
                        The conjugate gradient method is a mathematical technique that can be useful for the optimization of both linear and non-linear systems. This technique is generally used as an iterative algorithm, however, it can be used as a direct method, and it will produce a numerical solution. Generally this method is used for very large systems where it is not practical to solve with a direct method. This method was developed by Magnus Hestenes and Eduard Stiefel.
                        </div>
                        <a href="https://en.wikibooks.org/wiki/Introduction_to_Numerical_Methods/Regression" target="_self">credit</a>
                        <Row className="ContainerCM">
                            <Collapse in={!this.state.menuon6}>
                            <Card className="cardCM"><div className="card shadow-sm">
                            <div className="card card-title center">
                                    <div className="STspacetop"/>
                                        <h5>Conjugate</h5>
                                    <div className=" STspacebottom"/>
                                </div>
                                <Card className="cardCM2"><ul>
                                    <li>Conjugate Gradient</li>
                                </ul></Card>
                                <div className="card card-body">
                                    <button href="#Conjugate" className="btn btn-outline-outline-secondary" onClick={()=>this.setmenuon6(!this.state.menuon6)}>View methods</button>
                                </div>
                            </div></Card></Collapse>
                            
                        </Row>
                            <Collapse in={this.state.menu6}>
                                <div className="card ContainerCMA" style={styles}>
                                    {this.state.menuon6 && this.callConjugate()}
                                    <button onClick={()=>this.setmenuzero6(!this.state.menu6)} className="btn btn-primary">Hide</button>
                                    <div className="CMspacebutton"/>
                                </div>
                            </Collapse><div className="CMspacebutton"/>
                    </Card><br/></Container>
                    </div>
                </Container> </div>
        )
    }
}
export default ChooseMenu;