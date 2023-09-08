import axios from "axios";
import AuthorForm from "../components/AuthorForm";
import NavButton from "../components/NavButton";
import { apiUrl } from "../constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Create = () => {
	const navigate = useNavigate();
	const [error, setError] = useState();

	const createAuthor = (author) => {
		axios
			.post(`${apiUrl}`, author)
			.then((res) => navigate("/authors"))
			.catch((err) => {
				const errorResponse = err.response.data.errors;
				console.log(errorResponse.name.message);
				setError(errorResponse.name.message);
			});
	};

	return (
		<div>
			<NavButton title={"Home"} />
			<p className="mt-3">Add a new author:</p>

			<AuthorForm initialName={""} onSubmit={createAuthor} error={error} />
		</div>
	);
};

export default Create;
