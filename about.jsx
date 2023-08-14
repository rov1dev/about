import React from 'react'
function About() {
    return (
        <section id='about'>
            <div className='container'>
                <div className="row">
                    <div className=' text-center col-lg-6'>
                        <h1 className='mt-5'><b>About Us</b></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit, sed do eiusmod tempor incididunt <br />
                            ut. <br />
                            <br />
                            Image from <u>Freepik</u></p> <br />
                        <button className='butn1 mb-5'>LEARN MORE</button>
                    </div>
                    <div className='col-lg-6'>
                        <img className='w-100 h-100' src="https://assets.nicepagecdn.com/d2cc3eaa/3627412/images/63.jpg" alt="rasm" />
                    </div>
                </div>
            </div>
        </section>
    )
}export default About