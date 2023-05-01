import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css';

const Blog = () => (
  <div className="BnB__blog section__padding" id="blog">
    <div className="BnB__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="BnB__blog-container">
      <div className="BnB__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2022" text="Brich & Bez AI is the future. Let us exlpore how it is?" />
      </div>
      <div className="BnB__blog-container_groupB">
        <Article imgUrl={blog02} date="Jan 26, 2023" text="Revolutionizing Retail: The Power of AI for E-commerce Businesses" />
        <Article imgUrl={blog03} date="Jan 31, 2023" text="Streamlining Stock Control: How AI is Transforming digital company's Inventory Management"/>
        <Article imgUrl={blog04} date="March 14, 2023" text="Unleashing the Potential: The Possibilities of AI for the power generation companies. "/>
        <Article imgUrl={blog05} date="April 21, 2023" text="Creating a Personalized Shopping Experience with brich and bez AI." />
      </div>
    </div>
  </div>
);

export default Blog;
