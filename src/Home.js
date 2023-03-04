import "./output.css"
import Card from './component/Card';
import { useSelector,useDispatch } from "react-redux";
import NoResult from "./assest/result.svg"
import Footer from './component/Footer';
import { Typography, Grid, Box } from "@mui/material";
import { filterActions } from "./redux/Filter";
import { useNavigate } from "react-router-dom";
import Body from "./component/Body"

function Home() {
 
  const dispatch = useDispatch();
  const {data } = useSelector((state) => state.filter)
  const Navigate = useNavigate();
  const cardHandler = (idx) => {
    dispatch(filterActions.Detail(idx));
    dispatch(filterActions.filterDetail())
    Navigate('/detail')
  }
  return (
   
    <div  className={` z-0  relative font-sans `} >
     <Body/>

    
      <Box mx={{md:4,sm:3,xs:1,ms:2}}>
        
       
        {/* showing all data */}
        { data.length ?
          <Grid container my={4} gap={1.8}>
            {data?.map((db, idx) => (
              <Grid item key={idx} sm={5.8} md={3.8} lg={2.9} xs={12} onClick={()=>cardHandler(idx)} >
                <Card
                  data={db} 
                  key={idx}
                  />
              </Grid>
            ))}
          </Grid>
          : <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}  my={10}>
            <img width={"20%"} src={NoResult} style={{margin:"1em 0"}}/>
            <Typography>We couldn't find what you are searched for.</Typography>
            <Typography>Change the filter value.</Typography>
            <Typography>Or try searching again.</Typography>
          </Box>}
      </Box>

      
      <div className={`bg-white  w-full `}>
        <hr className="w-full  text-black" />
        <Footer />
      </div> 
    </div>
  );
}

export default Home;
