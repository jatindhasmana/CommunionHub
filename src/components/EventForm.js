import React, { useState } from "react";
import "../index.css";

const EventForm = ({ addEvent }) => {
  const [formData, setFormData] = useState({ title: "", date: "", category: "", desc: ""});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.date && formData.category && formData.desc) {
      addEvent(formData);
      setFormData({ title: "", date: "", category: "", desc: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input type="text" name="title" placeholder="Event Title" value={formData.title} onChange={handleChange} required />
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <select name="category" value={formData.category} onChange={handleChange} required>
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <input type="text" name="desc" placeholder="Despriction" value={formData.desc} onChange={handleChange}></input>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;