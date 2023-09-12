'use client';
import axios from 'axios';
import Courses from './components/Courses'
import CourseSearch from './components/CourseSearch'
import Loading from './loading'
import React, { useState, useEffect } from 'react'


const Homepage = () => {
	const [courses, setCourses] = useState([])
	const [loading, setLoading] = useState(true)

	const getSearchResults = (data) => {
		setCourses(data)
	}

	useEffect(() => {
		const fetchCourses = async () => {
			const { data } = await axios(`/api/courses`);
			setCourses(data)
			setLoading(false)
		}
		fetchCourses()
	}, [])

	if(loading){
		return <Loading />
	}

	return (
		<div>
			<h1>Welcome to Foo bar</h1>
			<CourseSearch
				getSearchResults={getSearchResults}
			/>
			<Courses 
				courses={courses} 
			/>
		</div>
	)
}

export default Homepage