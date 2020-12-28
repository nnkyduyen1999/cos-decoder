import React from 'react';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";


const CommentItem = ({item}) => {
    const classes = useStyles();
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={item.username} src={item.avatar}/>
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <React.Fragment>
                            <Typography className={classes.username} color="textPrimary">
                                {item.username}
                            </Typography>
                        </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                            <Typography className={classes.time} color="textSecondary">
                                {item.time}
                            </Typography>
                            <Typography className={classes.content} color="textPrimary">
                                {item.content}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li"/>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },

    username: {
        fontWeight: 'bold',
        // fontSize: 17
    },
    time: {
        fontSize: 12
    },
    content: {
        // fontSize: 15
    },
}));

export default CommentItem;
