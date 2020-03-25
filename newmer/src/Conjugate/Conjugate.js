import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'


class Conjugate extends React.Component{
    render(){
        const styles={ backgroundColor: '#ffffff', }
        return(
            <div style={styles}>
                <label className="alert">
                <br/><div className="Contentnumersub1">Conjugate Gradiente</div>
                <div className="Contentnumersub2">In mathematics, the conjugate gradient method is an algorithm for the numerical solution of particular systems of linear equations, namely those whose matrix is symmetric and positive-definite. The conjugate gradient method is often implemented as an iterative algorithm, applicable to sparse systems that are too large to be handled by a direct implementation or other direct methods such as the Cholesky decomposition. Large sparse systems often arise when numerically solving partial differential equations or optimization problems.
                                                The conjugate gradient method can also be used to solve unconstrained optimization problems such as energy minimization. It was mainly developed by Magnus Hestenes and Eduard Stiefel,[1][2] who programmed it on the Z4.[3]
                                                The biconjugate gradient method provides a generalization to non-symmetric matrices. Various nonlinear conjugate gradient methods seek minima of nonlinear equations.</div>
                </label>
            </div>
        )
    }
}
export default Conjugate;