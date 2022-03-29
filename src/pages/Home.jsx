import Announcement from '../components/Announcement'
import React from 'react'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
        </div>
    )
}

export default Home
