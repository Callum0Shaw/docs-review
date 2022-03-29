import React, { useState } from 'react';

function CheckBox({ register, text }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-full mx-auto">
      <input
        className="hidden"
        type="checkbox"
        {...register(`keywords.${text}`)}
        id={text}
      />
      <label
        onClick={() => setChecked(!checked)}
        className={`${
          checked && 'bg-lightaccent text-white'
        } text-sm inline-block w-full text-center py-2 border-[1px] border-grey hover:border-lightaccent rounded-sm transition-colors duration-400 ease-in-out`}
        htmlFor={`${text}`}
      >
        {text}
      </label>
    </div>
  );
}

export default CheckBox;
