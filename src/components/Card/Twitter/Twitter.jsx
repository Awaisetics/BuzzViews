import React from "react";
import TweetCard from "react-tweet-card";
import { Container, Box } from "@mui/material";
import "./twitter.css";
function Twitter() {
  return (
    <>
      <div className="twitter-card">
        <div className="twitter-card-header">
          <img
            className="twitter-card-avatar"
            src="https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg"
            alt="User Avatar"
          />
          <div className="twitter-card-user-info">
            <h5 className="twitter-card-username">John Doe</h5>
            <p className="twitter-card-userhandle">@johndoe</p>
          </div>

          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
            alt="Your logo"
            className="logo ms-auto"
          />
        </div>
        <div className="twitter-card-content">
          <p className="twitter-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            posuere elit, vel semper eros bibendum eget.
          </p>
          <img
            className="twitter-card-image"
            src="https://c4.wallpaperflare.com/wallpaper/501/202/572/latest-new-nature-scene-3840x2160-wallpaper-preview.jpg"
            alt="Card Image"
          />
        </div>
        <div className="twitter-card-footer">
          <i className="bx bxs-heart text-danger bx-sm"></i>
          <i className="bx bx-transfer text-success bx-sm"></i>
          <i className="bx bxs-comment text-primary bx-sm"></i>
        </div>
      </div>
    </>
  );
}

export default Twitter;
// import { makeStyles } from "@mui/styles";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   IconButton,
//   Avatar,
//   Typography,
// } from "@mui/material";
// import { red } from "@mui/material/colors";
// import { FavoriteBorderOutlined, ShareOutlined } from "@mui/icons-material";

// const TwitterPost = () => {
//   const useStyles = makeStyles((theme) => ({
//     root: {
//       maxWidth: 600,
//       margin: "auto",
//       marginTop: theme.spacing(2),
//     },
//     avatar: {
//       backgroundColor: red[500],
//     },
//     content: {
//       paddingTop: 0,
//       paddingBottom: theme.spacing(1),
//     },
//     actions: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
//   }));
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={<Avatar className={classes.avatar}>T</Avatar>}
//         title="Twitter"
//         subheader="March 11, 2023"
//       />
//       <CardContent className={classes.content}>
//         <Typography variant="body1" color="textSecondary" component="p">
//           This is my first MUI Twitter post!
//         </Typography>
//       </CardContent>
//       <div className={classes.actions}>
//         <IconButton aria-label="add to favorites">
//           <FavoriteBorderOutlined />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareOutlined />
//         </IconButton>
//       </div>
//     </Card>
//   );
// };
// export default TwitterPost;
