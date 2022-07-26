import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function BudgetEditForm() {
  const navigate = useNavigate();
  let { index } = useParams();
  const [budget, setBudget] = useState({
    date: "",
    item_name: "",
    amount: [],
    from: "",
  });

  const handleTextChange = (event) => {
    setBudget({ ...budget, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/budget/${index}`)
      .then((res) => {
        setBudget(res.data);
      })
      .catch();
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/budget/${index}`, budget)
      .then(() => {
        navigate(`/budget/${index}`);
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
          type="text"
          required
          value={budget.date}
          placeholder="date"
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
        <input id="submit" type="submit" value="Edit Item" />
      </form>
      <Link to={`/budget/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default BudgetEditForm;
