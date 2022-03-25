import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import CheckBox from './CheckBox';
import { storeDoc } from '../utils/firebase';
import { checkboxArray } from '../utils/keywords';

function AddDocForm() {
  const { register, handleSubmit } = useForm();

  async function submitForm(data) {
    // add new doc to firestore
    await storeDoc(data);
  }

  return (
    <div className="flex flex-wrap w-fit mx-auto rounded bg-white p-6 pb-10">
      <header className="flex justify-between flex-col bg-white rounded-t md:rounded-none md:rounded-l md:max-w-[360px]">
        <div>
          <h2 className="font-semibold text-xl text-accent">
            Add Documentation
          </h2>
          <p className="text-black">
            Cant find the documentation? Fill in this form with the details
          </p>
        </div>
        <img
          className="hidden md:block ml-[-2rem]"
          src="/images/review.svg"
          alt="reviewing"
        />
      </header>
      <form
        className="bg-white mx-auto grid gap-2 max-w-[480px] text-black"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <FormInput
            name="name"
            register={register}
            type="text"
            tooltip={false}
          />
          <FormInput
            name="logo"
            register={register}
            type="text"
            tooltip
            ttLink="https://worldvectorlogo.com/"
            ttText="Click here to find link to logos"
          />
        </div>
        <FormTextArea
          name="description"
          register={register}
          placeholder="Describe what the software does"
        />
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          {...register('rating')}
          type="range"
          min={0}
          max={500}
        />
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
        <button className="button w-fit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddDocForm;
