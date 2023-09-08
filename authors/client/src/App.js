import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./views/Main";
import { useEffect } from "react";
import Create from "./views/Create";
import Update from "./views/Update";

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/authors");
	}, []);

	return (
		<div className="container py-3">
			<h1>Favorite Authors</h1>
			<Routes>
				<Route path="/" />
				<Route path="/authors" element={<Main />} />
				<Route path="/authors/new" element={<Create />} />
				<Route path="/authors/:id/edit" element={<Update />} />
			</Routes>
		</div>
	);
}

export default App;
