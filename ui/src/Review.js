//import { useState } from 'react';
//import React from 'react';
import React, { useReducer, useState } from 'react';



const formReducer = (state, event) => {

    if(event.reset) {
        return {
          text: ''
        }
      }
    return {
      ...state,
      [event.name]: event.value
    }
   }

function Review() {
    const[input, setInput] = useState('');

    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        alert('Thanks for submitting your review!')
      }

      const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
      }
    

    return (
        <div>
            
                <form className="todo-form" onSubmit={handleSubmit}>
                    <textarea 
                    type='text' 
                    placeholder='Tell us your thoughts about the book.'
                    //value={input}
                    name='text'
                    onChange={handleChange}
                    />
                    <button type = "submit">Submit your review!</button>
                </form>
            
        </div>
    )
}

export default Review
