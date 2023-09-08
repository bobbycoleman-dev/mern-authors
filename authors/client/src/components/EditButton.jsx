import { Link } from "react-router-dom";

const EditButton = ({ authorId }) => {
	return (
		<div>
			<Link to={`/authors/${authorId}/edit`} className="btn btn-primary">
				<i className="bi-pencil-square"></i>
			</Link>
		</div>
	);
};

export default EditButton;
