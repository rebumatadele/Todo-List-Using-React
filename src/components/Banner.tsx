function Banner() {
  return (
    <>
      <div
        className="container py-5"
        style={{
          background: "linear-gradient(45deg, #fdbb2d, #f78e2c)",
          borderRadius: "5px",
        }}
      >
        <div className="row justify-content-center">
          <div className="col-10 text-center">
            <h1
              className="display-6 text-white"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Todo List
            </h1>
            <p
              className="lead text-white"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Turning Goals into Achievements, One Task at a Time
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
