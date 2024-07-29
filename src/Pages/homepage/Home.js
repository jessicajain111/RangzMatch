// import rangzphotoshoot
import React from 'react';
import './Home.css'
import Header from '../../Components/Header';
import Footer from './Footer';
import rangilalogo from '../../img/rangilalogo.png'
import rangz1 from '../../img/rangzphotoshoot.jpg'
import rangz2 from "../../img/rangzphoto2.jpeg"
import rangz3 from "../../img/rangzphoto3.jpeg"
import rangz4 from "../../img/rangzphoto4.jpeg"
import { Link } from 'react-router-dom';
import Carousel from '../../Components/Carousel';



function Home(){
    const images = [
        rangz1, 
        rangz2, 
        rangz3, 
        rangz4
    ]

    return(
    <>
    <Header/>
    <div className="body-rangz">
        <div className ="upper-rangz">
            <img src={rangilalogo} alt="rangila logo" className="rangz-logo"/>
            <h1>Welcome to RangzMatch</h1>
            <div className="buttons-rangz">
                <button><Link to ="/createaccount">Create Account</Link></button>
                 <button><Link to ="/login"> Login </Link></button>

            </div>
        </div>
        
        <div className="bottom-rangz">
            <div className="about-rangz">
                <h2>About Rangila</h2>
                <p>Rangila is Northeastern's premier Bollywood fusion dance team that combines the best
                elements of traditional Eastern and modern Western styles of dance. We compete across
                the country in styles such as Bollywood, Hip Hop, Contemporary, Bhangra, and more, united
                by our love for dance. We strive to build an appreciation for dance and culture.</p>
            </div>
            <div className="rangz-photo">
                <Carousel images = {images} />
            </div>
        </div>
    </div>
    <Footer/>
        
        
    </>
    
    )
}

export default Home;

