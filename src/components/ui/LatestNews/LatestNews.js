import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import topNews2 from "@/assets/top-news2.png";
import { getAllNews } from "@/utils/getAllNews";
import Image from "next/image";

const LatestNews = async () => {
  const { data } = await getAllNews();
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image
              src={data[0].thumbnail_url}
              width={800}
              height={500}
              alt="top news"
            />
          </CardMedia>
          <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded">
            {data[0].category}
          </p>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data[0].title}
            </Typography>
            <Typography gutterBottom className="my-3">
              By {data[0].author.name} - {data[0].author.published_date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data[0].details.length > 200
                ? data[0].details.slice(0, 200) + "..."
                : data[0].details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.slice(0, 4).map((news) => (
          <Grid key={news.id} item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia>
                  <Image
                    src={news.thumbnail_url}
                    width={800}
                    height={300}
                    alt="top news"
                  />
                </CardMedia>
                <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded">
                  {news.category}
                </p>
                <CardContent>
                  <Typography gutterBottom>{news.title}</Typography>
                  <Typography gutterBottom className="my-3">
                    By Rahin Hasan - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia>
              <Image src={topNews2} width={800} alt="top news" />
            </CardMedia>
            <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded">
              Technology
            </p>
            <CardContent>
              <Typography gutterBottom>
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
      </Grid>
    </Box>
  );
};

export default LatestNews;
