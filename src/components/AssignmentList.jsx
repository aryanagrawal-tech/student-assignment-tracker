
import AssignmentCard from "./AssignmentCard";

function AssignmentList({
  assignments,
  onToggle,
  onDelete,
  onEdit,
}) {
  return (
    <section className="assignment-list">
      <h2>Your Assignments</h2>

      {assignments.length === 0 ? (
        <p className="empty-message">
          No assignments yet. Add your first assignment!
        </p>
      ) : (
        <div className="assignment-items">
          {assignments.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default AssignmentList;
