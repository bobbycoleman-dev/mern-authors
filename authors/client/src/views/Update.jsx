import { useNavigate, useParams } from "react-router-dom";
import AuthorForm from "../components/AuthorForm";
import NavButton from "../components/NavButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../constants";

const Update = () => {
	const { id } = useParams();
	const [author, setAuthor] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(apiUrl + id)
			.then((res) => setAuthor(res.data))
			.catch((err) => console.log(err));
	}, []);

	const updateAuthor = (author) => {
		axios
			.patch(`${apiUrl}${id}`, author)
			.then(navigate("/authors"))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<NavButton title={"Home"} />
			<p className="mt-3">Edit this author:</p>
			{author && <AuthorForm initialName={author.name} onSubmit={updateAuthor} />}
		</div>
	);
};

export default Update;
