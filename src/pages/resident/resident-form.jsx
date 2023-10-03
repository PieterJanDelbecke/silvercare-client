import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import FamilyForm from "./family-form";
import HobbyFrom from "./hobby-form";

const ResidentFormPage = () => {
	const residentId = "77de6c03-7abc-4003-81e3-952d7425424a";

	return (
		<>
			<h1>Resident Form</h1>
			<FamilyForm residentId={residentId} />
			<HobbyFrom residentId={residentId} />
		</>
	);
};

export default ResidentFormPage;
