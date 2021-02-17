import './App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

function Gloves() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchItems = async () => {
        const data = await fetch('https://bad-api-assignment.reaktor.com/v2/products/gloves');
        const items = await data.json();
        setLoading(false);
        console.log(items);
        setItems(items);
    };

    return (
        <div>
            <h1>Gloves</h1>
            {loading ? <ClipLoader color={"#5f9ea0"} loading={loading} size={50} /> :
                <div>
                    {items.map(item => (
                        <h3 key={item.id}>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/details/${item.manufacturer}`}>
                                Manufacturer: {item.manufacturer} | Name: {item.name} | price: {item.price} | color: {item.color}
                            </Link>
                        </h3>
                    ))}
                </div>
            }
        </div>
    );
}

export default Gloves;
