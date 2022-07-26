import { Link } from "react-router-dom";

function Budget({ budget, index }) {
  return (
    <tr>
      <td>{budget.date}</td>
      <td className="Budget">
        <Link to={`/budget/${index}`}>{budget.item_name}</Link>
      </td>
      <td>{budget.amount}</td>
    </tr>
  );
}

export default Budget;
