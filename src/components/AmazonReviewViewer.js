import { useState } from "react";
import "../styles/main.scss";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { apiUrl, defaultReview } from "../utils/constants";
import Review from "./Review";

const AmazonReviewViewer = () => {
	const [review, setReview] = useState(defaultReview);
	const [url, setUrl] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const searchReview = async (event) => {
		event.preventDefault();
		if (url) {
			setError("");
			setLoading(true);
			try {
				const response = await axios.get(apiUrl, {
					params: { url: encodeURIComponent(url) },
				});
				console.log(response);
				if (response.data.success) setReview(response.data.review);
				else {
					setReview(defaultReview);
					setError("Invalid URL! Unable to find a review.");
				}
			} catch (error) {}
			setLoading(false);
		}
	};

	return (
		<div className="arv-container">
			<header className="arv-header">
				<h1>Amazon Reviews Viewer</h1>
			</header>
			<main className="arv-main">
				<form className="search-bar">
					<input
						type="text"
						placeholder="Enter Amazon Review URL here"
						value={url}
						onChange={({ target: { value } }) => setUrl(value)}
					/>
					<button onClick={searchReview}>
						<FaSearch />
					</button>
				</form>
				{loading ? (
					<div className="loading"></div>
				) : error ? (
					<p className="error">{error}</p>
				) : (
					review.default || <Review {...{ review }} />
				)}
			</main>
		</div>
	);
};

export default AmazonReviewViewer;