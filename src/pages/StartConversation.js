import { Conversation } from '@/components/Conversation';
import React from 'react';
import { useDebateContext } from './DebateContext';

const StartConversation = () => {
  const { step } = useDebateContext();

  return step === 2 ? (
    <>
      <section>
        <Conversation></Conversation>
      </section>
    </>
  ) : (
    <>
      <section>
        <Conversation></Conversation>
      </section>
    </>
  );
};

export default StartConversation;
