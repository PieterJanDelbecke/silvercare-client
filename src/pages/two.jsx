import { useContext } from "react";
import styled from "@emotion/styled";

import Context from "../context/context";

const Header = styled.h1`
  color: red;
`;

const SubHeader = styled.h2`
  color: orange;
`;

const PageTwo = () => {
  const { context } = useContext(Context);

  return (
    <>
      <Header>Page Two</Header>
      <SubHeader>{context.color}</SubHeader>
    </>
  );
};

export default PageTwo;
