import React from 'react';
import { MdInfoOutline } from 'react-icons/md';
import ReactTooltip from 'react-tooltip';

const formInput = ({ register, name, tooltip, ttText, ttLink }) => {
  return (
    <div>
      <label htmlFor={name} className="flex gap-1">
        {name.charAt(0).toUpperCase() + name.slice(1)}
        {/* For a tool tip, inludes a link and text */}
        {tooltip && (
          <a
            data-tip={ttText}
            href={ttLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdInfoOutline />
            <ReactTooltip place="top" type="info" effect="float" />
          </a>
        )}
      </label>
      <input
        id={name}
        {...register(`${name}`, { required: true })}
        className="h-10 px-5 py-2 w-full"
        placeholder={name}
      />
    </div>
  );
};

export default formInput;
