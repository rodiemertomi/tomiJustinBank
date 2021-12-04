import { useState, useEffect } from 'react'

const Activities2 = () => {

    const [joke, setJoke] = useState({})
    const [count, setCount] = useState(0)

    const start = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random`)
        .then(response => response.json())
        .then(data => setJoke(data))
    }, [count])

    return (
        <div>
            <h2>Number {count} joke</h2>
            <p>{joke.value}</p>
            <button onClick={start}>Click me</button>
        </div>
    )
}

export default Activities2
