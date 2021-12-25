import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Markup } from "interweave";
import "./review.scss";

const Review = ({ review }) => {
	return (
		<div className="review">
			<div className="customer-info">
				<div>
					<img src={review.profilePicture} />
				</div>
				<p>{review.customerName}</p>
			</div>
			<div className="review-info">
				<h3 className="title">{review.title}</h3>
				<div className="rating">
					{Array(5)
						.fill(true)
						.map((_, i) => {
							if (i < review.rating)
								return <AiFillStar key={i} />;
							return <AiOutlineStar key={i} />;
						})}
				</div>
				<p className="product-info">
					{review.productName}{" "}
					<span>
						{review.verifiedPurchase
							? "Verified Purchase"
							: "Unverified Purchase"}
					</span>
				</p>
				<p className="body">
					<Markup content={review.body} />
				</p>
			</div>
		</div>
	);
};

export default Review;
