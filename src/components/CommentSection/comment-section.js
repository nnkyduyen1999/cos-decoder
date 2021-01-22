import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import CommentItem from "../CommentItem/comment-item";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const data = [
  {
    username: "Lê Huỳnh Mỹ",
    time: "17:58 - 12/8/2020",
    avatar:
      "https://image.tmdb.org/t/p/w235_and_h235_face/nD2rqT1Z0veXgcti6d9E61OqOx6.jpg",
    content: "Mình xài cái này okela lắm nè",
  },
  {
    username: "Phạm Khánh Ngân",
    time: "17:58 - 12/8/2020",
    avatar:
      "https://uploads.disquscdn.com/images/dc368ebd907dfb3c40406ed0c842b10023f20651969cbd4bf77e524b3bf29ce7.jpg",
    content:
      "Mình nghe nhiều người nói họ dùng thử và cảm thấy không tốt nhưng riêng cá nhân mình cảm nhận thì thấy đây thực sự là một thành phần rất tốt cho da. Các bạn khi sử dụng nên lưu ý các phản ứng của thành phần và làm theo hướng dẫn sử dụng của sản phẩm, như vậy thành phần mới phát huy tốt được hiệu quả.",
  },
  {
    username: "Trần Quốc Khải",
    time: "17:58 - 12/8/2020",
    avatar:
      "https://qph.fs.quoracdn.net/main-qimg-2e0aa1b9929c7e6ed1d153ce89bdc040.webp",
    content: "Cũng được",
  },
];

export default function CommentSection() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {data.map((item) => (
        <CommentItem item={item} />
      ))}
    </List>
  );
}
