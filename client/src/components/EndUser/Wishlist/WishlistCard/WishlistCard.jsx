import React, { useState, Fragment } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import "./WishlistCard.scss";
import EditModal from "./EditModal/EditModal";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const WishlistCard = ({ wishlist, onDelete, onUpdate }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    setModalOpen(true);
    setId(wishlist._id);
  };

  return (
    <Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={wishlist.restaurant.logo}
          alt="Paella dish"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {wishlist.restaurant.name}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <button onClick={() => onDelete(wishlist._id)}>
              <DeleteRoundedIcon />
            </button>
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
            <Typography paragraph>
              Description: {wishlist.restaurant.description}
            </Typography>
            <Typography paragraph>
              Category: {wishlist.restaurant.category}
            </Typography>
            <Typography paragraph>
              Average Order Value: {wishlist.restaurant.averageOrderValue}
            </Typography>
            <Typography paragraph>
              Preferred Food: {wishlist.preferredFood}
            </Typography>
            <button
              type="submit"
              className="wishlist-button"
              onClick={handleClick}
            >
              Edit Preferred Food
            </button>
            <a href={`reviews/` + wishlist.restaurant._id}>
              <button type="submit" className="view-button">
                view Restaurant
              </button>
            </a>
            <div>
              <EditModal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                onUpdate={onUpdate}
                id={id}
              />
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </Fragment>
  );
};

export default WishlistCard;
