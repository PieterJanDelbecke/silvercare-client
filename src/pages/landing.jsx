import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import Context from "../context/context";

const Header = styled.h1`
  color: red;
`;

const ButtonBlue = styled.button`
  background-color: blue;
`;

const ButtonGreen = styled.button`
  background-color: green;
`;

const LandingPage = () => {
  const { context, setContext } = useContext(Context);
  const navigate = useNavigate();

  const handleBlueClick = (event) => {
    event.preventDefault();

    setContext({
      ...context,
      color: "blue",
    });

    navigate("/one");
  };

  const handleGreenClick = (event) => {
    event.preventDefault();

    setContext({
      ...context,
      color: "green",
    });

    navigate("/two");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("firstName: ", e.target.firstName.value);
    console.log("lastName: ", e.target.lastName.value);
    setContext({
      ...context,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
    });
    navigate("/two");
  };

  return (
    <>
      <Header>Landing Page</Header>
      <ButtonBlue onClick={handleBlueClick}>BLUE</ButtonBlue>
      <ButtonGreen onClick={handleGreenClick}>GREEN</ButtonGreen>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fistName">First Name:</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};

export default LandingPage;
