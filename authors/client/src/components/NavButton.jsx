import { Link } from "react-router-dom";

const NavButton = ({ link, title, style }) => {
	return (
		<div>
			<Link
				to={link ? `/authors/${link}` : `/authors`}
				className={`btn btn-${style ? style : "primary"} text-decoration-none`}>
				{title}
			</Link>
		</div>
	);
};

export default NavButton;
