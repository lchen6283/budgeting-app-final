import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Budget from "./Budget";

import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Budgets() {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    axios.get(`${API}/budget`).then((res) => {
      setBudgets(res.data);
    });
  }, []);

  let total = budgets.reduce((a, budget) => a + parseInt(budget.amount), 0);
  let dollarFormat = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="Budgets">
      <section>
        <h1>Bank Account Total: {dollarFormat.format(total)}</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Expense</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((budget, index) => {
              return <Budget key={index} budget={budget} index={index} />;
            })}
          </tbody>
        </table>
      </section>
      <br />
      <button>
        <Link to={"/"}>Back</Link>
      </button>
    </div>
  );
}

export default Budgets;
