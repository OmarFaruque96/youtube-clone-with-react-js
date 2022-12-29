import React from "react";
import '../css/main_wrapper.css';

function MainWrap() {
  return (
    <main className="main_wrapper">
        <div className="menu_tags">
            <ul>
                <li><a href="http://www.youtube.com" className="tag_active">All</a></li>
                <li><a href="http://www.youtube.com">Mixes</a></li>
                <li><a href="http://www.youtube.com">Music</a></li>
                <li><a href="http://www.youtube.com">Reaction Videos</a></li>
                <li><a href="http://www.youtube.com">Cricket</a></li>
                <li><a href="http://www.youtube.com">Fifa</a></li>
                <li><a href="http://www.youtube.com">Live</a></li>
                <li><a href="http://www.youtube.com">Indian Idol</a></li>
                <li><a href="http://www.youtube.com">Mern</a></li>
                <li><a href="http://www.youtube.com">Sass</a></li>
                <li><a href="http://www.youtube.com">Taiwlind</a></li>
                <li><a href="http://www.youtube.com">Animated Films</a></li>
                <li><a href="http://www.youtube.com">Bollywood</a></li>
                <li><a href="http://www.youtube.com">Quran</a></li>
                <li><a href="http://www.youtube.com">Tamil</a></li>
                <li><a href="http://www.youtube.com">Programming</a></li>
                <li><a href="http://www.youtube.com">Guiter</a></li>
            </ul>
        </div>
        <div className="videos_grid">
            <div className="grid-item">
                <div className="youtube_thumbnail">
                    <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-2.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                    <span className="running_time">22:34</span>
                </div>
                <div className="video-content">
                    <div className="account-img">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/unnamed.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                    </div>
                    <div className="account-info">
                        <div className="title"><a href="https://www.a.com">Best Of Cricket 2022 | 2nd T20I | Highlights | South Africa Tour Of England</a></div>
                        <div className="meta">
                            <span className="channel-name">Engineer Brother <span className="is_verified"><i className="fa fa-verified"></i></span></span> <br></br>
                            <span className="total-views">368k views</span> . 
                            <span className="upload-time"> 1 month ago</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-item">
                 <div className="youtube_thumbnail">
                    <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-2.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                </div>
                <div className="video-content">
                    <div className="account-img"></div>
                    <div className="account-info">
                        <div className="title"><a href="https://www.a.com">Youtube Clone with React Js in Bangla ....</a></div>
                        <div className="meta">
                            <span className="channel-name">Engineer Brother</span>
                            <span className="total-views">368k views</span>
                            <span className="upload-time"> 1 month ago</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                    <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-2.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                </div>
                <div className="video-content">
                    <div className="account-img"></div>
                    <div className="account-info">
                        <div className="title"><a href="https://www.a.com">Youtube Clone with React Js in Bangla ....</a></div>
                        <div className="meta">
                            <span className="channel-name">Engineer Brother</span>
                            <span className="total-views">368k views</span>
                            <span className="upload-time"> 1 month ago</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                    <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-2.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                </div>
                <div className="video-content">
                    <div className="account-img"></div>
                    <div className="account-info">
                        <div className="title"><a href="https://www.a.com">Youtube Clone with React Js in Bangla ....</a></div>
                        <div className="meta">
                            <span className="channel-name">Engineer Brother</span> <br></br>
                            <span className="total-views">368k views</span>
                            <span className="upload-time"> 1 month ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}

export default MainWrap;
