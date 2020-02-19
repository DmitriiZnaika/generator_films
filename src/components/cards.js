import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Modal from "@material-ui/core/Modal";
import ReactPlayer from "react-player";



function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '150.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    buttonsOptions: {
        marginBottom: '20px'
    },
    paper: {
        position: 'absolute',
        width: 800,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    playerWrapper: {
        position: 'relative',
        paddingTop: '56.25%' /* Player ratio: 100 / (1280 / 720) */
    },
    reactPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
}));

const cards = [1, 2, 3];

export default function Cards() {
    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Container className={classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={2}>
                        {cards.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            The Secret Life of Pets 2
                                        </Typography>
                                        <Typography>
                                            Rating: 6.6
                                        </Typography>
                                    </CardContent>
                                    {/*<CardActions>*/}
                                    <div className={classes.buttonsOptions}>
                                        <Grid
                                            container
                                            spacing={4}
                                            direction="column"
                                            justify="center"
                                            alignItems="center"
                                        >
                                            <Grid item>
                                                {/*<Button*/}
                                                {/*    style={{width: "150px", height: "50px"}}*/}
                                                {/*    variant="outlined"*/}
                                                {/*    color="primary"*/}
                                                {/*>*/}
                                                {/*    /!*<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />*!/*/}
                                                {/*    Watch trailer*/}
                                                {/*</Button>*/}
                                                    <Button
                                                        type="button"
                                                        onClick={handleOpen}
                                                        style={{width: "150px", height: "50px"}}
                                                        color="primary"
                                                        variant="contained"
                                                    >
                                                        Watch trailer
                                                    </Button>
                                                    <Modal
                                                        aria-labelledby="simple-modal-title"
                                                        aria-describedby="simple-modal-description"
                                                        open={open}
                                                        onClose={handleClose}
                                                    >
                                                        <div style={modalStyle} className={classes.paper}>
                                                            <div className={classes.playerWrapper}>
                                                                <ReactPlayer
                                                                    className={classes.reactPlayer}
                                                                    youtubeConfig={{ playerVars: { showinfo: 1 } }}
                                                                    controls={true}
                                                                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                                                    width='100%'
                                                                    height='100%'
                                                                />
                                                            </div>
                                                        </div>
                                                    </Modal>
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    style={{width: "150px", height: "50px"}}
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    <a href="https://www.amazon.com/s?k=The+Secret+Life+of+Pets+2+movie&tag=jhpho07-20" target="_blank" style={{textDecoration:"none", color:"white"}}>Amazon</a>
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    {/*</CardActions>*/}
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
        </React.Fragment>
    );
}