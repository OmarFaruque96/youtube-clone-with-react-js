import '../../css/header.css';
import React from 'react';

function Header() {
    
    return (
    
      <header>
        <div className='flex w-full justify-between align-center'>
            <div className='logo flex'>
                <button className='hamburger_icon'><span></span><span></span><span></span></button>
                <img src='../../images/logo.png' alt='youtube logo' />
            </div>
            <div className='search'>
                <form method='' acceptCharset='' action=''>
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                        <i className='fa fa-search'></i>
                    </button>
                </form>
                <span className='voice-command-btn'><i class="fa fa-microphone" aria-hidden="true"></i></span>
            </div>
            <div className='nav-right flex align-center'>
                <span><i class="fa fa-video-camera" aria-hidden="true"></i></span>
                <span><i class="fa fa-bell-o" aria-hidden="true"></i></span>
                <span className='loggedin_user'>
                    <img src='https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/unnamed.jpg' alt="profile  img" className='rounded' />
                </span>
            </div>
        </div>
      </header>
    
    );
}

export default Header;
