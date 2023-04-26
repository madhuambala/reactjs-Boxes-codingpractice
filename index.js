const Box = (props) => {
  const { className, paragraph } = props;
  const classNameContainer = `box-container ${className}`;
  return (
    <div className={classNameContainer}>
      <p className="sub-tittle">{paragraph}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="container">
      <Box className="small-container" paragraph="Small" />
      <Box className="medium-container" paragraph="medium" />
      <Box className="large-container" paragraph="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
