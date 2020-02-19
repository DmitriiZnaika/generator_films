import React, { useEffect, useState, useRef} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';
import Slider from '@material-ui/core/Slider';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import { countries, genre, markYears, markRating } from   '../config/filters'





const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    root: {
        width: 500,
        margin: 'auto',
    },
}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            color: 'green',
            position: 'absolute',
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
function valuetext(value) {
    return `${value}`;
}
function valuetext1(value1) {
    return `${value1}`;
}


export default function Filters() {
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
    const [country, setCountry] = useState([]);
    const [ratingFilm, setRating] = useState([1.0, 10.0]);
    const [value, setValue] = useState([1900, 2021]);

    const handleChangeName = event => {
        setPersonName(event.target.value);
    };

    const handleChangeCountry = event => {
        setCountry(event.target.value);
    };
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const timer = useRef();

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });

    useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeRating = (event1, newValue1) => {
        setRating(newValue1);
    };


    // const year = (new Date(0)).getFullYear();
    // const years = Array.from(new Array(55),( val, index) => index + year);

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Generator Films
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Something short and leading about the collection below—its contents, the creator, etc.
                            Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                            entirely.
                        </Typography>
                        <div >
                            <Grid container spacing={2} justify="center">
                                <Grid item xs={12}>
                                <div className={classes.root}>
                                    <Typography id="range-slider" gutterBottom variant="h5" align="center" color="textSecondary" paragraph>
                                        A period of years.
                                    </Typography>
                                    <Slider
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        max={2021}
                                        min={1900}
                                        marks={markYears}
                                        aria-labelledby="range-slider"
                                        getAriaValueText={valuetext}
                                    />
                                </div>
                                </Grid >
                                <Grid item xs={12}>
                                    <div className={classes.root}>
                                        <Typography id="range-slider" gutterBottom variant="h5" align="center" color="textSecondary" paragraph>
                                            Rating
                                        </Typography>
                                        <Slider
                                            value={ratingFilm}
                                            onChange={handleChangeRating}
                                            valueLabelDisplay="auto"
                                            step={0.1}
                                            max={10.00}
                                            min={1.00}
                                            marks={markRating}
                                            aria-labelledby="range-slider"
                                            getAriaValueText={valuetext1}
                                        />
                                    </div>
                                </Grid >
                                {/*<Grid item xs={3}>*/}
                                {/*        <FormControl className={classes.formControl}>*/}
                                {/*            <InputLabel htmlFor="age-native-simple">Rating</InputLabel>*/}
                                {/*            <Select*/}
                                {/*                labelId="demo-mutiple-name-label"*/}
                                {/*                id="demo-mutiple-name"*/}
                                {/*                // multiple*/}
                                {/*                value={ratingFilm}*/}
                                {/*                onChange={handleChangeYear}*/}
                                {/*                input={<Input />}*/}
                                {/*                MenuProps={MenuProps}*/}
                                {/*            >*/}
                                {/*                {rating.map(rating => (*/}
                                {/*                    <MenuItem key={rating} value={rating} style={getStyles(rating, personName, theme)}>*/}
                                {/*                        {rating}*/}
                                {/*                    </MenuItem>*/}
                                {/*                ))}*/}
                                {/*            </Select>*/}
                                {/*        </FormControl>*/}
                                {/*    </Grid >*/}
                                    <Grid item>
                                        <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-simple">Genre</InputLabel>
                                        <Select
                                            labelId="demo-mutiple-name-label"
                                            id="demo-mutiple-name"
                                            multiple
                                            value={personName}
                                            onChange={handleChangeName}
                                            // input={<Input />}
                                            MenuProps={MenuProps}
                                        >
                                            {genre.map(genre => (
                                                <MenuItem key={genre} value={genre} style={getStyles(genre, personName, theme)}>
                                                    {genre}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item>
                                        <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-simple">Country</InputLabel>
                                        <Select
                                            labelId="demo-mutiple-name-label"
                                            id="demo-mutiple-name"
                                            multiple
                                            value={country}
                                            onChange={handleChangeCountry}
                                            MenuProps={MenuProps}
                                        >
                                            {countries.map(name => (
                                                <MenuItem key={name.country} value={name.country} style={getStyles(name.country, personName, theme)}>
                                                    {name.country}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        </FormControl>
                                    </Grid>
                            </Grid>
                        </div>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <div className={classes.wrapper}>
                                        <Button
                                            style={{width: "250px", height: "50px"}}
                                            variant="contained"
                                            color="primary"
                                            className={buttonClassname}
                                            disabled={loading}
                                            onClick={handleButtonClick}
                                        >
                                            {loading ? 'Loading' : 'Generator'}
                                        </Button>
                                        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                                    </div>
                                </Grid>
                                {/*<Grid item>*/}
                                {/*    <Button variant="outlined" color="primary">*/}
                                {/*        Secondary action*/}
                                {/*    </Button>*/}
                                {/*</Grid>*/}
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </React.Fragment>
    );
}