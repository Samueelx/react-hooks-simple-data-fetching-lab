// create your App component here
import React, { useEffect, useState } from "react";

const DOG_API = "https://dog.ceo/api/breeds/image/random";

function App() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch(DOG_API).then(response => response.json())
        .then(data => {
            setImage(() => data.message);
        });
    }, []);

    if(!image) return <p>Loading...</p>;

    return (
        <img src={image} alt="A Random Dog"/>
    );
}

export default App;
