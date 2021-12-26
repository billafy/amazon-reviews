import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import AmazonReviewViewer from "./components/AmazonReviewViewer";

ReactDOM.render(
	<React.StrictMode>
		<AmazonReviewViewer />
	</React.StrictMode>,
	document.getElementById("root")
);
