import './App.css';
import { useState, useEffect } from 'react';

function Details({ match }) {
    useEffect(() => {
        fetchItem();
    },[]);

    const [item, setItem] = useState(0);

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://bad-api-assignment.reaktor.com/v2/availability/${match.params.id}`);
        if (fetchItem.ok){
            const details = await fetchItem.json();
            console.log(details);

            if (details.response[0].hasOwnProperty("DATAPAYLOAD"))
            {
                let amount = details.response.length;
                setItem(amount);
            }
            else setItem('0');
        }
        else {
            alert("Error HTTP:" + fetchItem.status);
        }
    }

    return (
        <div>
            <h1>Details: {match.params.id}</h1>
            <h3 className={"itemList"}>In stock: {item ? item : 'LOADING...'}</h3>
        </div>
    );
}

export default Details;
