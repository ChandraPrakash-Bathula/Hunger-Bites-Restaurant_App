const Shimmer = () => {
  return (
    <>
      <div className="food-card">
        {Array(10)
          .fill(" ")
          .map((e, index) => (
            <div key={index} className="shimmer"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
