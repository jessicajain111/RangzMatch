import React from 'react';
import './footer.css';

function Footer(){
    return(
        <footer className="footer">
            <h3>Socials</h3>
            <div className = "social-icons">
                <a href="https://www.instagram.com/nurangila/"><img src="/img/instagram.jpeg"/></a>
                <a href="https://www.tiktok.com/@nurangila"><img src="/img/tiktok.jpeg"/></a>
                <a href="https://www.facebook.com/groups/1602527240554796"><img src="/img/facebook.png"/></a>
                <a href="https://app.slack.com/client/T05554AR7Q8/C054U2NHVC1"><img src="/img/slack.png"/></a>

            </div>
        </footer>
    )
}

export default Footer;