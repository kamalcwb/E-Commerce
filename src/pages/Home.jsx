import Announcement from '../components/Announcement'
import React from 'react'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'

function Home() {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
        </div>
    )
}

export default Home
