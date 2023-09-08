import axios from "axios";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

import NavButton from "./NavButton";
import { apiUrl } from "../constants";
import { useNavigate } from "react-router-dom";

const AuthorList = (props) => {
	const { authors, setAuthors } = props;
	const navigate = useNavigate();

	const deleteAuthor = (authorId) => {
		axios
			.delete(`${apiUrl}${authorId}`)
			.then(setAuthors(authors.filter((author) => author._id != authorId)))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<NavButton link={"new"} title={"Add an Author"} />
			<p className="mt-3">We have quotes by:</p>
			<table className="table w-50 align-middle table-bordered mt-3 text-center">
				<thead>
					<tr>
						<th>Author</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{authors.map((author, idx) => {
						return (
							<tr key={idx}>
								<td>{author.name}</td>
								<td className="d-flex gap-3 justify-content-center">
									<EditButton authorId={author._id} />
									<DeleteButton handleDelete={() => deleteAuthor(author._id)} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default AuthorList;
