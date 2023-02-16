import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Contanier, Row, Col } from 'react-bootstrap';

const LeftSidebar = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch(`https://news-server-sigma.vercel.app/api/news-categories`)
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);
    return (
        <div className='left_side_bar'>
            <ul>
                {
                    category.map((c) => (
                        <li><Link to={`/category/${c.id}`}>{c.name}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default LeftSidebar
