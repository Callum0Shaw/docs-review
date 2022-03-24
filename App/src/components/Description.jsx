import React from 'react';
import { MdThumbsUpDown } from 'react-icons/md';

const Description = () => {
  return (
    <div className="bg-offWhite ">
      <section className="container con-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-4 lg py-10 gap-6">
          {[...Array(4)].map((a, i) => {
            return (
              <div className="max-w-[24rem] grid gap-3" key={i}>
                <div className="text-second grid gap-2">
                  <MdThumbsUpDown size={28} />
                  <h3 className="text-sm font-semibold text-second">
                    Rate this now
                  </h3>
                </div>
                <p className="text-xs font-light text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  earum est quis eveniet ullam nulla.
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Description;
