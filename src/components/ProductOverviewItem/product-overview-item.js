import React from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {colors} from "../../global/constants";
import {Typography} from "@material-ui/core";

const ProductOverviewItem = ({title}) => {
    return (
        <div style={{display: "inline-flex", marginRight: 30}}>
            <CheckCircleOutlineIcon style={{ color: colors.pink4, marginRight: 10}}/>
            <Typography color='textSecondary'>{title}</Typography>
        </div>
    );
};

export default ProductOverviewItem;
