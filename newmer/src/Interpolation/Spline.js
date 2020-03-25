import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'


class Spline extends React.Component{
    render(){
        return(
            <div>
                <label className="alert">
                <br/><div className="Contentnumersub1">Spline interpolation</div>
                <div className="Contentnumersub2">In mathematics, a spline is a special function defined piecewise by polynomials. In interpolating problems, spline interpolation is often preferred to polynomial interpolation because it yields similar results, even when using low degree polynomials, while avoiding Runge's phenomenon for higher degrees.
                                                In the computer science subfields of computer-aided design and computer graphics, the term spline more frequently refers to a piecewise polynomial (parametric) curve. Splines are popular curves in these subfields because of the simplicity of their construction, their ease and accuracy of evaluation, and their capacity to approximate complex shapes through curve fitting and interactive curve design.
                                                The term spline comes from the flexible spline devices used by shipbuilders and draftsmen to draw smooth shapes.</div>
                </label>
            </div>
        )
    }
}
export default Spline;