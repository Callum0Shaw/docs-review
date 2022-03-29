import React from 'react';

function CenteredSection({ classes, children }) {
  return (
    <section className={`${classes}`}>
      <div className="container pt-16 pb-32 grid grid-cols-1 gap-8">
        {children}
      </div>
    </section>
  );
}

export default CenteredSection;
