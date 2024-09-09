import React from 'react';
import ChatBot from 'react-simple-chatbot';
import './chatbot.css'; // Make sure this is the correct path to your CSS file

function App() {
  const steps = [
    {
      id: '1',
      message: 'Welcome to chatbot!',
      trigger: '2',
    },
    {
      id: '2',
      message: 'Check out the documentation!',
      trigger: '3',
    },
    {
      id: '3',
      message: 'Got it!',
      end: true,
    }
  ];

  return (
    <div className="app-container">
      <div className="text-content">
          <h1>Gary Z. Gao</h1>
          <p className="details">Penn freshman|software dev|AI researcher</p>
          <p className="contact-info">
              Email: <a href="mailto:garygao@sas.upenn.edu">garygao@sas.upenn.edu</a><br/>
              Github: <a href="https://github.com/garygao333">https://github.com/garygao333</a><br/>
              LinkedIn: <a href="https://linkedin.com/in/garygao">https://linkedin.com/in/garygao</a>
          </p>
          <p className="about">To learn more about me, feel free to ask the chatbot - it knows everything about me!</p>
      </div>
      <ChatBot steps={steps} className="chatbot"/>
    </div>
  );
}

export default App;
