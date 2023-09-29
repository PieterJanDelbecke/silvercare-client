import { useContext, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import Context from "../context/context";

const Header = styled.h1`
	color: red;
`;

const HomeLink = styled(Link)`
	color: purple;
	text-decoration: none;
`;

const Warning = styled.p`
	color: red;
`;

const SignUpPage = () => {
	const { context, setContext } = useContext(Context);
	const [message, setMessage] = useState(null);
	const navigate = useNavigate();

	const initialValues = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	};

	const validationSchema = Yup.object({
		firstName: Yup.string().required("First Name is required"),
		lastName: Yup.string().required("Last Name is required"),
		email: Yup.string().email("Invalid email address").required("Email is required"),
		password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password"), null], "Passwords must match")
			.required("Confirm Password is required"),
	});

	const onSubmit = async (values) => {
		console.log("==> VALUES:", values);
		const { data } = await axios.post("http://localhost:3000/users/signup", values, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		console.log("==> DATA: ", data);

		if (data.id) {
			const { id, firstName, lastName, email } = data;
			setContext({
				...context,
				firstName,
				lastName,
				email,
				id,
			});
			navigate("/main");
		} else {
			setMessage(data.message);
		}
	};

	const handleSignIn = () => {
		navigate("/signin");
	};

	return (
		<>
			<HomeLink to={"/"}>HOME</HomeLink>
			<Header>Sign Up</Header>
			<div>
				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
					<Form>
						<div>
							<label htmlFor="firstName">First Name</label>
							<Field type="text" id="firstName" name="firstName" />
							<ErrorMessage name="firstName" compontent="div" />
						</div>
						<div>
							<label htmlFor="lastName">Last Name</label>
							<Field type="text" id="lastName" name="lastName" />
							<ErrorMessage name="lastName" compontent="div" />
						</div>
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
						<div>
							<label htmlFor="confirmPassword">Confirm Password</label>
							<Field type="text" id="confirmPassword" name="confirmPassword" />
							<ErrorMessage name="confirmPassword" compontent="div" />
						</div>
						<button type="submit">Sign Up</button>
					</Form>
				</Formik>
			</div>
			{message && <Warning>{message}</Warning>}
			<h4>Already Signed Up?</h4>
			<div>
				<button type="button" onClick={handleSignIn}>
					Sign In
				</button>
			</div>
		</>
	);
};

export default SignUpPage;
