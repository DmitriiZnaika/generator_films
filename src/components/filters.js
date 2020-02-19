import React, { useEffect, useState, useMemo, useRef} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import { countries, names } from   '../config/filters'





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
}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
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


export default function Filters() {
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
    const [yearFilm, setYear] = useState([]);
    const [country, setCountry] = useState([]);

    const handleChangeName = event => {
        setPersonName(event.target.value);
    };
    // const handleChangeName = name => event => {
    //     setPersonName({
    //         [name]: event.target.value,
    //     });
    // };
    const handleChangeYear = event => {
        setYear(event.target.value);
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

    const year = (new Date()).getFullYear();
    const years = Array.from(new Array(20),( val, index) => index + year);

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container style={{width: "1300px"}}>
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
                                    <Grid item>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="age-native-simple">Year</InputLabel>
                                            <Select
                                                labelId="demo-mutiple-name-label"
                                                id="demo-mutiple-name"
                                                // multiple
                                                value={yearFilm}
                                                onChange={handleChangeYear}
                                                input={<Input />}
                                                MenuProps={MenuProps}
                                            >
                                                {years.map(years => (
                                                    <MenuItem key={years} value={years} style={getStyles(years, personName, theme)}>
                                                        {years}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid >
                                    <Grid item >
                                        <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-simple">Actor</InputLabel>
                                        <Select
                                            labelId="demo-mutiple-name-label"
                                            id="demo-mutiple-name"
                                            // multiple
                                            value={personName}
                                            onChange={handleChangeName}
                                            input={<Input />}
                                            MenuProps={MenuProps}
                                        >
                                            {names.map(name => (
                                                <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item >
                                        <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-simple">Country</InputLabel>
                                        <Select
                                            labelId="demo-mutiple-name-label"
                                            id="demo-mutiple-name"
                                            // multiple
                                            value={country}
                                            onChange={handleChangeCountry}
                                            input={<Input />}
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