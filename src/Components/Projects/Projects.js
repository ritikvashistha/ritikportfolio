import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography';
import Image1 from "../../images/default1.png"
import Image2 from "../../images/default2.png"
import Image3 from "../../images/default3.png"
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
            <div className="project-con" >
                <h1 className="featured-head" >Featured Projects</h1>
                <div className="projects-container">
                    <Grid container spacing={5}>
                        <Grid item xs>
                            <div className="projects-cards">
                                <Card className={classes.card} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image={Image1}
                                            title="Contemplative Reptile"
                                            
                                        />
                                        <CardContent className="projects-car">
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Lizard
                                        
                                            <Typography variant="body2" component="p" >
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
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
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image={Image2}
                                            title="Contemplative Reptile"
                                            
                                        />
                                        <CardContent className="projects-car">
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Lizard
                                        
                                            <Typography variant="body2" component="p" >
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
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
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image={Image3}
                                            title="Contemplative Reptile"
                                            
                                        />
                                        <CardContent className="projects-car">
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Lizard
                                        
                                            <Typography variant="body2" component="p" >
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
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
                        
                      <Grid xs>
                          <h1 className="view-all">View All <HiArrowCircleRight className={classes.viewIcon}/></h1>
                      </Grid>



                    </Grid>
                </div>
            </div>

        </>
    );
}