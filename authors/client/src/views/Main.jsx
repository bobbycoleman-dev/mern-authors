import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../constants";
import AuthorList from "../components/AuthorList";

const Main = () => {
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		axios
			.get(apiUrl)
			.then((res) => setAuthors(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<AuthorList authors={authors} setAuthors={setAuthors} />
		</div>
	);
};

export default Main;
