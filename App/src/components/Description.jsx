import React from 'react';
import {
  MdThumbsUpDown,
  MdSavedSearch,
  MdComment,
  MdAddBox,
} from 'react-icons/md';

const descriptions = [
  {
    id: 1,
    title: 'Search',
    text: 'Search through our growing collection of documentations',
    icon: <MdSavedSearch size={28} />,
  },
  {
    id: 2,
    title: 'Vote',
    text: 'Rate how you think the current state of the docs are',
    icon: <MdThumbsUpDown size={28} />,
  },
  {
    id: 3,
    title: 'Comment',
    text: 'Write a helpful comment to the devs, constructive and helpful.',
    icon: <MdComment size={28} />,
  },
  {
    id: 4,
    title: 'Add',
    text: 'Cant find something fro the list, help us grow and add it!',
    icon: <MdAddBox className="" size={28} />,
  },
];

function Description() {
  return (
    <div className="bg-offWhite ">
      <section className="container con-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-4 lg py-10 gap-6">
          {descriptions.map((a) => (
            <div className="max-w-[24rem] grid gap-3" key={a.id}>
              <div className="text-second grid gap-2">
                {a.icon}
                <h3 className="text-sm font-semibold text-second">{a.title}</h3>
              </div>
              <p className="text-xs font-light text-black">{a.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Description;
