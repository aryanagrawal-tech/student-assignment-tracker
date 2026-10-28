
import { useEffect, useState } from "react";

function AssignmentForm({
  onAdd,
  editingAssignment,
  onUpdate,
  onCancelEdit,
}) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingAssignment) {
      setTitle(editingAssignment.title);
      setSubject(editingAssignment.subject);
      setDueDate(editingAssignment.dueDate || "");
      setDescription(editingAssignment.description || "");
    } else {
      setTitle("");
      setSubject("");
      setDueDate("");
      setDescription("");
    }
  }, [editingAssignment]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !subject.trim()) {
      return;
    }

    const updatedData = {
      title: title.trim(),
      subject: subject.trim(),
      dueDate,
      description: description.trim(),
    };

    if (editingAssignment) {
      onUpdate(editingAssignment.id, updatedData);
    } else {
      onAdd(updatedData);
    }

    setTitle("");
    setSubject("");
    setDueDate("");
    setDescription("");
  }

  function handleCancel() {
    setTitle("");
    setSubject("");
    setDueDate("");
    setDescription("");
    onCancelEdit();
  }

  return (
    <section className="form-section">
      <h2>
        {editingAssignment ? "Edit Assignment" : "Add New Assignment"}
      </h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Assignment Title *</label>
        <input
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="e.g. React Practical"
          required
        />

        <label htmlFor="subject">Subject *</label>
        <input
          id="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          placeholder="e.g. Web Development"
          required
        />

        <label htmlFor="dueDate">Due Date</label>
        <input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Assignment details..."
          rows="3"
        />

        <button type="submit" className="primary-button">
          {editingAssignment ? "Save Changes" : "Add Assignment"}
        </button>

        {editingAssignment && (
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </form>
    </section>
  );
}

export default AssignmentForm;
