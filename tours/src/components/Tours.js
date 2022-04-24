import React from 'react';
import Tour from './Tour';

const Tours = ({id, name, info, image, price, deleteTour}) => {
    return (
        <section>
            <div className='title'>
                <h2>ours tours</h2>
                <div className='underline'></div>
            </div>
            <div>
                <Tour id={id} name={name} info={info} image={image} price={price} deleteTour={deleteTour} />
            </div>
        </section>
    )
};

export default Tours;
