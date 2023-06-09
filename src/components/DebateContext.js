import React, { createContext, useContext, useState } from 'react';

const DebateContext = createContext(null);

export const useDebateContext = () => useContext(DebateContext);

export const DebateProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [personOne, setPersonOne] = useState(null);
  const [personTwo, setPersonTwo] = useState(null);
  const [topic, setTopic] = useState('');
  const [conversation, setConversation] = useState([]);
  const [debateStarted, setDebateStarted] = useState(false);

  return (
    <DebateContext.Provider
      value={{
        step,
        setStep,
        personOne,
        personTwo,
        topic,
        conversation,
        setPersonOne,
        setPersonTwo,
        setTopic,
        setConversation,
        debateStarted,
        setDebateStarted,
      }}
    >
      {children}
    </DebateContext.Provider>
  );
};

export default DebateContext;
