import React, { useState } from 'react'
import SearchIcon from '@heroicons/react/outline/SearchIcon'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import JobAction from '../Actions/JobAction'


export default function Header(props) {
    const [search, setSearch] = useState([])
    const dispatch = useDispatch()

    /* const handleLogout = () => {
        dispatch(AuthActions.signOut()).then(() => {
            history.push('/login')
        })

    } */

    const handleSearch = (e) => {
        //console.log(e.target.value)
        setSearch(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch()
        }
    }

    const onSearch = () => {
        dispatch(JobAction.findJobs(search))
        props.setSearch()
    }

    return (

        <>
        <nav className="fixed z-50 flex items-center justify-between bg-red-600 w-full top-0">
                <div className='flex justify-start mt-3'>
                </div>
                <div>
                    <input className="text-sm px-5 py-5 border-black border-2 focus:outline-none" style={{width: '300px'}} placeholder="Find Your Dream Job here..."
                    onChange={handleSearch} onKeyDown={handleKeyDown}/>
                    <button className='bg-white text-black px-1 py-5 text-sm border-2 border-black border-l-0 hover:bg-gray-300 active:bg-gray-500 focus:outline-none relative' 
                    style={{top: '5px'}} onClick={onSearch}>
                        <SearchIcon className="w-5 h-5"/>
                    </button>
                </div>
                <div className='flex justify-end'>
                </div>
            </nav>
        </>
    )
}