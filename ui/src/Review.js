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
                    rows="5" 
                    cols="50" 
                    type='text' 
                    placeholder='Tell us your thoughts about the book.'
                    //value={input}
                    name='reviewtext'
                    onChange={handleChange}
                    />
                    <br></br>
                    <br></br>
                    <p>On a scale of 1-5, how woudl you rate this book?</p>
                    <select
                    required
                    name = "star_rating" 
                    onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <br></br>

                    <p>Would you recommend this book to a friend?</p>
                    <select
                    required
                    name = "recommendation" 
                    onChange={handleChange}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br></br>
                    <br></br>
                    <button type = "submit">Submit your review!</button>
                </form>
            
        </div>
    )
}

export default Review
