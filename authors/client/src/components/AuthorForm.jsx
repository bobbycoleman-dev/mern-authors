import { useState } from "react";
import NavButton from "./NavButton";

const AuthorForm = (props) => {
	const { initialName, onSubmit, error } = props;
	const [name, setName] = useState(initialName);

	const handleSubmit = (e) => {
		e.preventDefault();

		onSubmit({ name });
		setName("");
	};

	return (
		<div className="card shadow w-25">
			<div className="card-body">
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name" className="form-label">
							Author Name:
						</label>
						<input
							type="text"
							id="name"
							className="form-control"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						{error && <p className="text-danger">{error}</p>}
					</div>
					<div className="mt-3 d-flex justify-content-between">
						<NavButton title={"Cancel"} style={"danger"} />
						<button className="btn btn-success">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AuthorForm;
