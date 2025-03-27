import React from 'react'
import '../css/MainPage.css'
import img1 from '../assets/ErezImages/img1.jpeg'
import img2 from '../assets/ErezImages/img2.jpeg'
import img3 from '../assets/ErezImages/img3.png'
export default function MainPage() {
    return (
        <div className='mainPage'>
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
                        <p>Search</p>
                    </div>
                </div>
            </div>

            <div className='Upcoming d-flex justify-content-between'>
                <div className='Upcoming-title d-flex'><h4>Upcoming</h4> <h4 className='purple'>Events</h4></div>
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
                <button>Learn more</button>
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
        </div>
    )
}
