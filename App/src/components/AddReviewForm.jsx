import React from 'react';
import { useForm } from 'react-hook-form';
import { storeReview } from '../utils/firebase';
import FormTextArea from './FormTextArea';
import CheckBox from './CheckBox';
import { checkboxArray } from '../utils/keywords';

function AddReviewForm({ docID, setToggleForm, reviews, setReviews }) {
  const { register, handleSubmit } = useForm();

  async function submitForm(data) {
    try {
      const submittedReview = await storeReview(data.review, docID);
      console.log(submittedReview);
      setReviews(reviews.concat(submittedReview));
      setToggleForm(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-fit bg-white text-black p-6">
      <header>Add a new review</header>
      <form onSubmit={handleSubmit(submitForm)}>
        <FormTextArea
          name="review"
          register={register}
          placeholder="Leave a review"
        />
        <fieldset>
          <legend>How would you describe the documentation</legend>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 justify-center text-center mx-auto">
            {checkboxArray.map((text) => (
              <CheckBox register={register} text={text} key={text} />
            ))}
          </div>
        </fieldset>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddReviewForm;
