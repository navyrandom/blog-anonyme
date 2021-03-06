import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    paper: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '99%',
        position: 'absolute',
        backgroundColor: 'white',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        margin: '0 0 10px 0',
    },
    title: {
        marginBottom: '10px',
    },
    textarea: {
        padding: '10px',
        marginBottom: '10px',
    },
    footer: {
        marginTop: '10px',
    },
    createButton:{
        color:'white',
        backgroundColor:'#90AACB',
        '&:hover':{
            backgroundColor: '#FCD2D1',
            color:'black'
        },
        fontWeight:'bolder'
    }
    }
))