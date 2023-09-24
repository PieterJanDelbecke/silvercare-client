// import {useState, useEffect} from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Header = styled.h1`
	color: red;
`;

const HomeLink = styled(Link)`
	color: purple;
	text-decoration: none;
`;

const SignUpPage = () => {
	return (
		<>
			<HomeLink to={"/"}>HOME</HomeLink>
			<Header>Sign Up</Header>
		</>
	);
};

export default SignUpPage;
