
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import AssignmentForm from "./components/AssignmentForm";
import AssignmentList from "./components/AssignmentList";
import "./App.css";

function App() {
  const [assignments, setAssignments] = useState(() => {
    try {
      const saved = localStorage.getItem("studytrack-assignments");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [editingAssignment, setEditingAssignment] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "studytrack-assignments",
      JSON.stringify(assignments)
    );
  }, [assignments]);

  function addAssignment(newAssignment) {
    const assignment = {
      ...newAssignment,
      id: crypto.randomUUID(),
      completed: false,
    };

    setAssignments((current) => [assignment, ...current]);
  }

  function updateAssignment(id, updatedData) {
    setAssignments((current) =>
      current.map((assignment) =>
        assignment.id === id
          ? { ...assignment, ...updatedData }
          : assignment
      )
    );

    setEditingAssignment(null);
  }

  function toggleAssignment(id) {
    setAssignments((current) =>
      current.map((assignment) =>
        assignment.id === id
          ? { ...assignment, completed: !assignment.completed }
          : assignment
      )
    );
  }

  function deleteAssignment(id) {
    setAssignments((current) =>
      current.filter((assignment) => assignment.id !== id)
    );

    setEditingAssignment((current) =>
      current?.id === id ? null : current
    );
  }

  function startEditing(assignment) {
    setEditingAssignment(assignment);
  }

  function cancelEditing() {
    setEditingAssignment(null);
  }

  return (
    <div className="app">
      <Header />

      <main className="container">
        <section className="welcome">
          <p className="eyebrow">YOUR STUDY SPACE</p>
          <h2>Manage your assignments</h2>
          <p>Keep track of deadlines and stay on top of your studies.</p>
        </section>

        <Dashboard assignments={assignments} />

        <div className="main-grid">
          <AssignmentForm
            onAdd={addAssignment}
            editingAssignment={editingAssignment}
            onUpdate={updateAssignment}
            onCancelEdit={cancelEditing}
          />

          <AssignmentList
            assignments={assignments}
            onToggle={toggleAssignment}
            onDelete={deleteAssignment}
            onEdit={startEditing}
          />
        </div>
      </main>

      <footer className="app-footer">
        Student Assignment Tracker · Built with React
      </footer>
    </div>
  );
}

export default App;
