import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Image1 from "../../images/default1.png";
import Image2 from "../../images/default2.png";
import Image3 from "../../images/default3.png";
import Image4 from "../../images/default4.png";
import Grid from '@material-ui/core/Grid';
import { HiArrowCircleRight} from "react-icons/hi";
import "./Projects.scss"


const useStyles = makeStyles({
    card: {
        boxShadow: '0 3px 5px 2px #767673 ',
        "&:hover": {
            boxShadow: '0 12px 15px 8px #3F493D',
            transition:'.3s',
            marginTop:-7,
        },
        
    },
    viewIcon:{
        fontSize:"50px",
        color: "#07f71b",
        marginBottom:'-13px',
        "&:hover": {
            
            color:'green',
           cursor: 'pointer',
        },
    }
});


export default function Projects() {
    const classes = useStyles();

    return (
        <>
            <div className="project-con" id="projects">
                <h1 className="featured-head" >Featured Projects</h1>
                <div className="projects-container">
                    <Grid container spacing={5}>
                        <Grid item xs>
                            <div className="projects-cards">
                                <Card className={classes.card} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="TechStore"
                                            height="140"
                                            image={Image1}
                                            title="TechStore"
                                            
                                        />
                                        <CardContent className="projects-car">
                                            <Typography gutterBottom variant="h5" component="h2">
                                                TechStore
                                        
                                            <Typography variant="body2" component="p" >
                                                TechStore is an E-commerce Webapp with different product filters option build Using react.js, BootStrap, contentful, styled Component
                                                </Typography>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions className="card-content">
                                    <div className="button">
                                    <button type="submit">View</button>
                                </div>
                                <div className="button2">
                                    <button type="submit">Source Code</button>
                                </div>  
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs>
                            <div className="projects-cards">
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="ReduxCart "
                                            height="140"
                                            image={Image2}
                                            title="ReduxCart"
                                            
                                        />
                                        <CardContent className="projects-car">
                                            <Typography gutterBottom variant="h5" component="h2">
                                                ReduxCart
                                        
                                            <Typography variant="body2" component="p" >
                                               In ReduxCart user can add, delete and select the quantity of the products in the cart. Build using react.js, Redux, Actions and Reducer.                                                </Typography>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions className="card-content">
                                    <div className="button">
                                    <button type="submit">View</button>
                                </div>
                                <div className="button2">
                                    <button type="submit">Source Code</button>
                                </div>  
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs>
                            <div className="projects-cards">
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Covid Tracker"
                                            height="140"
                                            image={Image3}
                                            title="Covid Tracker"
                                            
                                        />
                                        <CardContent className="projects-car">
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Covid Tracker
                                        
                                            <Typography variant="body2" component="p" >
                                                Covid Tracker shows the data of people affectd by corona virus build using Chart.js, Material UI, Hooks and API fetching
                                                </Typography>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions className="card-content">
                                    <div className="button">
                                    <button type="submit">View</button>
                                </div>
                                <div className="button2">
                                    <button type="submit">Source Code</button>
                                </div>  
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                        <Grid item xs>
                            <div className="projects-cards">
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Budget calculator"
                                            height="140"
                                            image={Image4}
                                            title="Budget Calculator"
                                            
                                        />
                                        <CardContent className="projects-car">
                                            <Typography gutterBottom variant="h5" component="h2">
                                            Budget Calculator
                                        
                                            <Typography variant="body2" component="p" >
                                            Budget Calculator is the app which calculates the expenses amount and is build using react.js, react hooks, Context API.
                                                </Typography>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions className="card-content">
                                    <div className="button">
                                    <button type="submit">View</button>
                                </div>
                                <div className="button2">
                                    <button type="submit">Source Code</button>
                                </div>  
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                        
                      {/* <Grid xs>
                          <h1 className="view-all">View All <HiArrowCircleRight className={classes.viewIcon}/></h1>
                      </Grid> */}



                    </Grid>
                </div>
            </div>

        </>
    );
}