import React, {useState} from 'react'
import './ReviewCard.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { CardActions } from '@mui/material';
import img from "../../../../img/burger.png"


function ReviewCard({ id, reviews }) {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img} />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {reviews.name}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography> */}
      </CardContent>
      <CardActions>
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