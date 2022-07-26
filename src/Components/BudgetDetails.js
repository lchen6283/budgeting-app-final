import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function BudgetDetails() {
  const [budget, setBudgets] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/budget/${index}`)
      .then((res) => {
        setBudgets(res.data);
      })

      .catch(() => {
        navigate("/not found");
      });
  }, [index, navigate]);
  const handleDelete = () => {
    axios
      .delete(`${API}/budget/${index}`)
      .then(() => {
        navigate("/budget");
      })
      .catch(() => {
        console.warn("error");
      });
  };

  return (
    <article>
      <h2>Date: {budget.date}</h2>
      <h2>Name: {budget.item_name}</h2>
      <h2>Amount: ${budget.amount}</h2>
      <h2>From: {budget.from}</h2>
      <h2>Category: {budget.category}</h2>

      <div className="showNavigation">
        <div>
          <Link to={`/budget`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/budget/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default BudgetDetails;
