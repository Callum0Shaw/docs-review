import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { storeReview } from '../utils/firebase';
import FormTextArea from './FormTextArea';
import CheckBox from './CheckBox';
import { checkboxArray } from '../utils/keywords';
import { useClickOutside } from '../utils/hooks';

const AddReviewForm = ({ docID, setShowForm }) => {
  const { register, handleSubmit } = useForm();

  async function submitForm(data) {
    await storeReview(data.review, docID);
  }

  let domNode = useClickOutside(() => setShowForm({ state: false }));
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-grey bg-opacity-50 z-10">
      <div
        ref={domNode}
        className="w-fit absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-white text-black p-6"
      >
        <header>Add a new review</header>
        <form onSubmit={handleSubmit(submitForm)}>
          <FormTextArea
            name="review"
            register={register}
            placeholder={'Leave a review'}
          />
          <fieldset>
            <legend>How would you describe the documentation</legend>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 justify-center text-center mx-auto">
              {checkboxArray.map((text) => (
                <CheckBox register={register} text={text} key={text} />
              ))}
            </div>
          </fieldset>
          <button className="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddReviewForm;
