import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import './Skills.scss'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 8
    },
    skillcontainer: {


        background: 'black',
        paddingBottom: 40,
    },
    skillrating: {
        float: "right",
        marginTop: 6,
        color: 'golden',
        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
        },
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        background: '#25383C',
        color: 'aqua',
        fontFamily: 'cursive',

        marginLeft: 30,
        marginRight: 30,
        "&:hover": {
            //border: '2px solid rgb(5, 248, 37)',
            boxShadow: '1px 4px 9px 6px #2CFC02 ',

            transition: '.3s',
        },

    }
}));

export default function Skills() {
    const classes = useStyles();

    return (
        <div className={classes.skillcontainer}>
            <h1 className="featured-head" >Skills</h1>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} className="skill-paper">
                        <Paper className={classes.paper}>JavaScript<Rating className={classes.skillrating} name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} className="skill-paper">
                        <Paper className={classes.paper}>React.js<Rating className={classes.skillrating} name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} className="skill-paper">
                        <Paper className={classes.paper}>Redux<Rating className={classes.skillrating} name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} className="skill-paper">
                        <Paper className={classes.paper}>Material UI<Rating className={classes.skillrating} name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} className="skill-paper">
                        <Paper className={classes.paper}>Bootstrap<Rating className={classes.skillrating} name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} className="skill-paper">
                        <Paper className={classes.paper}>Ajax<Rating className={classes.skillrating} name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} className="skill-paper">
                        <Paper className={classes.paper}>Api Handling<Rating className={classes.skillrating} name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} className="skill-paper">
                        <Paper className={classes.paper}>Node.js<Rating className={classes.skillrating} name="half-rating-read" defaultValue={2} precision={0.5} readOnly /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} className="skill-paper">
                        <Paper className={classes.paper}>Html&CSS<Rating className={classes.skillrating} name="half-rating-read" defaultValue={4} precision={0.5} readOnly /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} className="skill-paper">
                        <Paper className={classes.paper}>SASS<Rating className={classes.skillrating} name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} className="skill-paper">
                        <Paper className={classes.paper}>Git&Github<Rating className={classes.skillrating} name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} className="skill-paper">
                        <Paper className={classes.paper}>C&C++<Rating className={classes.skillrating} name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></Paper>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}


