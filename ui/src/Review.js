import { useState } from 'react';
import React from 'react';


// function useReview() {
//     const [input, setInput] = useState('');
//     return {input};
//   }

function Review() {
    const[input, setInput] = useState('');
    

    return (
        <div>
            
                <form className="todo-form">
                    <textarea 
                    type='text' 
                    placeholder='Tell us your thoughts about the book.'
                    value={input}
                    name='text'
                    />
                    <button>Submit your review!</button>
                </form>
            
        </div>
    )
}

export default Review
