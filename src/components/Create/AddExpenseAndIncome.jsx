import { useState } from "react"
import CreateExpense from "./CreateExpense";
import CreateIncome from "./CreateIncome";
import addIcon from '../../image/add.png'

export default function AddExpense() {
    const [isSubmit, setIsSubmit] = useState(false);
    const [isIncome, setIsIncome] = useState(false);
    const [isExpense, setIsExpense] = useState(false);

    function handleIsCreate() {
        setIsSubmit(prevIsCreate => !prevIsCreate) // toggle Add Button
        setIsExpense(false)
        setIsIncome(false)
    }

    function handleIsIncome() {
        setIsIncome(prevIsIncome => !prevIsIncome)
        setIsExpense(false)
    }

    function handleIsExpense() {
        setIsExpense(prevIsExpense => !prevIsExpense)
        setIsIncome(false)
    }

    const addItemStickyPosition = isSubmit ? { width: "" } : { maxWidth: "70px" } // so that when clicked, the modal won't go out of the screen

    return (
        <>
            {isSubmit &&
                <div className="modal">
                    <div className="modalOuter">
                        <button className="modalOuter-btn" onClick={handleIsCreate}>x</button>
                        <div className="modalContent">
                            <CreateIncome                               // Income Component
                                setIsSubmit={setIsSubmit}
                                isIncome={isIncome}
                                handleIsIncome={handleIsIncome}
                            />
                            <CreateExpense                             // Expense Component
                                setIsSubmit={setIsSubmit}
                                isExpense={isExpense}
                                handleIsExpense={handleIsExpense}
                            />
                        </div>
                    </div>
                </div>
            }
            <div style={addItemStickyPosition} className="addItem">
                <div className={isSubmit ? "addItem-button-div" : "addItem-button-div hoverEffect"}>
                    <button className="addItem-button" onClick={handleIsCreate}><img src={addIcon} alt="addIcon" /></button>
                </div>
            </div>
        </>
    )
}