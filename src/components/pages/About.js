import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p className="my-1">
        This is a React app to provide a simple calculator functionality (addition, subtraction, multiplication,
        division, square root, and a random string generation) where each functionality will have a separate cost per
        request.
      </p>
      <p className="bg-dark p">
        <strong>Version:</strong>1.0.0
      </p>
    </div>
  );
};

export default About;
