import React, { useState } from 'react';

const GetInTouch = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}, we received your message!`);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-2">Get in Touch</h2>
      <p className="text-center text-muted mb-5">Have a question or an idea? We'd love to hear from you.</p>
      <div className="row g-4">
        <div className="col-md-5">
          <div className="card hover-card shadow-sm h-100 p-4">
            <h5 className="mb-3">Contact Info</h5>
            <p className="mb-1"><strong>Email:</strong> info@skillsexchange.com</p>
            <p className="mb-1"><strong>Phone:</strong> +961 00 000 000</p>
            <p className="mb-0"><strong>Hours:</strong> Mon - Fri, 9am - 5pm</p>
          </div>
        </div>
        <div className="col-md-7">
          <form className="card shadow-sm p-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" name="name" className="form-control" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea name="message" rows="4" className="form-control" onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100 fw-bold">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;
