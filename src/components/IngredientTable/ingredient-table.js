import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {colors, ingredientExplain} from "../../global/constants";
import {Typography} from "@material-ui/core";
import StopIcon from '@material-ui/icons/Stop';
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles({
    container: {
        // width: "80%",
    },
    table: {
        width: "100%",
    },
    image: {
        height: 30,
        width: 'auto',

    },
    square: {
        marginRight: "7px",
        display: "inline-flex",
        border: "solid",
        borderRadius: "17px",
        borderWidth: 1,
        padding: "4px",
        borderColor: colors.pink4,

    },
});


export default function IngredientTable() {
    const classes = useStyles();

    const renderHighlight = (img, title) => {
        return (
            <div style={{marginRight: 20}}>
                <div>
                    <img style={{width: 30, height: 30, display: "block", marginLeft: "auto", marginRight: "auto"}}
                         src={img}/>
                </div>
                <div>
                    <Typography align={"center"} color="textSecondary" style={{fontSize: 14}}>
                        {title}
                    </Typography>
                </div>
            </div>
        )
    }

    const renderSafetyItem = () => {
        return (
            <div>
                <div style={{display: "inline-flex", marginRight: 30, alignItems: "center"}}>
                    <StopIcon style={{color: "#B9F0FF", marginRight: 10}} fontSize="large"/>
                    <Typography color='textSecondary'>Nguy cơ kích ứng thấp</Typography>
                </div>
                <div style={{display: "inline-flex", marginRight: 30, alignItems: "center"}}>
                    <StopIcon style={{color: "#F6BB26", marginRight: 10}} fontSize="large"/>
                    <Typography color='textSecondary'>Nguy cơ kích ứng trung bình</Typography>
                </div>
                <div style={{display: "inline-flex", marginRight: 30, alignItems: "center"}}>
                    <StopIcon style={{color: "#E28F8F", marginRight: 10}} fontSize="large"/>
                    <Typography color='textSecondary'>Nguy cơ kích ứng cao</Typography>
                </div>
                <div style={{display: "inline-flex", marginRight: 30, alignItems: "center"}}>
                    <StopIcon style={{color: "#C4C4C4", marginRight: 10}} fontSize="large"/>
                    <Typography color='textSecondary'>Chưa rõ</Typography>
                </div>
            </div>
        )
    }

    return (
        <>
            {renderSafetyItem()}
            <TableContainer component={Paper} className={classes.container}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell width={100} align={"center"}>
                                <Typography style={{fontWeight: 'bold'}}>Mức độ an toàn</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography style={{fontWeight: 'bold'}}>Tên thành phần</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography style={{fontWeight: 'bold'}}>Chức năng</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography style={{fontWeight: 'bold'}}>Điểm đáng lưu ý</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">
                                <img className={classes.image} src={ingredientExplain[0].safety}/>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Typography>{ingredientExplain[0].name}</Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography>{ingredientExplain[0].func}</Typography>
                            </TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell align="center">
                                <img className={classes.image} src={ingredientExplain[1].safety}/>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Typography>{ingredientExplain[1].name}</Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography>{ingredientExplain[1].func}</Typography>
                            </TableCell>
                            <TableCell align="left">
                                <div style={{display: "inline-flex"}}>
                                    {renderHighlight("https://www.skincarisma.org/assets/ingredients/icons/Brightening-1cd9c2f5dcdd9edb1d023dc46c290121b78bc0db1f584eeba19c848d94d3756a.png", "Làm sáng")}
                                    {renderHighlight("https://www.skincarisma.org/assets/ingredients/icons/Anti-Aging-cd7044b572861dda33a4a0864e40999dacb6d34b942c19552b97209ce49ecf89.png", "Chống lão hóa")}
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell align="center">
                                <img className={classes.image} src={ingredientExplain[2].safety}/>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Typography>{ingredientExplain[2].name}</Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography>{ingredientExplain[2].func}</Typography>
                            </TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell align="center">
                                <img className={classes.image} src={ingredientExplain[3].safety}/>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Typography>{ingredientExplain[3].name}</Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography>{ingredientExplain[3].func}</Typography>
                            </TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell align="center">
                                <img className={classes.image} src={ingredientExplain[4].safety}/>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Typography>{ingredientExplain[4].name}</Typography>
                            </TableCell>
                            <TableCell align="left">
                                {ingredientExplain[4].func}
                            </TableCell>
                            <TableCell align="left">
                                <div style={{display: "inline-flex"}}>
                                    {renderHighlight("https://www.skincarisma.org/assets/ingredients/icons/Anti-Aging-cd7044b572861dda33a4a0864e40999dacb6d34b942c19552b97209ce49ecf89.png", "Chống lão hóa")}
                                    {renderHighlight("/images/desert.png", "Tốt cho da khô")}
                                    {renderHighlight("/images/Choi.png", "Độ bít tắc cao")}
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell align="center">
                                <img className={classes.image} src={ingredientExplain[5].safety}/>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Typography>{ingredientExplain[5].name}</Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography>{ingredientExplain[5].func}</Typography>
                            </TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
