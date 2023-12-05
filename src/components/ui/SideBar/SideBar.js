import sideBarNews from "@/assets/side-top-news.png";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";

const SideBar = () => {
  return (
    <Box className="my-5">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image src={sideBarNews} width={800} alt="top news" />
          </CardMedia>
          <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded">
            Technology
          </p>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Mask says Tesla Likely to accept it again
            </Typography>
            <Typography gutterBottom className="my-3">
              By Rahin Hasan - Mar 18 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SideBar;
