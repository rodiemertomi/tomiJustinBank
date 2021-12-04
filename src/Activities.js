import { useState, useEffect  } from 'react'

const Activities = props => {

    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(1)

    const add = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(function() {
        console.log("Effect ran")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json()) 
            .then(data => setStarWarsData(data))
    }, [count])
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={add}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )

}

export default Activities
