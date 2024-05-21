import { useState } from "react";

const Main = () => {
  const [isvisible, NotIsVisible] = useState(false);

  const handelButton = () => {
    return NotIsVisible(!isvisible);
  };

  return (
    <section className="Main">
      <button className="button1" onClick={handelButton}>
        {isvisible ? "Hide" : "Show"}
      </button>
      {isvisible ? (
        <img
          className="Image1"
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          alt="I am vishnu vardhan Reddy Dagumati "
        />
      ) : (
        <h2>"Click to Show the Image"</h2>
      )}
    </section>
  );
};

export default Main;
