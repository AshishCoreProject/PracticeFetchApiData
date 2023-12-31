import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
function MenuList({ foodItem, foodImg }) {
  return (
    <>
      <div className="p-2 px-4">
        <Card sx={{ maxWidth: 345, padding: "8px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="120"
              image={foodImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {foodItem}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}

export default MenuList;
