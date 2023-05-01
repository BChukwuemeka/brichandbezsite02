import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Empowering Businesses with AI Technology',
    text: 'Our mission is to empower businesses with AI technology to help them drive growth, enhance efficiency, and achieve their goals.',
  },
  {
    title: ' Delivering Intelligent Solutions for Real-World Challenges',
    text: 'At Brich and Bez, we are committed to delivering intelligent solutions that address real-world challenges, from automating routine tasks to improving decision-making processes.',
  },
  {
    title: 'Advancing the Field of AI through Research and Development',
    text: 'We believe in advancing the field of AI through continuous research and development, pushing the boundaries of what is possible and helping our clients stay at the forefront of innovation.',
  },
  {
    title: 'Fostering a Culture of Collaboration and Innovation',
    text: 'Our team is built on a culture of collaboration and innovation, where everyone is encouraged to bring their unique perspectives and skills to the table, driving success for our clients and the broader AI community.',
  },
];

const Features = () => (
  <div className="BnB__features section__padding" id="features">
    <div className="BnB__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="BnB__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
