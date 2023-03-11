import React from "react";
import TweetCard from "react-tweet-card";
import { Container, Box } from "@mui/material";
function Twitter() {
  return (
    <>
      <Container maxWidth="sm">
        <Box>
          <TweetCard
            author={{
              name: "demi adejuyigbe",
              username: "electrolemon",
              isVerified: true,
            }}
            tweet={`4 months ago i quietly left 57 dvds of 'click' at my parents' house and they've still never noticed or mentioned it`}
            tweetImages={[
              { src: "https://pbs.twimg.com/media/BaMEhYBCAAAi6m-?format=jpg" },
            ]}
            time={new Date(2022, 10, 28, 22, 30)}
            permalink="https://twitter.com/electrolemon/status/406173363174785024"
            engagement={{
              replies: 206,
              retweets: 17600,
              likes: 128200,
            }}
            emojis={false}
            showDetails={true}
          />
        </Box>
      </Container>
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
