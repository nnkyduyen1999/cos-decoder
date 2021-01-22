import React from "react";
import Typography from "@material-ui/core/Typography";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { colors } from "../../global/constants";
import { Link } from "@material-ui/core";

const ResourceItem = ({ content }) => {
  return (
    <div style={{ display: "inline-flex" }}>
      <div>
        <LibraryBooksIcon style={{ color: colors.pink4, marginRight: 15 }} />
      </div>
      <div>
        <Typography color="textPrimary">
          <Link color="inherit" href={content}>
            {content}
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default ResourceItem;
