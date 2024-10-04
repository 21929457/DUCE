import '../css/component/activity.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

function Activity () {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='section-bg'>
            <div className='inner'>
                <p className='activity-tit'>타이틀</p>
                <div className='board-wrap'>
                    <div className='board'>
                        <p className='tit'>동아리 활동</p>
                        <ul>
                            <li>
                                <div className='tit-wrap'>
                                    <span>01</span>
                                    <p className='board-tit'>Blue Screen</p>
                                    <p className='part'>공모전 참가</p>
                                </div>
                            </li>
                            <li>
                                <div className='tit-wrap'>
                                    <span>02</span>
                                    <p className='board-tit'>PLEX</p>
                                    <p className='part'>정보보안</p>
                                </div>
                            </li>
                            <li>
                                <div className='tit-wrap'>
                                    <span>03</span>
                                    <p className='board-tit'>AI 동아리</p>
                                    <p className='part'>인공지능</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='board year'>
                        <p className='tit'>년도별 실적</p>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        2024년
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </Typography>
                                    </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                    >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        You are currently not an owner
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                        laoreet.
                                    </Typography>
                                    </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                    >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        Advanced settings
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        Filtering has been entirely disabled for whole web server
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                    </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                    </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;