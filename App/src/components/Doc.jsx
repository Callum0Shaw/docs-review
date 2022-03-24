import React, { useState } from 'react';
import AddReviewForm from './AddReviewForm';
import Stars from './Stars';

const Doc = ({ doc, reviews }) => {
  const [toggleForm, setToggleForm] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setToggleForm(true);
  }

  return (
    <section className="background">
      <div className="container con-padding md:pb-32">
        <article className="text-black grid gap-12 mt-24 mb-32 rounded-md shadow shadow-grey p-6 bg-white">
          <header className="grid md:grid-cols-2 gap-3">
            <img
              className="h-4/6 self-center place-self-center"
              src="/logos/tailwind-logo.svg"
              alt={`Logo of ${'name'}`}
            />

            <div className="flex flex-col justify-start gap-2">
              <div className="flex flex-row justify-start gap-6">
                <h2 className="font-semibod text-2xl text-third">
                  {doc.description}
                </h2>
                <Stars className="" rating={5} />
              </div>
              <ul className="flex flex-row gap-3">
                {doc &&
                  doc.keywords.map((keyword, i) => (
                    <li key={i}>
                      <p className="keyword">{keyword}</p>
                    </li>
                  ))}
              </ul>
              <p className="pt-6">{doc.description}</p>
            </div>
          </header>
          {!toggleForm && (
            <button className="button" onClick={handleClick}>
              Write a review
            </button>
          )}
          {toggleForm && <AddReviewForm docID={doc.docID} setToggleForm={setToggleForm}/>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {reviews.map((review, i) => (
              <div className="grid gap-2 px-6" key={i}>
                <p>{review.review}</p>
                <p className="self-end place-self-end">{review.dateAdded.toDate().toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Doc;
