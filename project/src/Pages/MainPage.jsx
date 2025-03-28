import React from 'react'
import '../css/MainPage.css'
import img1 from '../assets/ErezImages/img1.jpeg'
import img2 from '../assets/ErezImages/img2.jpeg'
import img3 from '../assets/ErezImages/img3.png'
import add1 from '../assets/ErezImages/add1.png'
import add2 from '../assets/ErezImages/add2.png'
import add3 from '../assets/ErezImages/add3.png'
import add4 from '../assets/ErezImages/add4.png'
import add5 from '../assets/ErezImages/add5.png'
import img4 from '../assets/ErezImages/img4.png'

export default function MainPage() {
    return (
        <div className='mainPage'>
            <div className='header d-flex justify-content-between'>
                <div className='left-header'>
                    <span className='d-flex'><h2>Event</h2> <h2 className='purple'>Hive</h2> </span>
                </div>
                <div className='right-header d-flex'>
                    <button>Login</button>
                    <button className='SignUp'>SignUp</button>
                </div>
            </div>
            <div className='topPage bg-danger'>
                <h2>MADE FOR THOSE WHO DO</h2>
                <div className='search-bar d-flex justify-content-between'>
                    <div>
                        <p>Lookink for</p>
                        <select name="" id="">
                            <option value="">Choose event type</option>
                        </select>
                    </div>
                    <div>
                        <p>Location</p>
                        <select name="" id="">
                            <option value="">Choose location</option>
                        </select>
                    </div>
                    <div>
                        <p>When</p>
                        <select name="" id="">
                            <option value="">Choose a date and time</option>
                        </select>
                    </div>
                    <div className='search-icon'>
                        <img src="https://icon-library.com/images/white-search-icon-transparent-background/white-search-icon-transparent-background-1.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className='Upcoming d-flex justify-content-between'>
                <div className='Upcoming-title d-flex'><h4>Upcoming</h4><h4 className='purple'>Events</h4></div>
                <div className='d-flex'>
                    <select name="" id=""><option value="">Weekends</option></select>
                    <select name="" id=""><option value="">Event type</option></select>
                    <select name="" id=""><option value="">Any category</option></select>
                </div>
            </div>

            <div className='cards d-flex justify-content-around flex-wrap'>
                <div className='oneCard'>
                    <div className='card-img'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='card-content'>
                        <p className='card-title'><b>BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</b></p>
                        <p className='purple'>Saturdat, March 18, 9.30PM</p>
                        <p className='gray'>ONLINE EVENT - Attend anywhere</p>
                    </div>
                </div>
                <div className='oneCard'>
                    <div className='card-img'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='card-content'>
                        <p className='card-title'><b>BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</b></p>
                        <p className='purple'>Saturdat, March 18, 9.30PM</p>
                        <p className='gray'>ONLINE EVENT - Attend anywhere</p>
                    </div>
                </div>
                <div className='oneCard'>
                    <div className='card-img'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='card-content'>
                        <p className='card-title'><b>BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</b></p>
                        <p className='purple'>Saturdat, March 18, 9.30PM</p>
                        <p className='gray'>ONLINE EVENT - Attend anywhere</p>
                    </div>
                </div>
                <div className='oneCard'>
                    <div className='card-img'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='card-content'>
                        <p className='card-title'><b>BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</b></p>
                        <p className='purple'>Saturdat, March 18, 9.30PM</p>
                        <p className='gray'>ONLINE EVENT - Attend anywhere</p>
                    </div>
                </div>
                <div className='oneCard'>
                    <div className='card-img'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='card-content'>
                        <p className='card-title'><b>BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</b></p>
                        <p className='purple'>Saturdat, March 18, 9.30PM</p>
                        <p className='gray'>ONLINE EVENT - Attend anywhere</p>
                    </div>
                </div>
                <div className='oneCard'>
                    <div className='card-img'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='card-content'>
                        <p className='card-title'><b>BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</b></p>
                        <p className='purple'>Saturdat, March 18, 9.30PM</p>
                        <p className='gray'>ONLINE EVENT - Attend anywhere</p>
                    </div>
                </div>
  
            </div>

            <div className='learn-more'>
                <button>Learn more...</button>
            </div>
            <div className='CreateEvents  d-flex'>
                <div className='CreateEvents-img'>
                    <img src={img3} alt="" />
                </div>
                <div className='CreateEvents-text'>
                    <h1>Make your own Event </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <button>Create Events</button>
                </div>
            </div>
            <div className='brands'>
                <div className='brands-title d-flex'><h1>Join these</h1><h1 className='purple'>brands</h1></div>
                <p>We've had the pleasure of working with industry-defining brands. These are just some of them.</p>
                <div className='add d-flex justify-content-around'>
                    <img src={add1} alt="" />
                    <img src={add2} alt="" />
                    <img src={add3} alt="" />
                    <img src={add4} alt="" />
                    <img src={add5} alt="" />
                </div>
            </div>
            <div className='Treding-colleges'>
                <div className='Treding-title'>
                    <div className='d-flex'><h2>Trending</h2> <h2 className='purple'>colleges</h2></div>
                </div>
                <div className='Treding-cards d-flex justify-content-center'>
                    <div className='Treding-one-card'>
                        <div>
                            <img src={img4} alt="" />
                            <div className='rating d-flex justify-content-around'>
                                <p className='star'>4.8</p>
                                <p className='excl'>EXCLUSIVE</p>
                            </div>
                        </div>
                        <h2>Harvard University</h2>
                        <div className='card-but d-flex justify-content-between'>
                            <p>Cambridge, Massachusetts, UK</p>
                            <button>•••</button>
                        </div>
                        
                    </div>
                    <div className='Treding-one-card'>
                        <div>
                            <img src={img4} alt="" />
                            <div className='rating d-flex justify-content-around'>
                                <p className='star'>4.8</p>
                                <p className='excl'>EXCLUSIVE</p>
                            </div>
                        </div>
                        <h2>Harvard University</h2>
                        <div className='card-but d-flex justify-content-between'>
                            <p>Cambridge, Massachusetts, UK</p>
                            <button>•••</button>
                        </div>
                        
                    </div>
                    <div className='Treding-one-card'>
                        <div>
                            <img src={img4} alt="" />
                            <div className='rating d-flex justify-content-around'>
                                <p className='star'>4.8</p>
                                <p className='excl'>EXCLUSIVE</p>
                            </div>
                        </div>
                        <h2>Harvard University</h2>
                        <div className='card-but d-flex justify-content-between'>
                            <p>Cambridge, Massachusetts, UK</p>
                            <button>•••</button>
                        </div>
                    </div>
                    
                </div>
                <div className='learn-more'>
                <button>Learn more...</button>
            </div>
            </div>
        </div>
    )
}
