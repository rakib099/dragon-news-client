import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const News = () => {
    const news = useLoaderData();
    const {title, author, details, image_url, rating, category_id} = news;
    useTitle("News");

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">All News in this Category</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;