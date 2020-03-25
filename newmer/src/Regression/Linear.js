import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'


class linear extends React.Component{
    render(){
        return(
            <div>
                <label className="alert">
                <br/><div className="Contentnumersub1">Linear Regression</div>
                <div className="Contentnumersub2">Linear regression finds a linear function that most nearly passes through the given data points - the regression (function) line best fits the data. We must define our metric for measuring the goodness of fit. If all data points lie on the function it is a perfect fit, otherwise there are errors in the function representation of the data. We can measure the deviations of the data points from the function. As shown in the following example (source) neither the sum of errors nor the sum of the absolute errors is a good metric. The data include four points (2, 4), (3, 6), (2, 6), and (3, 8). We use a straight line to fit the data. Two possible solutions are shown in iPython notebook (Example 1).</div>
                </label>
            </div>
        )
    }
}
export default linear;