import React, { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({ name: '', gender: '', date: '', skill: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered: ${form.name}`);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 card p-5 shadow">
          <h2 className="text-center mb-4">Join the Network</h2>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" onChange={e => setForm({...form, name: e.target.value})} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label><br />
            <input type="radio" name="g" value="m" onChange={e => setForm({...form, gender: e.target.value})} /> Male
            <input type="radio" name="g" value="f" className="ms-3" onChange={e => setForm({...form, gender: e.target.value})} /> Female
          </div>
          <div className="mb-3">
            <label className="form-label">Start Date</label>
            <input type="date" className="form-control" onChange={e => setForm({...form, date: e.target.value})} />
          </div>
          <div className="mb-3">
            <label className="form-label">About Your Skill</label>
            <textarea className="form-control" rows="3" onChange={e => setForm({...form, skill: e.target.value})}></textarea>
          </div>
          <button className="btn btn-primary w-100 fw-bold" onClick={handleSubmit}>REGISTER</button>
        </div>
      </div>
    </div>
  );
};
export default Register;