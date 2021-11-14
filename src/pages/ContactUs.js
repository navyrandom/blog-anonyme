import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';

function ContactUs(props) {
    return (
        <>
        <h2>Contactez-nous</h2>
        <List component='nav' >
            <ListItem button>
                <ListItemText primary='équipe' />
                <ListItemText secondary=' vdnhavy@gmail.com' />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary='idée' />
                <ListItemText secondary='VDNT' />
            </ListItem>
            <Divider />
        </List>

        </>
    );
}

export default ContactUs;