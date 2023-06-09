import React from 'react';
import { personalities } from './lists';
import { SpriteFooter } from './SpriteFooter';
import { useDebateContext } from './DebateContext';

export const Personalities = (props) => {
  const { onClick } = props;
  const { personOne, personTwo } = useDebateContext();

  return (
    <>
      <div className="personsContainer">
        {personalities.map((person) => {
          return (
            <div
              key={person.id}
              onClick={() => onClick(person)}
              className={`personBox ${
                personOne === person ? 'borderBlue' : ''
              } ${personTwo === person ? 'borderRed' : ''}`}
              style={{
                background: `url(/portraits/${person.portrait}) no-repeat center center`,
                backgroundSize: 'contain',
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
};
