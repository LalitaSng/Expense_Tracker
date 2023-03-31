import React, { useState } from "react";
import '../App.css'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    return(
        <div>
            <h3>Add new Transaction</h3>
            <form>
                <div className="form-control">
                    <label>Text</label>
                    <input type='text' value={text} onChange = {(e)=>setText(e.target.value)} placeholder="Enter text" />
                </div>
                <div className="form-control">
                    <label>Amount <br/> (negative-expense, positive-income) </label>
                    <input type='number' value={amount} onChange = {(e)=> setAmount(e.target.value)} placeholde="Enter Amount"/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
export default AddTransaction