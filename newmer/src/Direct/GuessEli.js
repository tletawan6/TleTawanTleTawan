import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'


class GuessEli extends React.Component{
    render(){
        return(
            <div>
                <label className="alert">
                <br/><div className="Contentnumersub1">Guess Elimination</div>
                <div className="Contentnumersub2">Gaussian elimination, also known as row reduction, is an algorithm in linear algebra for solving a system of linear equations. It is usually understood as a sequence of operations performed on the corresponding matrix of coefficients. This method can also be used to find the rank of a matrix, to calculate the determinant of a matrix, and to calculate the inverse of an invertible square matrix. The method is named after Carl Friedrich Gauss (1777–1855). Some special cases of the method - albeit presented without proof - were known to Chinese mathematicians as early as circa 179 AD.
                                                    To perform row reduction on a matrix, one uses a sequence of elementary row operations to modify the matrix until the lower left-hand corner of the matrix is filled with zeros, as much as possible. There are three types of elementary row operations</div>
                </label>
            </div>
        )
    }
}
export default GuessEli;