import { useState } from 'react';
import './ExpenseForm.css';

// const initialValues = {
//   enteredTitle: '',
//   enteredAmount: '',
//   enteredDate: '',
// };

const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // You can use other way to save the differents states
  // const [userInput, setUserInput] = useState(initialValues);

  const titleChangeHandler = e => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
    // ***Use this function if the updated state depends of previous state***
    // setUserInput(prevState => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };

  const amountChangeHandler = e => {
    setEnteredAmount(e.target.value);
    // setUserInput(prevState => {
    //   return { ...userInput, enteredAmount: +e.target.value };
    // });
  };

  const dateChangeHandle = e => {
    setEnteredDate(e.target.value);
    // setUserInput(prevState => {
    //   return { ...userInput, enteredDate: e.target.value };
    // });
  };

  const submitHandler = e => {
    e.preventDefault();

    // console.log(userInput);
    // props.onSaveExpenseData(userInput);

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandle}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
