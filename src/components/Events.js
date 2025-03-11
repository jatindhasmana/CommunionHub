import React, { useEffect, useState } from "react";
import EventForm from "./EventForm";
import "../index.css";
import "../App.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("");

  const addEvent = (newEvent) => {
    setEvents((prev) => [...prev, newEvent]);
  };

  const filteredEvents = filter
    ? events.filter((event) => event.category === filter)
    : events;

  return (
    <div className="events">
      <h2>Add New Event</h2>
      <EventForm addEvent={addEvent} />
      <h4>Upcoming Events</h4>
      <hr></hr>
      <div className="filter-options">
        <p>Filter by Category: </p>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>
      <div className="event-list">
        {filteredEvents.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Category:</strong> {event.category}</p>
            <p><strong>Description:</strong> {event.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
