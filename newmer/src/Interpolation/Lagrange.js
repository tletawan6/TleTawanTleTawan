import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'


class Lagrange extends React.Component{
    render(){
        return(
            <div>
                <label className="alert">
                <br/><div className="Contentnumersub1">Lagrange polynomials</div>
                <div className="Contentnumersub2">In numerical analysis, Lagrange polynomials are used for polynomial interpolation. For a given set of points with no two  values equal, the Lagrange polynomial is the polynomial of lowest degree that assumes at each value  the corresponding value ,so that the functions coincide at each point.
                                                Although named after Joseph-Louis Lagrange, who published it in 1795, the method was first discovered in 1779 by Edward Waring It is also an easy consequence of a formula published in 1783 by Leonhard Euler.[2]
                                                Uses of Lagrange polynomials include the Newton–Cotes method of numerical integration and Shamir's secret sharing scheme in cryptography.
                                                Lagrange interpolation is susceptible to Runge's phenomenon of large oscillation. As changing the points requires recalculating the entire interpolant, it is often easier to use Newton polynomials instead.</div>
                </label>
            </div>
        )
    }
}
export default Lagrange;