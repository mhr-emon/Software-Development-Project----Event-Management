import React from 'react';
import { useForm } from 'react-hook-form'; // Import useForm hook

function RentBusinessSpaceForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Submit data (e.g., send to server)
    // Handle form submission logic here (redirect, display success message)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Rent a Business Space</h2>
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
          {...register('email', { required: true,
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
        <label htmlFor="businessName">Business Name</label>
        <input
          type="text"
          className="form-control"
          id="businessName"
          {...register('businessName', { required: true })} // Register business name field
        />
        {errors.businessName && (
          <span className="text-danger">Business Name is required</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="industry">Industry</label>
        <input
          type="text"
          className="form-control"
          id="industry"
          {...register('industry')} // Register industry field (not required)
        />
      </div>
      <div className="form-group">
        <label htmlFor="desiredLocation">Desired Location</label>
        <input
          type="text"
          className="form-control"
          id="desiredLocation"
          {...register('desiredLocation', { required: true })} // Register desired location field
        />
        {errors.desiredLocation && (
          <span className="text-danger">Desired Location is required</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="estimatedSize">Estimated Size (sq. ft.)</label>
        <input
          type="number"
          className="form-control"
          id="estimatedSize"
          {...register('estimatedSize', { required: true })} // Register estimated size field
        />
        {errors.estimatedSize && (
          <span className="text-danger">Estimated Size is required</span>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Rent a Business Space
      </button>
    </form>
  );
}

export default RentBusinessSpaceForm;
