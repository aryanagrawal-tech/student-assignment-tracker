
function Dashboard({ assignments }) {
  const total = assignments.length;

  const completed = assignments.filter(
    (assignment) => assignment.completed
  ).length;

  const pending = total - completed;

  const stats = [
    { label: "Total Assignments", value: total },
    { label: "Pending", value: pending },
    { label: "Completed", value: completed },
  ];

  return (
    <section className="dashboard">
      {stats.map((stat) => (
        <div className="stat-card" key={stat.label}>
          <p>{stat.label}</p>
          <h2>{stat.value}</h2>
        </div>
      ))}
    </section>
  );
}

export default Dashboard;
