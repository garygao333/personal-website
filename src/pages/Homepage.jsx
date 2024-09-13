import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import '../chatbot.css';

class Answer extends React.Component {
  state = {
    loading: true,
    answer: ''
  };

  componentDidMount() {
    this.fetchAnswer(this.props.steps['ask-question'].value);
  }

  fetchAnswer = async (question) => {
    try {
      // const response = await axios.post('http://localhost:3000/api/openai', { question });
      const response = await axios.post('hhttps://garyzgao.com/api/openai', { question });
      console.log("owdijqwoidjweoifowoeijd", question)
      this.setState({ answer: response.data.answer, loading: false });
    } catch (error) {
      console.error(error.response.data);
      this.setState({ answer: 'Error fetching response. Please try again.', loading: false });
    }
  };

  render() {
    if (this.state.loading) return 'Fetching answer...';
    return this.state.answer;
  }
}

function Homepage() {
  const steps = [
    {
      id: '1',
      message: 'Hello! Ask me anything about myself.',
      trigger: 'ask-question',
    },
    {
      id: 'ask-question',
      user: true,
      trigger: 'get-answer',
    },
    {
      id: 'get-answer',
      component: <Answer />,
      waitAction: true,
      replace: true,
      trigger: 'ask-question'
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
          <p className="about">
            To learn more about me, feel free to ask the chatbot - it knows everything about me! 
          </p>
          <p className="about">
            If you prefer traditional, you can visit my <Link to="/about">About</Link> page.
        </p>
      </div>
      <ChatBot steps={steps} headerTitle="Gary Gao's Chatbot" className="chatbot"/>
    </div>
  );
}

export default Homepage;
