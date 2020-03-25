import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'


class Polynomial extends React.Component{
    render(){
        return(
            <div>
                <label className="alert">
                <br/><div className="Contentnumersub1">Polynomial Regression</div>
                <div className="Contentnumersub2">In statistics, polynomial regression is a form of regression analysis in which the relationship between the independent variable x and the dependent variable y is modelled as an nth degree polynomial in x. Polynomial regression fits a nonlinear relationship between the value of x and the corresponding conditional mean of y, denoted E(y |x). Although polynomial regression fits a nonlinear model to the data, as a statistical estimation problem it is linear, in the sense that the regression function E(y | x) is linear in the unknown parameters that are estimated from the data. For this reason, polynomial regression is considered to be a special case of multiple linear regression.
                                                The explanatory (independent) variables resulting from the polynomial expansion of the "baseline" variables are known as higher-degree terms. Such variables are also used in classification settings.[1]</div>
                </label>
            </div>
        )
    }
}
export default Polynomial;