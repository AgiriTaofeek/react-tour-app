import React from 'react';
import Tour from './Tour';

function Tours({ tours, onRemove }) {
  const tour = tours.map((tour) => {
    return <Tour key={tour.id} {...tour} onRemove={onRemove} />;
  });
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>{tour}</div>
    </section>
  );
}

export default Tours;
