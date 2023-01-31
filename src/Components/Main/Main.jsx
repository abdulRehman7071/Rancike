import React from 'react'
import './Main.css'
const Main = () => {
    return (
        <section>
            <div className='eduDetails'>
                <h1>
                    Education<sup>*</sup>
                </h1>
                <form action="">
                    <div className='inputContainer'>
                        <label htmlFor="">Year of passing<sup>*</sup></label>
                        <input type="text" placeholder='2024' />

                    </div>
                    <div className='wordCount end'>
                        0/100
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor="">Region<sup>*</sup></label>
                        <input type="text" placeholder='2024' />
                    </div>
                    <div className='wordCount end'>
                        0/100
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor="">College Name<sup>*</sup></label>
                        <input type="text" placeholder='2024' />
                    </div>
                    <div className='wordCount end'>
                        0/100
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor="">Describe college<sup>*</sup></label> <span>Lolllllll</span>
                        <textarea type="text" rows='4' placeholder='NITJ is a college of national importance and students can get admission into this college through the JEE mains entrance exam and then the JoSSA counselling ....' />
                    </div>
                    <div className='wordCount end'>
                        0/200
                    </div>
                    <div className='inputContainer'>
                        <button>Generate</button>
                    </div>

                </form>
            </div>
            <div className='eduBanner'>
                <img src="/banner.png" alt="" />
            </div>
        </section>
    )
}

export default Main