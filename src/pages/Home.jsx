import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import skills from '../data/skills';

const categories = ['All', ...new Set(skills.map(s => s.category))];   // builds the buttons from the data

const Home = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = skills.filter(s =>
    (category === 'All' || s.category === category) &&
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <header className="hero" style={{background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/hero-bg.jpg') center/cover`}}>
        <div className="container">
          <h1 className="display-3 fw-bold">Learn Something New, for Free</h1>
          <p className="lead">A community where your knowledge is the currency.</p>
          <Link to="/register" className="btn btn-primary btn-lg">Start Your First Swap</Link>
        </div>
      </header>

      <div className="container my-5 py-5 text-center">
        <div className="row">
          <div className="col-md-4">
            <div className="card hover-card shadow-sm h-100">
              <div className="card-body">
                <h3>Share</h3>
                <p className="text-muted">Find someone offering exactly what you need to master next.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card hover-card shadow-sm h-100">
              <div className="card-body">
                <h3>Grow</h3>
                <p className="text-muted">Expand your skill set without spending a single penny.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card hover-card shadow-sm h-100">
              <div className="card-body">
                <h3>Exchange</h3>
                <p className="text-muted">Connect and start a mutual learning journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <h2 className="text-center mb-4">Explore Skills</h2>

        <div className="row justify-content-center mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search skills..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="text-center mb-4">
          {categories.map(c => (
            <button
              key={c}
              className={`btn me-2 ${category === c ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="row g-4 justify-content-center">
          {filtered.map((s, i) => (
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
        {filtered.length === 0 && <p className="text-center text-muted">No skills found.</p>}
      </div>
    </div>
  );
};

export default Home;