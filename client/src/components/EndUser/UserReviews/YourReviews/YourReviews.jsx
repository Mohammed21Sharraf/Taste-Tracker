// import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import "./YourReviews.scss";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
// import Grid from "@mui/material/Unstable_Grid2";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
// import img from "../../../../img/burger.png";
// import EditModal from "../EditModal/EditModal";
// import axios from "axios";
// import { baseURL } from "../../../../api";
// import { useParams } from "react-router-dom";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// const YourReviews = () => {
//     const [expanded, setExpanded] = React.useState(false);
//     const [modalOpen, setModalOpen] = useState(false);
//     const [yourReviewData, editReviewData] = useState([]);
//     const [updateUI, setUpdateUI] = useState(false);
//     // const id = useParams();
//     // console.log(id.id);

//     // useEffect(() => {
//     //     axios
//     //       .get(`${baseURL}/api/v1/restaurant/user-review/${id.id}`, {
//     //         withCredentials: true,
//     //       })
//     //       .then((res) => {
//     //         editReviewData(res.data);
//     //         console.log(res.data);
//     //       });
//     //   }, [updateUI, id]);
//   //   useEffect(() => {
//   //     axios
//   //       .get(`${baseURL}/api/v1/restaurant/user-review/${id.id}`, {
//   //         withCredentials: true,
//   //       })
//   //       .then((res) => {
//   //         editReviewData(res.data);
//   //         console.log(res.data);
//   //       });
//   //   }, [updateUI, id]);

//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//     };
//     return (
//         <div className="your-reviews">
//             <h2>Your Reviews</h2>
//             <Grid container spacing={{ xs: 2, md: 8 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//                 {/* {yourReviewData.map((review) => ( */}
//                     <Grid xs={2} sm={4} md={4} >
//                         <Card sx={{ maxWidth: 345 }} setUpdateUI={setUpdateUI}>
//                 <CardMedia
//                     component="img"
//                     height="194"
//                     image={img}
//                     alt="Paella dish"
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h4" component="div">
//                         Name
//                     </Typography>
//                 </CardContent>
//                 <CardActions disableSpacing>
//                     <IconButton aria-label="add to favorites">
//                         <ModeEditRoundedIcon onClick={() => setModalOpen(true)} />
//                         <EditModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
//                     </IconButton>
//                     <IconButton aria-label="share">
//                         <DeleteRoundedIcon />
//                     </IconButton>
//                     <ExpandMore
//                         expand={expanded}
//                         onClick={handleExpandClick}
//                         aria-expanded={expanded}
//                         aria-label="show more"
//                     >
//                         <ExpandMoreIcon />
//                     </ExpandMore>
//                 </CardActions>
//                 <Collapse in={expanded} timeout="auto" unmountOnExit>
//                     <CardContent>
//                         <Typography paragraph>Comment:</Typography>
//                         <Typography paragraph>
//                             comment
//                         </Typography>
//                         <Typography paragraph>Ratings: 8</Typography>
//                     </CardContent>
//                 </Collapse>
 
//   return (
//     <div className="your-reviews">
//       <h2>Your Reviews</h2>
//       <Grid
//         container
//         spacing={{ xs: 2, md: 8 }}
//         columns={{ xs: 4, sm: 8, md: 12 }}
//       >
//         {yourReviewData.map((review) => (
//           <Grid xs={2} sm={4} md={4}>
//             <Card sx={{ maxWidth: 345 }} setUpdateUI={setUpdateUI}>
//               <CardMedia
//                 component="img"
//                 height="194"
//                 image={img}
//                 alt="Paella dish"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h4" component="div">
//                   {review.name}
//                 </Typography>
//               </CardContent>
//               <CardActions disableSpacing>
//                 <IconButton aria-label="add to favorites">
//                   <ModeEditRoundedIcon onClick={() => setModalOpen(true)} />
//                   <EditModal
//                     modalOpen={modalOpen}
//                     setModalOpen={setModalOpen}
//                   />
//                 </IconButton>
//                 <IconButton aria-label="share">
//                   <DeleteRoundedIcon />
//                 </IconButton>
//                 <ExpandMore
//                   expand={expanded}
//                   //   onClick={handleExpandClick}
//                   aria-expanded={expanded}
//                   aria-label="show more"
//                 >
//                   <ExpandMoreIcon />
//                 </ExpandMore>
//               </CardActions>
//               <Collapse in={expanded} timeout="auto" unmountOnExit>
//                 <CardContent>
//                   <Typography paragraph>Comment:</Typography>
//                   <Typography paragraph>{review.comment}</Typography>
//                   <Typography paragraph>Ratings: {review.rating}</Typography>
//                 </CardContent>
//               </Collapse>
//             </Card>
//                     </Grid>
                
//             </Grid>
//         </div>
//     )
// }


// export default YourReviews;
