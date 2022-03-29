import React from 'react';
import { MdStarBorder, MdStarHalf, MdStar } from 'react-icons/md';

function Stars({ rating, reviews, size = 16, showReview = true }) {
  const convertRatingToStars = () => {
    const stars = [];
    const remainder = rating % 1;
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) stars.push(<MdStar size={size} />);
      else if (
        i === Math.floor(rating) &&
        remainder < 0.75 &&
        remainder > 0.25
      ) {
        stars.push(<MdStarHalf size={size} />);
      } else stars.push(<MdStarBorder size={size} />);
    }
    return stars;
  };
  const starArray = convertRatingToStars();
  return (
    <div className="text-black flex gap-1 h-fit">
      <div className="flex gap text-second">
        {starArray.map((a, i) => (
          <div key={i}>{a}</div>
        ))}
      </div>
      {showReview && <p className="text-second text-[.8rem]">({reviews})</p>}
    </div>
  );
}

export default Stars;
