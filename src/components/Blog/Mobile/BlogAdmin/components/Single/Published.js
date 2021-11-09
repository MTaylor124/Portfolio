import React, {useContext} from 'react'
import { BlogContext } from '../../../../BlogContext'

import Switch from '@material-ui/core/Switch'
import CircularProgress from '@material-ui/core/CircularProgress'

import firebase from 'firebase/app'
import 'firebase/firestore'

export default function Published({ date }) {
    let {
        blogID,
        singleBlogDetails,
        reloadBlogs,
        setNotification
    } = useContext(BlogContext)

    let {
        published,
        startPublish,
        disableSwitch,
        finishPublish
    } = singleBlogDetails

    function handleTogglePublish(pub) {
        startPublish()

        firebase.firestore().collection('Blog').doc(blogID)
        .update({
            published: !pub
        })
        .then(() => {
            let message
            if (pub) {
                message = 'Blog Unpublished!'
            } else {
                message = 'Blog Published!'
            }
            reloadBlogs(false)
            setTimeout(() => {
                setNotification(message)
                finishPublish()
            }, 500)
        })
        .catch(e => {
            console.error(e.code)
        })
    }

    const switchStyle = {
        // height: '10vh',
        // width: '50vw'
    }
    let feedback
    if (disableSwitch) {
        feedback = (
            <CircularProgress color='primary' size={18}/>
        )
    } else {
        feedback = (
            <div>

            </div>
        )
    }
    return (
        <div className='m-bvs-published-container'>
            <div className="m-bvs-date-container">
                {date}
            </div>
            <div className="m-bvs-switch-container">
                <div className="m-bvs-switch-label">
                    Published: 
                </div>
                <Switch
                    disabled={disableSwitch}
                    label='Published'
                    style={switchStyle}
                    checked={published}
                    onChange={() => handleTogglePublish(published)}
                    color='primary'
                />
                {feedback}
            </div>
        </div>
    )
}
