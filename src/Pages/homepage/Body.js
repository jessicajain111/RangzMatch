// import rangzphotoshoot
import React from 'react';
import './body.css';

function Body(){
    return(
    <>
    <div className="body">
        <div className ="upper">
            <img src="/img/rangilalogo.png" alt="rangila logo" className="rangz-logo"/>
            <h1>Welcome to RangzMatch</h1>
            <div className="buttons">
                <button>Create an Acount</button>
                <button>Login</button>

            </div>
        </div>
        
        <div className="bottom">
            <div className="about">
                <h2>About Rangila</h2>
                <p>Rangila is Northeastern's premier Bollywood fusion dance team that combines the best
                elements of traditional Eastern and modern Western styles of dance. We compete across
                the country in styles such as Bollywood, Hip Hop, Contemporary, Bhangra, and more, united
                by our love for dance. We strive to build an appreciation for dance and culture.</p>
            </div>
            <div className="rangz-photo">
            <img src="/img/rangzphotoshoot.jpg" alt="rangila group"/>
            </div>
        </div>
    </div>
        
        
    </>
    
    )
}

export default Body;

