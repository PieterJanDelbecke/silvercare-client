// import {useState, useEffect} from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Header = styled.h1`
	color: red;
`;

const HomeLink = styled(Link)`
	color: purple;
	text-decoration: none;
`;

const SignInPage = () => {
	const navigate = useNavigate();

	const initialValues = {
		email: "",
		password: "",
	};

	const validationSchema = Yup.object({
		email: Yup.string().email("Invalid email address").required("Email is required"),
		password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
	});

	const onSubmit = async (values) => {
		console.log("==> VALUES:", values);
		const { data } = await axios.post("http://localhost:3000/users/signin", values, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		console.log("==> DATA: ", data);
	};

	const handleSignUp = () => {
		navigate("/signup");
	};

	return (
		<>
			<HomeLink to={"/"}>HOME</HomeLink>
			<Header>Sign In</Header>
			<div>
				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
					<Form>
						<div>
							<label htmlFor="email">Email</label>
							<Field type="text" id="email" name="email" />
							<ErrorMessage name="email" compontent="div" />
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<Field type="text" id="password" name="password" />
							<ErrorMessage name="password" compontent="div" />
						</div>
						<button type="submit">Sign In</button>
					</Form>
				</Formik>
			</div>
			<h4>Not Signed Up yet?</h4>
			<div>
				<button type="button" onClick={handleSignUp}>
					Sign Up
				</button>
			</div>
		</>
	);
};

export default SignInPage;
