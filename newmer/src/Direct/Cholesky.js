import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'


class Cholesky extends React.Component{
    render(){
        return(
            <div>
                <label className="alert">
                <br/><div className="Contentnumersub1">Cholesky Decomposition</div>
                <div className="Contentnumersub2">In linear algebra, the Cholesky decomposition or Cholesky factorization (pronounced /ʃo-LESS-key/) is a decomposition of a Hermitian, positive-definite matrix into the product of a lower triangular matrix and its conjugate transpose, which is useful for efficient numerical solutions, e.g., Monte Carlo simulations. It was discovered by André-Louis Cholesky for real matrices. When it is applicable, the Cholesky decomposition is roughly twice as efficient as the LU decomposition for solving systems of linear equations.</div>
                </label>
            </div>
        )
    }
}
export default Cholesky;