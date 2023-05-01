import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatBnB.css';

const WhatBnB = () => (
  <div className="BnB__whatBnB section__margin" id="wBnB">
    <div className="BnB__whatBnB-feature">
      <Feature title="Who Are We?" text="At Brich and Bez AI, we are passionate about leveraging the latest advancements in artificial intelligence to transform the way businesses operate. Our team of experts brings together a wealth of experience in machine learning, data analytics, and software development to deliver cutting-edge solutions that drive results." />
    </div>
    <div className="BnB__whatBnB-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="BnB__whatBnB-container">
      <Feature title="Chatbots" text="Our AI chatbot is intelligent, responsive, and always available to provide instant support to your customers. It offers personalized and efficient customer service with its advanced natural language processing capabilities." />
      <Feature title="Knowledgebase" text="With a commitment to innovation, quality, and customer satisfaction, we strive to empower organizations of all sizes to unlock the full potential of AI." />
      <Feature title="Education" text="At Brich and Bez AI, we are passionate about leveraging the latest advancements in artificial intelligence to transform the way businesses operate. " />
    </div>
  </div>
);

export default WhatBnB;
