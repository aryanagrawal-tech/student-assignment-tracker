
function AssignmentCard({
  assignment,
  onToggle,
  onDelete,
  onEdit,
}) {
  return (
    <article
      className={`assignment-card ${
        assignment.completed ? "completed" : ""
      }`}
    >
      <div className="assignment-info">
        <span className="subject-tag">{assignment.subject}</span>

        <h3>{assignment.title}</h3>

        <p>Due date: {assignment.dueDate || "Not set"}</p>

        {assignment.description && <p>{assignment.description}</p>}

        <span
          className={`status ${
            assignment.completed
              ? "status-completed"
              : "status-pending"
          }`}
        >
          {assignment.completed ? "Completed" : "Pending"}
        </span>
      </div>

      <div className="assignment-actions">
        <button onClick={() => onEdit(assignment)}>
          Edit
        </button>

        <button onClick={() => onToggle(assignment.id)}>
          {assignment.completed ? "Undo" : "Complete"}
        </button>

        <button
          className="delete-button"
          onClick={() => onDelete(assignment.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default AssignmentCard;
