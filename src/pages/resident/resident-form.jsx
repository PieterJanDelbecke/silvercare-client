import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const ResidentFormPage = () => {
	const residentId = "77de6c03-7abc-4003-81e3-952d7425424a";
	const initialValues = {
		sons: 0,
		daughters: 0,
		brothers: 0,
		sisters: 0,
		motherDeceased: false,
		fatherDeceased: false,
	};

	const validationSchema = Yup.object({
		sons: Yup.number().required("required"),
		daughters: Yup.number().required("required"),
		brothers: Yup.number().required("required"),
		sisters: Yup.number().required("required"),
		motherDeceased: Yup.boolean().required("required"),
		fatherDeceased: Yup.boolean().required("required"),
	});

	const onSubmit = async (values) => {
		console.log("==> VALUES:", values);
		const { data } = await axios.post(
			"http://localhost:3000/resident/family",
			{ ...values, residentId },
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		console.log("==> DATA: ", data);
	};

	return (
		<>
			<div>ResidentFormPage</div>
			<h3>Family</h3>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
				<Form>
					<div>
						<label htmlFor="sons">Sons: </label>
						<Field type="text" id="sons" name="sons" />
						<ErrorMessage name="sons" component="span" />
					</div>
					<div>
						<label htmlFor="daughters">Daughters: </label>
						<Field type="text" id="daughters" name="daughters" />
						<ErrorMessage name="daughters" component="span" />
					</div>
					<div>
						<label htmlFor="brothers">Brothers: </label>
						<Field type="text" id="brothers" name="brothers" />
						<ErrorMessage name="brothers" component="span" />
					</div>
					<div>
						<label htmlFor="sisters">Sisters: </label>
						<Field type="text" id="sisters" name="sisters" />
						<ErrorMessage name="sisters" component="span" />
					</div>
					<div>
						<label htmlFor="fatherDeceased">Father Deceased: </label>
						<Field type="checkbox" id="fatherDeceased" name="fatherDeceased" />
						<ErrorMessage name="fatherDeceased" component="span" />
					</div>
					<div>
						<label htmlFor="motherDeceased">Mother Deceased: </label>
						<Field type="checkbox" id="motherDeceased" name="motherDeceased" />
						<ErrorMessage name="motherDeceased" component="span" />
					</div>
					<button type="submit">save</button>
				</Form>
			</Formik>
		</>
	);
};

export default ResidentFormPage;
