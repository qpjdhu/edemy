import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration"

export const AppContext = createContext()
export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    const [allCourses, setAllCourses] = useState([])
    const [isEducator, setisEducator] = useState(true)
    const [enrolledCourses, setenrolledCourses] = useState([])

    // Fetch All Courses 
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses)
    }

    // function to calculate the average rating of the course 
    const calculateRating = (course) => {
        if (course.courseRatings.length === 0) {
            return 0
        }
        let totalRating = 0
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating
        })
        return totalRating / course.courseRatings.length
    }

    // Funcion to Calculate Course Chapter Time
    const CalculateChapterTime = (chapter) => {
        let time = 0
        chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
        return humanizeDuration(time * 60 *1000, {units: ['h' , "m"]})
    }

    // Function to Calculate Course Duration 
    const CalculateCourseDuration = (course) => {
        let time = 0
        course.courseContent.map((chapter) => chapter.chapterContent.map((lecture) => time += lecture.lectureDuration))
        return humanizeDuration(time * 60 *1000, {units: ['h' , "m"]})
    }

    // Function to Calculate No. of Lectures in the Course  
    const CalculateNoOfLectures = (course) => {
        let totalLectures = 0
        course.courseContent.forEach(chapter => {
            if (Array.isArray(chapter.chapterContent)){
                totalLectures += chapter.chapterContent.length
            }
        })
        return totalLectures
    }

    // Fetch User Enrolled Courses --
    const fetchUserEnrolledCourses = async () => {
        setenrolledCourses(dummyCourses)
    }


    useEffect(() => {
        fetchAllCourses()
        fetchUserEnrolledCourses()
    }, [])

    const value = {
        currency, allCourses, navigate, calculateRating, isEducator, setisEducator, CalculateNoOfLectures,CalculateCourseDuration, CalculateChapterTime, enrolledCourses , fetchUserEnrolledCourses
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
} 