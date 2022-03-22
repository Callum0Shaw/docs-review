import React from 'react';
import { MdStarBorder, MdStarHalf, MdStar } from 'react-icons/md';

const Stars = ({ rating, reviews }) => {
  const convertRatingToStars = () => {
    let stars = [];
    const remainder = rating % 1;
    for (let i = 0; i < rating - remainder; i++)
      stars.push(<MdStar size={16} />);
    if (remainder < 0.75 && remainder > 0.25)
      stars.push(<MdStarHalf size={16} />);
    for (let i = 0; i < 5 - stars.length; i++)
      stars.push(<MdStarBorder size={16} />);
    return stars;
  };
  const starArray = convertRatingToStars();
  return (
    <div className="text-black flex gap-1">
      <div className="flex gap text-second">{starArray}</div>
      <p className="text-second text-[.8rem]">({reviews})</p>
    </div>
  );
};

export default Stars;
