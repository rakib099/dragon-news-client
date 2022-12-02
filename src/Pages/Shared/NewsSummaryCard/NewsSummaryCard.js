import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
    const {_id, title, author, details, image_url, rating, total_view} = news;
    const {name, img, published_date} = author;

    return (
        <Card className=" mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image 
                    className='me-2'
                    src={img} 
                    style={{height: "60px"}}
                    roundedCircle 
                    />
                    <div>
                        <p className='mb-0'>{name ? name : "N/A"}</p>
                        <p className='mb-0'>{published_date ? published_date : "Not Found"}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2' />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                        <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read more</Link></>
                        :
                        <>{details}</>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <FaStar className='text-warning me-2' />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2' />
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;