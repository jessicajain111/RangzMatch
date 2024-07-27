// import rangzphotoshoot
import React from 'react';
import './Home.module.css';
import Header from '../../Components/Header';
import Footer from './Footer';
import rangilalogo from '../../img/rangilalogo.png'
import rangzphoto from '../../img/rangzphotoshoot.jpg'
import { Link } from 'react-router-dom';


function Home(){
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
            <img src={rangzphoto} alt="rangila group"/>
            </div>
        </div>
    </div>
    <Footer/>
        
        
    </>
    
    )
}

export default Home;

