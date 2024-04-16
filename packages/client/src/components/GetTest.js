import React from "react"

function GetTest() {

    function handleClick(e){
        e.preventDefault()
        console.log("wussup")

        fetch('http://localhost:5555/reminders')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    return (
        <button onClick={handleClick} className='bg-red-400 text-white px-10 py-2 font-bold rounded' type='button'>GET test</button>
    )
}

export default GetTest