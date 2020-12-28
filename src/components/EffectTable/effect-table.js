import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        width: "80%",
    },
    table: {
        width: "100%",
    },
    image: {
        height: 30,
        width: 'auto',
        margin: 10,
        marginRight: 0
    }
});

export default function EffectTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.container}>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <img className={classes.image} src={"https://www.skincarisma.org/assets/ingredients/icons/Brightening-1cd9c2f5dcdd9edb1d023dc46c290121b78bc0db1f584eeba19c848d94d3756a.png"}/>
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <Typography>Sáng da</Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography>Niacinamide, Glycyrrhiza Uralensis (Licorice) Root Extract</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <img className={classes.image} src={"https://www.skincarisma.org/assets/ingredients/icons/Acne-Fighting-c4a8124526ac47a08077940f801808fdd24dea70946dfc7fa302db9a08bb23a5.png"}/>
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <Typography>Trị mụn</Typography>
                        </TableCell>
                        <TableCell align="left">
                            <Typography>Glycyrrhiza Uralensis (Licorice) Root Extract, Salix Alba (Willow) Bark Extract</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <img className={classes.image} src={"https://www.skincarisma.org/assets/ingredients/icons/Anti-Aging-cd7044b572861dda33a4a0864e40999dacb6d34b942c19552b97209ce49ecf89.png"}/>
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <Typography>Chống lão hóa</Typography>
                        </TableCell>
                        <TableCell align="left"><Typography>Niacinamide</Typography></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <img className={classes.image} src={"https://www.skincarisma.org/assets/ingredients/icons/Promotes%20Wound%20Healing-e7a95d5590e806b332559c604d2a08f9a0b23aa88046873f0839a7495d7789f0.png"}/>
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <Typography>Phục hồi</Typography>
                        </TableCell>
                        <TableCell align="left"><Typography>Centella Asiatica Extract</Typography></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
