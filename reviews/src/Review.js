import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, text, image} = people[index];

    const increaseIndex = () => {
        const newIndex = index + 1;
        if(newIndex < people.length) {
            setIndex(newIndex);
        } else if (newIndex === people.length) {
            setIndex(0);
        }
    }
    const decreaseIndex = () => {
        const newIndex = index - 1;
        if(newIndex >= 0) {
            setIndex(newIndex);
        } else if (newIndex === -1) {
            setIndex(people.length - 1);
        }
    }
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
                <button className='prev-btn' onClick={decreaseIndex}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={increaseIndex}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn'>surprise me</button>
        </article>
    )
};

export default Review;
