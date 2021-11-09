import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default function ChangeLogList() {
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
            
            <ExpansionPanel style={expansionStyle}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={expandIcon}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={expansionHeader}>
                    August 7th, 2020
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={detailsStyle}>
                    <div className='m-bc-list-item'>
                        Fixed logic that was causing wrong context method to fire when deleting a section 
                        after adding a list item in Create Blog
                    </div>
                    {/* <div className='m-bc-list-item'>

                    </div> */}

                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel style={expansionStyle}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={expandIcon}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={expansionHeader}
                >
                   August 5th, 2020
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={detailsStyle}>
                    <div className='m-bc-list-item'>
                        Warning Popups now share similar style
                    </div>
                    <div className='m-bc-list-item'>
                        Exiting from Single Blog resets Context values for Adding New Section and New Section Type
                    </div>
                    <div className='m-bc-list-item'>
                        Added Changelog
                    </div>
                    <div className='m-bc-list-item'>
                        Added Save as Draft logic
                    </div>
                    <div className='m-bc-list-item'>
                        Fixed context logic that was causing incorrect sections to be deleted in Write Blog Post
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
                   August 4th, 2020
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={detailsStyle}>
                    <div className='m-bc-list-item'>
                        Added Suggestions + UI Logic
                    </div>
                    <div className='m-bc-list-item'>
                        Updated context indexing from static index numbers to UUID system with findIndex()
                    </div>
                    <div className='m-bc-list-item'>
                        Updated Notification color, placement, duration, and message types
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
                        August 3rd, 2020
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={detailsStyle}>
                        <div className='m-bc-list-item'>
                            Wrote security rules for firebase databases to only allow for 
                            data to be written/read to correct paths and to ensure correct types of data 
                            are being sent
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

            <div className="m-scroll-fix">

            </div>
        </div>
    )
}
