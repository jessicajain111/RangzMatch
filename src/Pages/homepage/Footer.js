import React from 'react';
import './footer.css';
import insta from '../../img/instagram.jpeg'
import facebook from '../../img/facebook.png'
import slack from '../../img/slack.png'
import tiktok from '../../img/tiktok.jpeg'

function Footer(){
    return(
        <footer className="footer">
            <h3>Socials</h3>
            <div className = "social-icons">
                <a href="https://www.instagram.com/nurangila/"><img src={insta} alt='insta link'/></a>
                <a href="https://www.tiktok.com/@nurangila"><img src={tiktok} alt='tiktok link'/></a>
                <a href="https://www.facebook.com/groups/1602527240554796"><img src={facebook} alt='facebook link'/></a>
                <a href="https://app.slack.com/client/T05554AR7Q8/C054U2NHVC1"><img src= {slack} alt='slack link'/></a>

            </div>
        </footer>
    )
}

export default Footer;