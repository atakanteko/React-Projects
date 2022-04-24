import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, text, image} = people[index];
    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img'/>
                <span className='quote-icon'>
                    <FaChevronRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn'>
                    <FaChevronLeft />
                </button>
                <button className='next-btn'>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn'>surprise me</button>
        </article>
    )
};

export default Review;
