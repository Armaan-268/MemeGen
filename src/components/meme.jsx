import { useState,useEffect } from 'react'


export default function Meme() {
    // State hook to store the meme object containing topText, bottomText, and randomImage URL
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    // State hook to store an object containing all available memes fetched from the API
    const [allMemes, setAllMemes] = useState({})
    
    // useEffect hook runs once when the component is mounted
    useEffect(() => {
        // Fetch memes data from the API using the Imgflip API
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json()) // Parse the response as JSON
            .then(data => setAllMemes(data.data.memes)) // Store the memes in the state
    }, []);
    
    // console.log(allMemes[0])
    // Function to get a random meme image from the available memes
    function getMemeImage() {
        const memeArray = allMemes
        const rn = Math.floor(Math.random()*memeArray.length);
        const url = memeArray[rn].url
        // Update the meme state with the new randomImage URL while preserving other properties
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    // Function to handle changes in the input fields
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevFormData => ({
            ...prevFormData,
            [name]:  value
        }))
        // console.log(value)
    }
    //The component's JSX template to render the UI
    return (
        <main className='memeBody'>
            <div className='form'>
                <input 
                    type="text" 
                    placeholder='Top Text' 
                    className='form-in'
                    name = 'topText'
                    onChange = {handleChange}
                    value = {meme.topText}
                />
                <input 
                    type="text" 
                    placeholder='Bottom Text' 
                    className='form-in'
                    name = 'bottomText'
                    onChange = {handleChange}
                    value = {meme.bottomText}
                />
                <button 
                className='form-btn'
                onClick={getMemeImage}
                >Get a new Image</button>
            <div className="meme">
                <img src={meme.randomImage} className='memeImg' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>    
            </div>
        </main>
    )
  }
  
 