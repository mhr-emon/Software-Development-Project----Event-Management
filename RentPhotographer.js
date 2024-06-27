import React from 'react';
import { useForm } from 'react-hook-form'; // Import useForm hook
import { Link } from 'react-router-dom'; // Import Link for routing

function RentPhotographerForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Submit data (e.g., send to server)
    // Handle form submission logic here (redirect, display success message)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Rent a Photographer</h2>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          {...register('name', { required: true })} // Register name field
        />
        {errors.name && <span className="text-danger">Name is required</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          {...register('email', {required: true,
            pattern: {
              value:
              /^[a-zA-Z0-9.!#$&'*+.=?^_{|}-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message:  "Invalid Email Format",
            },
          })} // Register email field
        />
        {errors.email && <span className="text-danger">Email is required</span>}
      </div>
      <div className="form-group">
        <label htmlFor="eventDate">Event Date</label>
        <input
          type="date"
          className="form-control"
          id="eventDate"
          {...register('eventDate', { required: true })} // Register event date field
        />
        {errors.eventDate && (
          <span className="text-danger">Event Date is required</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="eventType">Event Type</label>
        <select
          className="form-control"
          id="eventType"
          {...register('eventType', { required: true })} // Register event type field
        >
          <option value="">Select Event Type</option>
          <option value="wedding">Wedding</option>
          <option value="portrait">Portrait</option>
          <option value="event">Event</option>
        </select>
        {errors.eventType && (
          <span className="text-danger">Event Type is required</span>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Rent a Photographer
      </button>
    </form>
  );
}

export default RentPhotographerForm;
