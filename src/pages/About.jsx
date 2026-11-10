import React from 'react';

const About = () => (
  <div className="container my-5">
    <h2 className="mb-4">Our Community Impact</h2>
    <table className="table table-bordered bg-white shadow-sm text-center">
      <thead className="table-dark">
        <tr>
          <th>Category</th>
          <th>Active Members</th>
          <th>Swaps Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Technology</td>
          <td rowSpan="2" className="align-middle">500+ Members</td>
          <td>240</td>
        </tr>
        <tr>
          <td>Arts & Design</td>
          <td>130</td>
        </tr>
      </tbody>
      <tfoot>
        <tr className="table-secondary">
          <th colSpan="2">Total Impact</th>
          <th>370 Swaps</th>
        </tr>
      </tfoot>
    </table>
  </div>
);
export default About;