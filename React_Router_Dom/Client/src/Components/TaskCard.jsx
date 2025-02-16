import React from "react";
import "./TaskCard.css";

const TaskCard = ({
  title,
  desc,
  endDate,
  assignTo,
  assignedBy,
  createdAt,
  status,
  role,
}) => {
  // Function to get the status class
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "status-badge status-completed";
      case "pending":
        return "status-badge status-pending";
      case "overdue":
        return "status-badge status-overdue";
      default:
        return "status-badge";
    }
  };
  console.log(assignTo.username);
  
  

  return (
    <div className="task-card">
      <h1 className="task-title">{title}</h1>
      <p className="task-desc">{desc}</p>

      <p className={getStatusClass(status)}>{status}</p>

      <p className="task-dates">
        Created At:{" "}
        {new Date(createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="task-dates">
        End Date:{" "}
        {new Date(endDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      
      <p className="assigned-user">
        Assigned By: {role === "user" ? assignedBy?.username : assignTo?.username}
      </p>
    </div>
  );
};

export default TaskCard;
