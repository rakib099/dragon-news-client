import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub /> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroupItem className='mb-2'><FaFacebook /> Facebook</ListGroupItem>
                    <ListGroupItem className='mb-2'><FaWhatsapp /> WhatsApp</ListGroupItem>
                    <ListGroupItem className='mb-2'><FaTwitter /> Twitter</ListGroupItem>
                    <ListGroupItem className='mb-2'><FaTwitch /> Twitch</ListGroupItem>
                    <ListGroupItem className='mb-2'></ListGroupItem>
                </ListGroup>
            </div>

            <div>
                <BrandCarousel />
            </div>
        </div>
    );
};

export default RightSideNav;