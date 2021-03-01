import React from 'react'
import './styles/Widgets.css'
import Contact from './Contact'
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Avatar } from '@material-ui/core';

function Widgets() {
    return (
        <div className="widgets">
            <h4>Created by </h4>
            <Avatar style={{height: '200px', width: '200px'}} src="https://shorten-urls.herokuapp.com/Nvqh10" alt='Sanjeev kumar'/>
            <h3>Sanjeev kumar</h3>
            <div className="widgets__contacts">
                <Contact Icon={EmailIcon} color="#000" link='mailto: Sanjeevkr7404@gmail.com'/>
                <Contact Icon={GitHubIcon} color="#000" link='https://github.com/sanjeevkr04'/>
                <Contact Icon={LinkedInIcon} color="#0e76a8" link='https://www.linkedin.com/in/sanjeevkr04/'/>
            </div>
        </div>
    )
}

export default Widgets
