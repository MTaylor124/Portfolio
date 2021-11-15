import React, { useContext } from 'react'
import { BlogContext } from '../../../../BlogContext'

import Button from '@material-ui/core/Button'

import NewSection from './NewSection'
import NewList from './NewList'

export default function AdditionalSections() {

    let {
        singleBlogSections,
        addingNewSectionToSingleBlog,
        focused
    }= useContext(BlogContext)

    let {
        addingSection,
        newSectionType,
        // feedback,
        addNewSection,
        selectType,
        cancelAddingSection
    } = addingNewSectionToSingleBlog

    const addSectionStyle = {
        textTransform: 'none',
        marginTop: '12px',
        padding: 0,
        minHeight: '32px',
        width: '90%',
        paddingTop: '3px',
        paddingBottom: '3px'    
    }
    const optionStyle = {
        textTransform: 'none',
        padding: 0,
        minHeight: '32px',
        width: '19.5%',
        paddingTop: '3px',
        paddingBottom: '3px',
        fontSize: '0.7rem'
    }

    if (focused && !addingSection) {
        return (
            <div>

            </div>
        )
    } else {
        if (!addingSection) {
            return (
                <Button
                    variant='contained'
                    color='primary'
                    style={addSectionStyle}
                    onClick={() => addNewSection(singleBlogSections.length) }>
                    Add Section
                </Button>
            )
        } else if (addingSection && !newSectionType) {
            return (
                <div className='m-bvs-new-section-options'>
                    <Button
                        style={optionStyle}
                        variant='contained'
                        color='primary'
                        onClick={() => selectType('header')}>
                        Header
                    </Button>
                    <Button
                        style={optionStyle}
                        variant='contained'
                        color='primary'
                        onClick={() => selectType('body')}>
                        Body
                    </Button>
                    <Button
                        style={optionStyle}
                        variant='contained'
                        color='primary'
                        onClick={() => selectType('emphasis')}>
                        Emphasis
                    </Button>
                    <Button
                        style={optionStyle}
                        variant='contained'
                        color='primary'
                        onClick={() => selectType('list')}>
                        List
                    </Button>
                    <Button
                        style={optionStyle}
                        variant='contained'
                        color='default'
                        onClick={() => cancelAddingSection()}>
                        Cancel
                    </Button>
                </div>
            )
        } else if (addingSection && newSectionType && newSectionType !== 'list') {
            return <NewSection />
        } else if (addingSection && newSectionType && newSectionType === 'list') {
            return <NewList />
        } else {
            return (
                <div>
                    no route created for this yet
                </div>
            )
        }
    }
}
