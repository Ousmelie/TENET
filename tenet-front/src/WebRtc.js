import React from 'react';
import { Typography, AppBar, makeStyles } from '@material-ui/core';

import Notifications from './WebRTC/Notifications';
import Options from './WebRTC/Options';
import VideoPlayer from './WebRTC/VideoPlayer';

const useStyles = makeStyles((theme) => ({
    appBar:{
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',

        [theme.breakpoints.down('xs')]:{
            width: '90%',
        },
    },
    image: {
        marginLeft: '15px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    }
}));

const WebRtc = () => {
    const classes = useStyles();

    return(
        <div className ={classes.wrapper}>
            <AppBar className={classes.AppBar} position="static" color="inherit">
                <Typography variant="h2" align="center">
                    Video Chat
                </Typography>
            </AppBar>
            <VideoPlayer/>
            <Options>
                <Notifications/>
            </Options>
        </div>
    )
}

export default WebRtc;