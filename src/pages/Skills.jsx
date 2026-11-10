import React from 'react';
import skills from '../data/skills';

const Skills = () => (
  <div className="container my-5">
    <h2 className="text-center mb-5">Browse Skills</h2>
    <div className="row g-4">
      {skills.map((s, i) => (
        <div key={i} className="col-xl-3 col-md-6">
          <div className="card hover-card shadow-sm">
            <img src={s.img} className="card-img-top" alt={s.title} />
            <div className="card-body">
              <h5>{s.title}</h5>
              <p className="text-muted small">Trade for: {s.trade}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Skills;