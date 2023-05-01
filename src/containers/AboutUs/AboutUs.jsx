import React from 'react';
import Feature from '../../components/feature/Feature';
import './AboutUs.css';

const AboutUs = () => (
  <div className="BnB__AboutBnB section__margin" id="wBnB">
    <div className="BnB__AboutBnB-feature">
      <Feature title="Who Are We?" text="At Brich and Bez AI, we are passionate about leveraging the latest advancements in artificial intelligence to transform the way businesses operate. Our team of experts brings together a wealth of experience in machine learning, data analytics, and software development to deliver cutting-edge solutions that drive results." />
    </div>
    <div className="BnB__AboutBnB-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="BnB__AboutBnB-container">
      <Feature title="Chatbots" text="With a commitment to innovation, quality, and customer satisfaction, we strive to empower organizations of all sizes to unlock the full potential of AI." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
);

export default AboutUs;
