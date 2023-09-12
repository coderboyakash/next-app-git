'use client'
import axios from 'axios'
import React, { useState } from 'react'

const CourseSearch = ({getSearchResults}) => {
    const [query, setQuery] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await axios(`/api/courses/search?query=${query}`);
        getSearchResults(data)
    }
    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input className='search-input' type="text" placeholder="Search courses" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className="search-button">Search</button>
        </form>
    )
}

export default CourseSearch