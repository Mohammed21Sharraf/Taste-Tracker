import React, { useState } from 'react'
import './ReviewCard.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { CardActions } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import EditModal from "../../UserReviews/EditModal/EditModal";
import img from "../../../../img/burger.png"




function ReviewCard({id, reviews, onUpdate, onDelete}) {
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 


  return (
    <Card className="review-card" elevation={3}>
      <CardMedia
        sx={{ height: 140 }}
        image={img} />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {reviews.userName}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ModeEditRoundedIcon onClick={() => setModalOpen(true)} />
          <EditModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            id={id}
            onUpdate={onUpdate}
          />
        </IconButton>
        <IconButton aria-label="share">
          <DeleteRoundedIcon onClick={() => onDelete(reviews._id)} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comment:</Typography>
          <Typography paragraph>
            {reviews.comment}
          </Typography>
          <Typography paragraph>
            Rating: {reviews.rating}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ReviewCard