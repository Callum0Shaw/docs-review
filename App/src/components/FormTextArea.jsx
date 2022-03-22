import React from 'react';

const FormTextArea = ({ name, register, validation, placeholder }) => {
  return (
    <>
      <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      <textarea
        id={name}
        {...register(name, validation)}
        className="h-10 px-5 py-2 w-full"
        placeholder={placeholder}
        type="textArea"
      />
    </>
  );
};

export default FormTextArea;
