import React, { useState } from 'react'
import './Main.css'
const Main = () => {
    const [year, setYear] = useState('')
    const [region, setRegion] = useState('')
    const [college, setCollege] = useState('')
    const [describeCollege, setDescribeCollege] = useState('')
    if (year.length > 100 || region.length > 100 || college.length > 100) {
        alert('Maximum limit reached')
    }
    if (describeCollege.length > 200) {
        alert('Maximum limit reached')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (year.length > 0 && region.length > 0 && college.length > 0 && describeCollege.length > 0) {
            console.log('Year :', year, "Region :", region, "College :", college, "Describe College:", describeCollege);
            setYear('')
            setRegion('')
            setCollege('')
            setDescribeCollege('')
            alert('Thank you for submitting !!!!')
        } else {
            alert('All fields are required')
        }
    }
    return (
        <section>
            <div className='eduDetails'>
                <h1>
                    Education<sup>*</sup>
                </h1>
                <form action="">
                    <div className='inputContainer'>
                        <label htmlFor="">Year of passing<sup>*</sup></label>
                        <input type="number" placeholder='2024' value={year} onChange={(e) => setYear(e.target.value)} />

                    </div>
                    <div className='wordCount end'>
                        {year.length < 101 && year.length}/100

                    </div>
                    <div className='inputContainer'>
                        <label htmlFor="">Region<sup>*</sup></label>
                        <input type="text" placeholder='Jalhandar' value={region} onChange={(e) => setRegion(e.target.value)} />
                    </div>
                    <div className='wordCount end'>
                        {region.length < 101 && region.length}/100
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor="">College Name<sup>*</sup></label>
                        <input type="text" placeholder='NIT Jalhandar' value={college} onChange={(e) => setCollege(e.target.value)} />
                    </div>
                    <div className='wordCount end'>
                        {college.length < 101 && college.length}/100
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor="">Describe college<sup>*</sup></label> <span>Need help ?</span>
                        <textarea type="text" value={describeCollege} onChange={(e) => setDescribeCollege(e.target.value)} rows='7' placeholder='NITJ is a college of national importance and students can get admission into this college through the JEE mains entrance exam and then the JoSSA counselling ....' />
                    </div>
                    <div className='wordCount end'>
                        {describeCollege.length < 101 && describeCollege.length}/200
                    </div>
                    <div className='inputContainer'>
                        <button onClick={handleSubmit}>Generate</button>
                    </div>

                </form>
            </div>
            <div className='eduBanner'>
                <img src="/banner.png" alt="banner" />
            </div>
        </section>
    )
}

export default Main