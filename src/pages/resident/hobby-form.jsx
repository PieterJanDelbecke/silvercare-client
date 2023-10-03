import { useEffect, useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const HobbyFrom = ({ residentId }) => {
	const [hobbyOptions, setHobbieOptions] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get("http://localhost:3000/hobby");
				console.log("Hobbies", data);
				const options = data.map((hobby) => {
					return { id: hobby.id, name: hobby.name, isChecked: false };
				});
				console.log("Options", options);
				setHobbieOptions(options);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	const handleHobbyChange = (hobbyId) => {
		setHobbieOptions((prev) =>
			prev.map((hobby) => (hobby.id === hobbyId ? { ...hobby, isChecked: !hobby.isChecked } : hobby))
		);
	};

	const handleSave = async () => {
		console.log("hobbyOptions", hobbyOptions);
		const { data } = await axios.post(
			"http://localhost:3000/resident/hobbies",
			{ residentId, hobbies: hobbyOptions },
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
			<h3>Hobbies</h3>
			<div>
				<form>
					{hobbyOptions.map((hobby) => (
						<div key={hobby.id}>
							<label htmlFor={hobby.name}>{hobby.name}</label>
							<input
								type="checkbox"
								id={hobby.id}
								checked={hobby.isChecked}
								onChange={() => handleHobbyChange(hobby.id)}
							/>
						</div>
					))}
					<button type="button" onClick={handleSave}>
						Save
					</button>
				</form>
			</div>
		</>
	);
};

export default HobbyFrom;
