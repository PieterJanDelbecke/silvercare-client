import { useContext } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import Context from "../context/context";

const Header = styled.h1`
	color: red;
`;

const SubHeader = styled.h2`
	color: orange;
`;

const HomeLink = styled(Link)`
	color: purple;
	text-decoration: none;
`;

const PageOne = () => {
	const { context } = useContext(Context);

	return (
		<>
			<HomeLink to={"/"}>HOME</HomeLink>
			<Header>Page One</Header>
			<SubHeader>{context.color}</SubHeader>
		</>
	);
};

export default PageOne;
