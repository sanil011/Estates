import { Typography, Stack, Divider, Box, Card } from "@mui/material";
import { Fragment, useState } from "react";
import { keyframes } from "@emotion/react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import Left from "../assest/leftarrow.svg"
import Right from "../assest/rightarrow.svg"
const Cards = ({   data }) => {
  const [select, setselect] = useState(false)
  const [raise, setRaise] = useState(false)
  const [currentImage, setCurrentImage] = useState(true);
  const myEffect = keyframes`
  to{
    opacity:1;
    transform:translate(0px)
  }
`;
  

  const handleFavorite = (e) => {
    if (e && e.stopPropagation) e.stopPropagation(); 
    setselect(!select)
  }

  const handleImage = (e) => {
    if (e && e.stopPropagation) e.stopPropagation(); 
    setCurrentImage(!currentImage)
  }
  return (
    <Fragment>
      <Card
        sx={{
          animation: `${myEffect} 400ms ease-in 1 forwards`,
          opacity: 0,
          transform: "translateY(80px)",
          margin: "1em 0",
          cursor: "pointer",
        }}
        onMouseOver={() => setRaise(true)}
        onMouseLeave={() => setRaise(false)}
        raised={raise}
      >

        <Box width={"100%"} height={"200px"} position={"relative"}>
          <Box display= {`${currentImage ? "block" : " none"}`}>
          <img style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", zIndex: "900"}} src={data?.photo} />
          </Box>
          <img onClick={(e) => handleImage(e)} style={{position:"fixed",left:"5px",top:"25%",backgroundColor:"lightgray",borderRadius:"1em",zIndex:"990",display:`${raise?"block":"none"}`,cursor:"pointer"}} src={Left}/>
          <img onClick={(e) => handleImage(e)} style={{ position: "fixed", right: "5px", top: "25%", backgroundColor: "lightgray", borderRadius: "1em", zIndex: "991", display: `${raise ? "block" : "none"}`, cursor:"pointer" }} src={Right}/>
          <Box display= {`${!currentImage ? "block" : " none"}`}>
          <img style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", zIndex: "800" }} src={data?.photo1} />
         </Box>
        </Box>

        <Box  mt={.1} display={"flex"} width={"40%"} backgroundColor={`${data?.superHost?"primary.main":"#fff"}`} sx={{ borderTopRightRadius: "5px", borderBottomRightRadius: "5px" }}>
          <AutoAwesomeIcon  fontSize={"12px"} color={"white"} />
          <Typography display={`${data?.superHost ? "flex" : "none"}`} fontSize={"12px"} color={"#fff"} ml={1} > POPULAR </Typography>
        </Box>

        <Stack m={1} gap={.5} >
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Box>
              <Typography color={"primary.main"} display="flex" alignItems={"center"}>{data?.Price}$ <Typography fontSize={"14px"} color={"grey"}>/month</Typography></Typography>
            </Box>
            <Box sx={{ display: "flex", width: "2em", height: "2em", border: "1px solid lightgrey", borderRadius: "50%", alignItems: "center", justifyContent: "center" }}>
              {select ? <FavoriteIcon color="primary" onClick={(e) => handleFavorite(e)} /> : <FavoriteBorderIcon color="primary" onClick={(e) => handleFavorite(e)} />}
            </Box>
          </Box>

          <Typography fontWeight={600}>{data?.title}</Typography>
          <Typography color={"grey"}>{data?.city},{data?.country} </Typography>
          <Divider />
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography display={"flex"} fontSize={"12px"} alignItems={"center"}><HotelIcon color="primary" sx={{ marginRight: ".3em" }} /> {data?.bed} Beds</Typography>
            <Typography display={"flex"} fontSize={"12px"} alignItems={"center"}><BathtubIcon color="primary" sx={{ marginRight: ".3em" }} /> {data?.bathroom} Bathroom </Typography>
            <Typography display={"flex"} fontSize={"12px"} alignItems={"center"}><AspectRatioIcon color="primary" sx={{ marginRight: ".3em" }} /> {data?.area} m*m</Typography>
          </Stack>
        </Stack>

      </Card>
    </Fragment>
  )
}

export default Cards