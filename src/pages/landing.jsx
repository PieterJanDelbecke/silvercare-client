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

  return (
    <>
      <Header>Landing Page</Header>
      <ButtonBlue onClick={handleBlueClick}>BLUE</ButtonBlue>
      <ButtonGreen onClick={handleGreenClick}>GREEN</ButtonGreen>
    </>
  );
};

export default LandingPage;
