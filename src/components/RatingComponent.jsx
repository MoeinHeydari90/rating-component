import React, { useState } from "react";
import styles from "./RatingComponent.module.css";
import starIcon from "../images/icon-star.svg";
import thankYouIcon from "../images/illustration-thank-you.svg";

const RatingComponent = () => {
    const [rating, setRating] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleRating = (rate) => {
        setRating(rate);
    };

    const handleSubmit = () => {
        if (rating) {
            setSubmitted(true);
        }
    };

    return (
        <div className={styles.ratingContainer}>
            {!submitted ? (
                <div className={styles.ratingCard}>
                    {/* Star Icon */}
                    <div className={styles.starIcon}>
                        <img src={starIcon} alt="Star Icon" />
                    </div>
                    <h1>How did we do?</h1>
                    <p>
                        Please let us know how we did with your support request. All feedback is
                        appreciated to help us improve our offering!
                    </p>
                    <div className={styles.ratingButtons}>
                        {[1, 2, 3, 4, 5].map((rate) => (
                            <button
                                key={rate}
                                className={`${styles.ratingButton} ${rating === rate ? styles.active : ""}`}
                                onClick={() => handleRating(rate)}
                            >
                                {rate}
                            </button>
                        ))}
                    </div>
                    <button className={styles.submitButton} onClick={handleSubmit}>
                        SUBMIT
                    </button>
                </div>
            ) : (
                <div className={styles.thankYouCard}>
                    <div className={styles.thankYouIcon}>
                        <img src={thankYouIcon} alt="Thank You Icon" />
                    </div>
                    <p className={styles.ratingNumber}>You selected {rating} out of 5</p>
                    <h1>Thank you!</h1>
                    <p>
                        We appreciate you taking the time to give a rating. If you ever need more
                        support, don’t hesitate to get in touch!
                    </p>
                </div>
            )}
        </div>
    );
};

export default RatingComponent;
