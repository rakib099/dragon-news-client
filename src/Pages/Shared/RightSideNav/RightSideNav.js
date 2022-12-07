import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import toast from 'react-hot-toast';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            if (user.emailVerified) {
                navigate(from, { replace: true });
            }
            else {
                toast.error("Your email is not verified. Please verify email first.");
            }
        })
        .catch(error => console.error(error));
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle /> Login with Google</Button>
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