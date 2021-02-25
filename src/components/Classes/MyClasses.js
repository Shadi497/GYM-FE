const MyClasses = (props) => {
  const clas = props.clas;

  return (
    <div style={{ margin: "90px 0 0 190px" }}>
      <h4>
        You booked <h1>{clas.name}</h1>
      </h4>
      <h4>
        On <h1>{clas.date}</h1>
      </h4>
      <h4>
        At <h1>{clas.time}</h1>
      </h4>
    </div>
  );
};

export default MyClasses;
