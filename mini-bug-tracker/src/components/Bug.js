import Button from "./Button";
import 'bootstrap-icons/font/bootstrap-icons.css';
const Bug = ({bug, onDelete, changeStatus}) => {
  let statusColor = "red";
  if (bug.status === "open") {
    statusColor = "green";
  }
  return (
    <div className="bug">
      <h3>{bug.title}
        <Button onClick={() => onDelete(bug.id)} style={{
          backgroundColor: "#f4f4f4", 
          color: "Red"}} text={<i className="bi bi-trash-fill"></i>}/> 
      </h3> 
      <p>{bug.description}</p>
      <Button 
      type="button"
      style={{
        border: "1px solid " + statusColor,
        color: statusColor, 
        backgroundColor: "white"}}
      text={bug.status}
      onClick={() => changeStatus(bug.id)}
      />
    </div>
  )
}

export default Bug
