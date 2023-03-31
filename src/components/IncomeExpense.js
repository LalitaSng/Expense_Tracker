import React from "react";
import '../App.css'

const IncomeExpense = () => {
    return(
        <div className="income-expense-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+0.5</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-$0.5</p>
            </div>
        </div>
    )
}
export default IncomeExpense