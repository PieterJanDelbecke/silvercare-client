import { useContext } from "react";
import styled from "@emotion/styled";

import Context from "../context/context";

const Header = styled.h1`
  color: red;
`;

const SubHeader = styled.h2`
  color: orange;
`;

const PageOne = () => {
  const { context } = useContext(Context);

  return (
    <>
      <Header>Page One</Header>
      <SubHeader>{context.color}</SubHeader>
    </>
  );
};

export default PageOne;
