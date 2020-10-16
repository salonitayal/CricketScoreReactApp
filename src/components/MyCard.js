import { Card, Button, CardActions, CardContent, Grid, Typography, 
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { getMatchDetail } from '../api/Api';

function MyCard({ match }) {

    const [detail, setDetail] = useState({});
    const [open, setOpen] = useState(false);

    const handleClick = (id) => {
        getMatchDetail(id)
        .then(data => {
            console.log("MATCH DATA : ", data);
            setDetail(data);
            handleOpen();
        })
        .catch(error => console.log("ERROR : ", error));
    };
    
    const imgSrc = () => {
        if (match["team-1"]==="Royal Challengers Bangalore"){return require("../api/img/rcb.png");}
        else if(match["team-1"]==="Chennai Super Kings"){return require("../api/img/csk.png");}
        else if(match["team-1"]==="Rajasthan Royals"){return require("../api/img/rr.png");}
        else if(match["team-1"]==="Kings XI Punjab"){return require("../api/img/kxip.jpeg");}
        else if(match["team-1"]==="Kolkata Knight Riders"){return require("../api/img/kkr.jpeg");}
        else if(match["team-1"]==="Delhi Capitals"){return require("../api/img/dc.jpeg");}
        else if(match["team-1"]==="Mumbai Indians"){return require("../api/img/mi.jpeg");}
        else if(match["team-1"]==="Sunrisers Hyderabad"){return require("../api/img/srh.png");}
    };

    const imgSrc2 = () => {
        if (match["team-2"]==="Royal Challengers Bangalore"){return require("../api/img/rcb.png");}
        else if(match["team-2"]==="Chennai Super Kings"){return require("../api/img/csk.png");}
        else if(match["team-2"]==="Rajasthan Royals"){return require("../api/img/rr.png");}
        else if(match["team-2"]==="Kings XI Punjab"){return require("../api/img/kxip.jpeg");}
        else if(match["team-2"]==="Kolkata Knight Riders"){return require("../api/img/kkr.jpeg");}
        else if(match["team-2"]==="Delhi Capitals"){return require("../api/img/dc.jpeg");}
        else if(match["team-2"]==="Mumbai Indians"){return require("../api/img/mi.jpeg");}
        else if(match["team-2"]==="Sunrisers Hyderabad"){return require("../api/img/srh.png");}
    };

    const getMatchCard = () => {
        return(
            <Card style={{marginTop:20}}>
            <CardContent>
                <Grid container justify="center" alignItems="center">
                    <Grid item sm="4" style={{marginRight:150}}>
                        <img style={{width:200}, {height:200}} src={imgSrc()} alt="" />
                        <Typography style={{fontFamily:"sans-serif"}, {marginTop:10}}>
                            {match["team-1"]}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img style={{width:100}} src={require("../api/img/vs.png")} alt="" />
                    </Grid>
                    <Grid item sm="4" style={{marginLeft:150}}>
                        <img style={{width:200}, {height:200}} src={imgSrc2()} alt="" />
                        <Typography style={{fontFamily:"sans-serif"}, {marginTop:10}}>
                            {match["team-2"]}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Grid container justify="center">
                    <Button onClick={() => handleClick(match.unique_id)} color="secondary" variant="contained" style={{fontFamily:"sans-serif"}}>
                        Show Details
                    </Button>
                    <Button style={{fontFamily:"sans-serif"}, {marginLeft: 20}}>
                         Start Time : {new Date(match.dateTimeGMT).toLocaleString()}
                    </Button>
                </Grid>
            </CardActions>
            </Card>
        );
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const getDialog = () => {
        return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">Match Detail ...</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography variant="h6">{ detail.stat }</Typography>
                    <Typography>
                        Match :
                        <span style={{fontStyle:"italic", fontWeight: "bold"}}> 
                           { detail.matchStarted? "Started" : "Yet To Start" }
                        </span>
                    </Typography>
                    <Typography>
                        Score :
                        <span style={{fontStyle:"italic", fontWeight: "bold"}}> 
                           { detail.score }
                        </span>
                    </Typography>
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="secondary" autofocus>
                    close
                </Button>
            </DialogActions>
        </Dialog>
        );
    };

    return (
        <Fragment>
            {getMatchCard()}
            {getDialog()}
        </Fragment>
    );
}

export default MyCard
