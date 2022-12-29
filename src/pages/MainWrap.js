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
                <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/46396527_2221548734765872_8557747183665807360_n.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                        <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                    <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-2.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                        <iframe src="https://www.youtube.com/embed/nSauRct8AWs?autoplay=1" allow="autoplay" title="football2"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-3.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                    <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football3"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                    <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-1.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                    <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football4"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/46387086_2221548618099217_8107250370385805312_n.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                        <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                    <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/Responsive.png" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                        <iframe src="https://www.youtube.com/embed/nSauRct8AWs?autoplay=1" allow="autoplay" title="football2"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-3.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                    <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football3"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                    <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-1.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                    <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football4"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
        </div>
        <div className="videos_grid">
            <div className="grid-item">
                <div className="youtube_thumbnail">
                <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-1.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                        <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                    <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-2.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                        <iframe src="https://www.youtube.com/embed/nSauRct8AWs?autoplay=1" allow="autoplay" title="football2"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-3.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                    <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football3"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                    <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-1.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                    <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football4"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-1.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                        <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                    <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-2.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                        <iframe src="https://www.youtube.com/embed/nSauRct8AWs?autoplay=1" allow="autoplay" title="football2"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-3.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                    <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football3"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                    <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-1.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                    <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football4"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-1.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                        <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                    <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-2.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                        <iframe src="https://www.youtube.com/embed/nSauRct8AWs?autoplay=1" allow="autoplay" title="football2"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-3.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                    <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football3"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                    <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-1.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                    <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football4"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-1.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                        <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                    <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-2.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                        <iframe src="https://www.youtube.com/embed/nSauRct8AWs?autoplay=1" allow="autoplay" title="football2"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-3.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                    <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football3"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
            <div className="grid-item">
                <div className="youtube_thumbnail">
                    <div className="video_overlay">
                        <img src="https://omarfaruque96.github.io/Football-Website-with-Bootstrap5-/img/post-1.jpg" alt="youtube thumbnail" className="img-fluid"></img>
                        <span className="running_time">22:34</span>
                        <span className="keep_hovering_text d-none">Keep hovering to play</span>
                    </div>
                    <div className="d-none main_video">
                    <iframe src="https://www.youtube.com/embed/N_NmzJMKAJQ?autoplay=1" allow="autoplay" title="football4"></iframe>
                    </div>
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
                <div className="video_card_hover_btn">
                    <button>
                        <svg>
                        <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path>
                        </svg>
                        Watch Later</button>
                    <button>
                        <svg>
                            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" class="style-scope yt-icon"></path>
                        </svg>
                        Add to Queue</button>
                </div>
            </div>
        </div>
    </main>
  );
}

export default MainWrap;
