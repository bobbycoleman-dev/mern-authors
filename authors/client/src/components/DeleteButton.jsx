const DeleteButton = (props) => {
	const { handleDelete } = props;

	return (
		<div>
			<button className="btn btn-danger" onClick={handleDelete}>
				<i className="bi-trash"></i>
			</button>
		</div>
	);
};

export default DeleteButton;
