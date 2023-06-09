import { useState } from "react"
import useCustomExpenseContext from "../../hooks/use-custom-expense-context"
import useCurrentDate from "../../hooks/useCurrentDate"

export default function IncomeCreate(props) {
    const { createExpense } = useCustomExpenseContext()
    const currentDate = useCurrentDate();  // custom hook to get currentDate

    const [item, setItem] = useState({
        title: '',
        date: '',
        income: '',
        categories: ''

    }) // to have an controlled input


    const handleSubmit = (event) => { // to submit new expense
        event.preventDefault()
        createExpense(item.title, item.date, 0, item.income, item.categories)  //0 === income [add sum without showing Nan]
        setItem({ title: '', date: '', income: '', categories: '' }) // erase expense after submit
        props.setIsSubmit(false)
    }

    const handleInput = (event) => { // to get userInput 
        setItem(prevItem => {
            return { ...prevItem, [event.target.name]: event.target.value }
        })
    }

    return (
        <div className="addItem-incomeCreate-div">
            <button onClick={() => props.handleIsIncome()} className="addItem-incomeCreate-button">Create Income</button>

            {props.isIncome &&
                <div className="createForm-div">
                    <form onSubmit={handleSubmit} className="createForm">
                        <div className="createForm-title-div">
                            <input value={item.title} onChange={handleInput} type="text" name="title" className="createForm-title" placeholder="Title" autoComplete="false" />
                        </div>
                        <div className="createForm-income-div">
                            <input value={item.income} onChange={handleInput} type="number" name="income" className="createForm-expense" placeholder="Amount *" required autoComplete="false" />
                        </div>
                        <div className="createForm-date-div">
                            <input value={item.date} onChange={handleInput} type="date" name="date" className="createForm-date" placeholder="Date" required max={currentDate} />
                        </div>
                        <div className="createForm-incomeCategories-div" >
                            <select onChange={handleInput} name="categories" required>
                                <option disabled selected value={''} >Categories</option>
                                <option value="salary">Salary</option>
                                <option value="grants">Grants</option>
                                <option value="awards">Awards</option>
                                <option value="coupon">Coupon</option>
                                <option value="lottery">Lottery</option>
                                <option value="refund">Refund</option>
                                <option value="rental">Rental</option>
                                <option value="stocks">Stocks</option>
                                <option value="investment">Investment</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="createForm-div-button">
                            <button className="createForm-button">Submit</button>
                        </div>
                    </form>
                </div>
            }
        </div >
    )
}