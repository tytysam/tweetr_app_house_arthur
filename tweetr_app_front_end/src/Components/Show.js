// To be created
import { useState, useEffect, useRef } from 'react';
import React from 'react'

const Show = ({getTweets}) => {
    
    // Use this input for each of the show tweets that can then be edited
    // Assumes we only allow the content to be edited
    const [inputValue, setInputValue] = useState("")

    // UPDATE
    const handleNoteUpdate = async (evt, id) => {
        evt.preventDefault();
        try {
            let inputNoteValue = {
                note: inputValue
            };
            let body = JSON.stringify(inputNoteValue);
            const response = await fetch (`$http://localhost:3000/tweets/${id}`, {
              method: 'PUT',
              headers: {
                'Content-type': 'application/json'
              },
              body: body
            })
            const data = await response.json();
            getTweets();
          } catch (error) {
            console.error(error);
          }
    }
    
    return (
        <>
            <h3>Show each individual tweet</h3>
        </>
    )
}

export default Show