import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    //style of Main page
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        color: '#FCD2D1',
        backgroundColor: '#355C7D',
        '&:hover':{
            backgroundColor: '#90AACB',
        }
    },
    menu:{
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(10),
        color: '#355C7D',
        backgroundColor: '#FCD2D1',
        '&:hover':{
            backgroundColor: '#FEF1E6',
        }
    }
}))