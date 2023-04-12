import React from 'react';
import { useDebateContext } from '../pages/DebateContext';
import { personalities } from './lists';

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
              class={`personBox ${personOne === person ? 'borderBlue' : ''} ${
                personTwo === person ? 'borderRed' : ''
              }`}
            >
              {person.name}
            </div>
          );
        })}
      </div>
    </>
  );
};
