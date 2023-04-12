import React from 'react';
import { useDebateContext } from '../pages/DebateContext';
import { personalities } from './lists';
import { SpriteFooter } from './SpriteFooter';

export const Personalities = (props) => {
  const { onClick } = props;
  const { personOne, personTwo } = useDebateContext();

  return (
    <>
      <div class="personsContainer">
        {personalities.map((person) => {
          return (
            <div
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
      <SpriteFooter></SpriteFooter>
    </>
  );
};
