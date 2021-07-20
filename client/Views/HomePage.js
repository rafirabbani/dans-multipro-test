import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobAction from '../Actions/JobAction'
import Header from './Header'

export default function HomePage() {
    const dispatch = useDispatch()
    const jobs = useSelector((state) => state.jobs)
    const [allJobs, setAllJobs] = useState([])
    const [search, setSearch] = useState(false)
    
    useEffect(() => {
        dispatch(JobAction.getAllJobs())
    }, [])

    useEffect(() => {
        if (jobs.jobList) {
            setAllJobs(jobs.jobList)
        }
    }, [jobs])

    useEffect(() => {
        if (jobs.findJobs) {
            setSearch(false)
            setAllJobs(jobs.findJobs)
        }
    }, [jobs, search])

    return (
        <div>
            <Header setSearch={()=> setSearch(true)}/>
            <div className="min-h-screen bg-black text-white">
                <h1 className="text-center text-white text-5xl pt-5 font-serif mt-14 cursor-default">Jobs List</h1>
                <div className="flex flex-row flex-wrap w-full items-center justify-around px-10 pb-10">
                     {
                        allJobs && allJobs.map((job) => (
                            <div className="mx-5 my-5" key={job.id}>
                                <a className="px-5 py-5"> 
                                    <div className="flex-col flex-grow-0 items-center justify-center w-56">
                                        <img className="transition duration-100 ease-in-out rounded-lg transform hover:scale-105" 
                                            src={`${job.company_logo}`} alt="Company Logo"
                                            style={{width: '100px', height: '100px'}}/>
                                        <div><label>Job Title: {job.title}</label> </div>
                                        <label>Company: {job.company}</label>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}