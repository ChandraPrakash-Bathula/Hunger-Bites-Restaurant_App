const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Restaurant details page</p>
      <div className="food-card">
        {Array(10)
          .fill(" ")
          .map((e, index) => (
            <div key={index} className="shimmer"></div>
          ))}
      </div>
    </div>
  );
};

export default About;
