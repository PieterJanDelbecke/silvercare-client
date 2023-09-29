import { useState } from "react";
import styled from "@emotion/styled";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Header = styled.h1`
	color: red;
`;

const Title = styled.h3`
	color: blue;
`;

const OnBoardingPage = () => {
	const initialValues = {
		firstName: "",
		lastName: "",
		DOB: "",
	};

	const validationSchema = Yup.object({
		firstName: Yup.string().required("First Name is required"),
		lastName: Yup.string().required("Last Name is required"),
		DOB: Yup.date().required("DOB is required"),
	});

	const onSubmit = async (values) => {
		console.log("==> VALUES:", values);
		const { data } = await axios.post("http://localhost:3000/resident/new", values, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		console.log("==> DATA: ", data);
	};

	return (
		<>
			<Header>On Boarding - Assessment</Header>
			<Title>New Resident</Title>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
				<Form>
					<div>
						<label htmlFor="firstName">First Name: </label>
						<Field type="text" id="firstName" name="firstName" />
						<ErrorMessage name="firstName" component="span" />
					</div>
					<div>
						<label htmlFor="lastName">Last Name: </label>
						<Field type="text" id="lastName" name="lastName" />
						<ErrorMessage name="lastName" component="span" />
					</div>
					<div>
						<label htmlFor="DOB">DOB: </label>
						<Field type="date" id="DOB" name="DOB" />
						<ErrorMessage name="DOB" component="span" />
					</div>
					<button type="submit">Add Resident</button>
				</Form>
			</Formik>
			<div></div>
		</>
	);
};

export default OnBoardingPage;
