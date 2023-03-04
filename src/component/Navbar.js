import Search from './Search'
import Logo from '../assest/logo.svg';
import Body from "./Body"
import { Typography, Stack, Grid, Button } from "@mui/material";
import { filterActions } from "../redux/Filter";
import { useSelector, useDispatch } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';

const Navbar = () => {

  const dispatch = useDispatch();
  
  const { show } = useSelector((state) => state.filter)
  const navigate = useNavigate();

  const searchClickHandler = () => {
    dispatch(filterActions.Show(true));
  }
  const handleLogo = () => {
    dispatch(filterActions.Detail(false));
    dispatch(filterActions.filter());
    navigate('/');
  }

  return (
    <>

      {/* when we click to search */}
      {!show && <Grid container justifyContent={"space-between"} mt={2} mb={4} px={6} position={"relative"} >
        {/* <Grid item md={3}>
          <Link to='/'>
            <Stack direction={"row"} onClick={() => handleLogo()} alignItems={"center"} sx={{ cursor: "pointer" }}>
              <img src={Logo} width={"50px"} height={"50px"} />
              <Typography ml={1} variant={"h6"}>Estatery</Typography>
            </Stack>
          </Link>
        </Grid> */}

        <Grid item md={7} sm={7} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
          <Link to='/'>
            <Stack direction={"row"} onClick={() => handleLogo()} alignItems={"center"} sx={{ cursor: "pointer" }}>
              <img src={Logo} width={"50px"} height={"50px"} />
              <Typography ml={1} variant={"h6"}>Estatery</Typography>
            </Stack>
          </Link>



          <Typography display={{ xs: "none", md: "flex", backgroundColor:"#6C63FF",cursor:"pointer",padding:".2em 1em",borderRadius:"5px",color:"white"}}> Rent</Typography>
          <Typography display={{ xs: "none", md: "flex" }}
            sx={{
              padding: ".2em 1em", cursor: "pointer",
            '&:hover': {
              backgroundColor: "#6C63FF",  borderRadius: "5px", color: "#fff"
            },
          }}>
            Buy</Typography>
           <Typography display={{xs:"none",md:"flex"}} sx={{
            padding: ".2em 1em", cursor: "pointer",
            '&:hover': {
              backgroundColor: "#6C63FF", borderRadius: "5px", color: "#fff"
            },
          }}>Sell</Typography>
           <Typography display={{xs:"none",md:"flex"}} sx={{
            padding: ".2em 1em", cursor: "pointer",
            '&:hover': {
              backgroundColor: "#6C63FF", borderRadius: "5px", color: "#fff"
            },
          }}>Manage Property</Typography>
           <Typography display={{xs:"none",md:"flex"}} sx={{
            padding: ".2em 1em", cursor: "pointer",
            '&:hover': {
              backgroundColor: "#6C63FF", borderRadius: "5px", color: "#fff"
            },
          }}>Resources</Typography>

        </Grid>


        {/* <Grid item md={5} sm={5}  onClick={searchClickHandler}>
         
          <Search/> 
          </Grid> */}

        <Grid item md={3} sm={5} display={{ xs: "none", sm: "block" }}>
          <Stack direction={"row"} justifyContent={"space-around"}>
            <Button
              variant={"outlined"}
              sx={{
                padding: ".3em 1em", borderRadius: "10px", fontSize: "17px", '&:hover': {
                  backgroundColor: "#6C63FF",color:"#fff"
              } }}
            >
              Login
            </Button>
            <Button
              variant={"contained"}
              sx={{
                padding: ".3em 1em", borderRadius: "10px", fontSize: "17px", '&:hover': {
                  backgroundColor: "#fff", color: "#6C63FF"
                } }}
            >
              Sign Up
            </Button>
          </Stack>
        </Grid>


       
      </Grid> }

      <hr className='w-full mb-1' />

      {/* when we search */}
    
       {/* <Body/> */}
      

    </>
  )
}

export default Navbar;