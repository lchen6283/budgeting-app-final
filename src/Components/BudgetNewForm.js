import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function BudgetNewForm() {
  const navigate = useNavigate();
  const [budget, setBudget] = useState({
    date: "",
    item_name: "",
    amount: [],
    from: "",
  });

  const handleTextChange = (event) => {
    setBudget({ ...budget, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/budget`, budget)
      .then((res) => {
        navigate("/budget");
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          required
          value={budget.date}
          onChange={handleTextChange}
        />
        <label htmlFor="item_name">Name</label>
        <input
          id="item_name"
          value={budget.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="name"
          required
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={budget.amount}
          placeholder="amount"
          onChange={handleTextChange}
        />
        <label htmlFor="from">From</label>
        <input
          id="from"
          type="text"
          name="from"
          value={budget.from}
          onChange={handleTextChange}
          placeholder="from"
        />

        <input id="submit" type="submit" value="Create New Item" />
      </form>
    </div>
  );
}

export default BudgetNewForm;
