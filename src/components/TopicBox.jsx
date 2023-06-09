import React from 'react';
import { useDebateContext } from './DebateContext';

export const TopicBox = () => {
  const { topic, setTopic } = useDebateContext();

  const typeTopic = (t) => {
    setTopic(t);
  };

  return (
    <>
      <textarea
        value={topic}
        onChange={(e) => typeTopic(e.target.value)}
        placeholder="...or make your own"
        className="topicInput"
        rows="3"
      ></textarea>
    </>
  );
};
