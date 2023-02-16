import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const NewsCard = ({ news }) => {
    const { _id, title, author, details, image_url, rating, total_view } = news;


    return (
        <div className='news_card'>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title} </Card.Title>
                    <Card.Text>
                        {details.slice(0, 250)}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>


        </div>
    )
}



export default NewsCard;



