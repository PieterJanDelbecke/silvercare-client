import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import axios from "axios";

import Context from "../context/context";

const Header = styled.h1`
  color: red;
`;

const BlueBtn = styled.button`
  background-color: blue;
`;

const GreenBtn = styled.button`
  background-color: green;
`;

const SignUpBtn = styled.button`
  background-color: orange;
`;

const LandingPage = () => {
  const { context, setContext } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:3000/users");
        console.log("RESPONSE:", response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setContext({
      ...context,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
    });

    const { data } = await axios.post(
      "http://localhost:3000/users/new",
      {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Data", data);
    navigate("/two");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <Header>Landing Page</Header>
      <div>
        <SignUpBtn onClick={handleSignUp}>Sign Up</SignUpBtn>
      </div>
      <BlueBtn onClick={handleBlueClick}>BLUE</BlueBtn>
      <GreenBtn onClick={handleGreenClick}>GREEN</GreenBtn>
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
