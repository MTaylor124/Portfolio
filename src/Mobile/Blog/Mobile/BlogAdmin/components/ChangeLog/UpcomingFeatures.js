import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default function UpcomingFeatures() {
    const expansionStyle = {
        backgroundColor: 'rgb(12, 95, 95)',
        padding: '0px 5px',
        width: '100%',
        color: 'white'
    }
    const detailsStyle = {
        height: '100%',
        width: '95%',
        padding: 0,
        marginLeft: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
    const expandIcon = {
        color: 'white'
    }
    const expansionHeader = {
        fontSize: '1.4rem'
    }

    return (
        <div className='m-bc-list-container'>
            <ExpansionPanel style={expansionStyle}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={expandIcon}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={expansionHeader}
                >
                   Blog Images
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={detailsStyle}>
                    <div className='m-bc-list-item'>
                        I plan to add images(jpg/png) for media upload via Firebase storage
                    </div>
                    <div className='m-bc-list-item'>
                        Cover photos for a blog post as well as pictures between sections and lists
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel style={expansionStyle}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={expandIcon}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={expansionHeader}
                >
                   User Accounts
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={detailsStyle}>
                    <div className='m-bc-list-item'>
                        If requested, I may allow for users to sign up for accounts via Firebase Authentication and post their own blogs
                    </div>
                    <div className='m-bc-list-item'>
                        This will not be added until all functionality including media upload is implemented
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel style={expansionStyle}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={expandIcon}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={expansionHeader}
                >
                   More Section Types
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={detailsStyle}>
                    <div className='m-bc-list-item'>
                        I plan to add a variety of additional section types in the future such as 'Quote'
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel style={expansionStyle}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={expandIcon}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={expansionHeader}
                >
                   Tags/Categories
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={detailsStyle}>
                    <div className='m-bc-list-item'>
                        I plan to add tags for each blog post so that guests may quickly index blog posts to find relevant topics
                    </div>
                    <div className='m-bc-list-item'>
                        Initially, tags will most likely be from a predetermined list of common tags, 
                        eg React, Context, Firebase or even Tech, Personal, Mindfulness etc.
                    </div>
                    <div className='m-bc-list-item'>
                        Indexing for specific authors will be added as well if I choose to allow others to sign up for accounts
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel style={expansionStyle}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={expandIcon}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={expansionHeader}
                >
                   Theme/Color
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={detailsStyle}>
                    <div className='m-bc-list-item'>
                        I plan to add several different methods of theme pickers
                    </div>
                    <div className='m-bc-list-item'>
                        Browsing/universal theme: the way you see blogs once you're logged in
                    </div>
                    <div className='m-bc-list-item'>
                        Users can choose a theme that their own blog posts will adhere to that 
                        others will see when viewing their blogs
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

                {/* <ExpansionPanel style={expansionStyle}>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon style={expandIcon}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={expansionHeader}

                    >

                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={detailsStyle}>
                        <div className='m-bc-list-item'>

                        </div>
                        <div className='m-bc-list-item'>

                        </div>
                        <div className='m-bc-list-item'>

                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel> */}

            <div className="m-scroll-fix">

            </div>
        </div>
    )
}
