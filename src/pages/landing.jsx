// import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const Header = styled.h1`
	color: red;
`;

const SignUpBtn = styled.button`
	background-color: orange;
`;
const SignInBtn = styled.button`
	background-color: orange;
`;

const LandingPage = () => {
	const navigate = useNavigate();

	// useEffect(() => {
	// 	async function getData() {
	// 		try {
	// 			const response = await axios.get("http://localhost:3000/users");
	// 			console.log("RESPONSE:", response.data);
	// 		} catch (err) {
	// 			console.error(err);
	// 		}
	// 	}
	// 	getData();
	// }, []);

	const handleSignUp = () => {
		navigate("/signup");
	};
	const handleSignIn = () => {
		navigate("/signin");
	};

	return (
		<>
			<Header>Landing Page</Header>
			<div>
				<SignUpBtn onClick={handleSignUp}>Sign Up</SignUpBtn>
				<SignInBtn onClick={handleSignIn}>Sign In</SignInBtn>
			</div>
		</>
	);
};

export default LandingPage;
