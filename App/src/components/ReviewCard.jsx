import React from 'react';
import Stars from './Stars';
import VoteButton from './VoteButton';
import { Link } from 'react-router-dom';

const ReviewCard = ({ doc, logo, setShowForm }) => {
  return (
    <div className="relative bg-white rounded-md hover:shadow-md hover:shadow-black hover:scale-105 px-3 py-4 md:px-4">
      <div className="flex gap-4">
        <img src={logo} alt="photo of react js" className="h-20 w-20" />
        <div className="grid gap-1 text-black w-full">
          <div className="grid w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-md font-medium">{doc.name}</h2>
              <div className="text-black flex gap-1">
                <Link to={`/docs/${doc.name}`}>
                  <Stars
                    rating={doc.rating ? doc.rating : 0}
                    reviews={doc.reviews ? doc.reviews.length : 0}
                  />
                </Link>
              </div>
            </div>
            <p className="keyword">{doc.keywords[0]}</p>
          </div>
          <p className="font-extralight w-3/4">
            {doc.description ? doc.description : 'blank'}
          </p>
        </div>
      </div>
      <div className="absolute right-4 bottom-4 ">
        <VoteButton size={30} setShowForm={setShowForm} docID={doc.id} />
      </div>
    </div>
  );
};

export default ReviewCard;
