import headingImage from "@/assets/breakingnews.png";
import { getCurrentDate } from "@/utils/getCurrentDate";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className="w-full my-5">
      <Container>
        <Image
          className="mx-auto"
          src={headingImage}
          width={200}
          height={200}
          alt="logo"
        />
        <Typography
          variant="body2"
          color="gray"
          textAlign="center"
          className="my-2"
        >
          Journalism Without Fear or Favour
        </Typography>
        <Typography textAlign="center">{currentDate}</Typography>
      </Container>
    </Box>
  );
};

export default Header;
