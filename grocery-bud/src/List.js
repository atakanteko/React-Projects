import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({list, removeItem, editItem}) => {
    return (
        <div className='grocery-list'>
            {list.map((item) => {
                const { id, name } = item;
                return (
                    <article className='grocery-item' key={id}>
                        <p className='title'>{name}</p>
                        <div className='btn-container'>
                            <button
                                type='button'
                                className='edit-btn'
                                onClick={() => editItem(id)}
                            >
                                <FaEdit />
                            </button>
                            <button
                                type='button'
                                className='delete-btn'
                                onClick={() => removeItem(id)}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

export default List
