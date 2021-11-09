import React, {useContext} from 'react'

import {BlogContext} from './../../BlogContext'

import ViewAllBlogs from './ViewAllBlogs'
import AdminWriting from './AdminWriting'
import AdminNotification from './AdminNotification'
import ViewSingleBlog from './ViewSingleBlog.js'
import UnderDevelopment from './UnderDevelopment'
import Suggestions from './Suggestions'

import GuestView from './components/GuestView/GuestView'

import DeleteAllButton from './components/DeleteAllButton'

import ViewAllBlogsButton from './components/ViewAllBlogsButton'

import NotificationButton from './components/NotificationButton'

import WritePostButton from './components/WritePostButton'



import ChangeLogButton from './components/ChangeLog/ChangeLogButton'
import ChangeLog from './components/ChangeLog/ChangeLog'

export default function BlogAdmin() {
    let {
        writing,
        viewingAllBlogs,
        viewingSingleBlog,
        changeLog
    } = useContext(BlogContext)
    
    let {
        viewingChangeLog
    } = changeLog
    
    let adminContent

    if (writing) {
        adminContent = <AdminWriting />
    } else if (viewingAllBlogs) {
        adminContent = <ViewAllBlogs />
    } else if (viewingSingleBlog) {
        adminContent = <ViewSingleBlog />
    } else if (viewingChangeLog) {
        adminContent = <ChangeLog />
    } else {
        adminContent = (
            <div className='m-blog-options-container'>
                <UnderDevelopment />
                <WritePostButton />
                <NotificationButton />
                <ViewAllBlogsButton /> 
                <DeleteAllButton />
                <GuestView />
                <Suggestions />
                <ChangeLogButton />
            </div>
        )
    }
    return (
        <div className='m-blog-container'>
            <div className="m-blog-admin-container">
                <AdminNotification />
                {adminContent}
            </div>
        </div>
    )
}