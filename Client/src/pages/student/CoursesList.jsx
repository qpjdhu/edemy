import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import SearchBar from '../../components/student/SearchBar'
import { useParams } from 'react-router-dom'
import CourseCard from '../../components/student/CourseCard'
import { assets } from '../../assets/assets'
import Footer from '../../components/student/Footer'

const CoursesList = () => {

    const { navigate, allCourses } = useContext(AppContext)

    const {input} = useParams()

    const [filteredCourse , setFilteredCourse] = useState([])

    useEffect(() => {
        if (allCourses && allCourses.length > 0) {
            const tempCourses = allCourses.slice(0,93)

            input ? 
            setFilteredCourse(
                tempCourses.filter(
                    item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
                )
            )
            : setFilteredCourse(tempCourses)
        }
    } , [allCourses , input])

    // useEffect(() => {
    //     console.log("All Courses:", allCourses);
    //     console.log("Input value:", input);

    //     if (allCourses && allCourses.length > 0) {
    //         const tempCourses = allCourses.slice(0,89);
    //         const filtered = input
    //             ? tempCourses.filter(item =>
    //                 item.courseTitle.toLowerCase().includes(input.toLowerCase())
    //               )
    //             : tempCourses;

    //         console.log("Filtered Courses:", filtered);
    //         setFilteredCourse(filtered);
    //     }
    // }, [allCourses, input]);


    return (

        <>
            {/* <div>CoursesList //</div> */}
            <div className='relative md:px-36 px-8 pt-20 text-left '>
                <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
                    <div>
                    <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
                    <p className='text-gray-500'>
                        <span className='text-blue-600 cursor-pointer' onClick={() => navigate("/")}> Home</span>  /  <span>Course List</span>
                    </p>
                    </div>
                    <SearchBar data={input}/>
                </div>
                {
                   input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600'>
                    <p>{input}</p>
                    <img src={assets.cross_icon} className="cursor-pointer" onClick={ () => navigate('/course-list')}/>
                   </div> 
                }
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
                    {filteredCourse.map((course , index) => <CourseCard key={index} course={course} />)}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CoursesList  


// import React, { useContext, useEffect, useState } from 'react';
// import { AppContext } from '../../context/AppContext';
// import SearchBar from '../../components/student/SearchBar';
// import { useParams, useNavigate } from 'react-router-dom';
// import CourseCard from '../../components/student/CourseCard';
// import { assets } from '../../assets/assets';
// import Footer from '../../components/student/Footer';

// const CoursesList = () => {
//     const { allCourses } = useContext(AppContext);
//     const { input } = useParams();
//     const navigate = useNavigate();
//     const [filteredCourse, setFilteredCourse] = useState([]);

//     useEffect(() => {
//         console.log("Input from URL:", input); // Debugging
//         if (allCourses && allCourses.length > 0) {
//             const tempCourses = allCourses.slice(0, 93);

//             if (input) {
//                 const filtered = tempCourses.filter(item =>
//                     item.courseTitle.toLowerCase().includes(input.toLowerCase())
//                 );
//                 console.log("Filtered Courses:", filtered); // Debugging
//                 setFilteredCourse(filtered);
//             } else {
//                 setFilteredCourse(tempCourses);
//             }
//         } else {
//             setFilteredCourse([]); // Reset if no courses are available
//         }
//     }, [allCourses, input]);

//     return (
//         <>
//             <div className='relative md:px-36 px-8 pt-20 text-left'>
//                 <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
//                     <div>
//                         <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
//                         <p className='text-gray-500'>
//                             <span className='text-blue-600 cursor-pointer' onClick={() => navigate("/")}> Home</span>  /  <span>Course List</span>
//                         </p>
//                     </div>
//                     <SearchBar data={input} />
//                 </div>
//                 {input && (
//                     <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600'>
//                         <p>{input}</p>
//                         <img src={assets.cross_icon} className="cursor-pointer" onClick={() => navigate('/course-list')} />
//                     </div>
//                 )}
//                 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
//                     {filteredCourse.length > 0 ? (
//                         filteredCourse.map((course, index) => (
//                             <CourseCard key={index} course={course} />
//                         ))
//                     ) : (
//                         <p className="text-gray-600">No courses found for "{input}".</p>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default CoursesList;