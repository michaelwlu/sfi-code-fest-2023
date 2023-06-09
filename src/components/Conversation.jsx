import React, { useState, useLayoutEffect } from 'react';
import { useChatGPTMutation } from '@/api/mutations/useChatGPTMutation';
import { useDebateContext } from './DebateContext';

export const Conversation = () => {
  const debateContext = useDebateContext();
  const { mutateAsync, isLoading } = useChatGPTMutation();

  //determines who's turn it is
  const [turn, setTurn] = useState(debateContext.personTwo.name);
  const { debateStarted, setDebateStarted } = debateContext;
  //stores all messages
  const [chatLog, setChatLog] = useState([]);
  //stores last response to be used as prompt. inits as topic
  const [lastMessage, setLastMessage] = useState(debateContext.topic);

  const leftbubble = {
    position: 'fixed',
    top: '20px',
    left: '20px',
    backgroundColor: '#fff',
    color: '#000',
    padding: '10px',
    borderRadius: '10px',
    zIndex: 9999,
    width: '40%',
  };

  const rightbubble = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#fff',
    color: '#000',
    padding: '10px',
    borderRadius: '10px',
    zIndex: 9999,
    width: '40%',
  };

  const topicbubble = {
    position: 'fixed',
    bottom: '150px',
    right: '30%',
    backgroundColor: '#fff',
    color: '#000',
    padding: '10px',
    borderRadius: '10px',
    zIndex: 9999,
    width: '40%',
  };

  const quoteTextStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '75px',
    right: '45%',
    backgroundColor: '#d9d9d9',
    width: '196px',
    height: '66px',
    fontSize: '36px',
    font: 'Roboto Mono',
  };

  //determines who's turn it is. turn starts as person 1
  const handleTurn = async () => {
    turn === debateContext.personOne.name
      ? setTurn(debateContext.personTwo.name)
      : setTurn(debateContext.personOne.name);
  };

  const handleClick = async () => {
    handleTurn();
    const response = await mutateAsync({
      prompt: lastMessage,
      personality: turn,
    });
    console.log('response: ', response.data.choices[0].message.content);
    //set last response as new prompt
    setLastMessage(response.data.choices[0].message.content);
    //add response to chat log
    let newChatEntry = {
      person: turn,
      message: response.data.choices[0].message.content,
    };
    setChatLog([...chatLog, newChatEntry]);
    console.log(chatLog);
    //change turns
    // handleTurn();
    setDebateStarted(true);
  };


  const elementsArray = chatLog.map((element, index) => {
    return (
      <>
        <p key={index}>{element.person}</p>
        <p key={index}>{element.message}</p>
      </>
    );
  });

  return (
    <>
      {debateStarted === true ? (
        <div
          style={
            turn === debateContext.personOne.name ? rightbubble : leftbubble
          }
        >
          <div variant="body1" style={quoteTextStyle}>
            {isLoading ? 'Thinking...' : lastMessage}
          </div>
        </div>
      ) : null}

      <div style={topicbubble}>
        <div variant="body1" style={quoteTextStyle}>
          {debateContext.topic}
        </div>
      </div>

      {!isLoading && (
        <button style={buttonStyle} onClick={handleClick}>
          {debateStarted===true? 'Next!':'Start!'}
        </button>
      )}
    </>
  );
};
