import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Cards from '../components/cards';
import Filters from '../components/filters';
import Footer from '../components/footer';
import { makeStyles } from '@material-ui/core/styles';

export default function Main() {
    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Filters/>
                <Cards/>
            </main>
            <Footer/>
        </React.Fragment>
    );
}