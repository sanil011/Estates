
import { Typography, Stack, Divider, Grid, Button, Box, Card, Slider, Select, MenuItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react"
import InputBase from '@mui/material/InputBase';
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../redux/Filter";
import { styled } from '@mui/material/styles';

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: ` 1px solid lightgrey`,
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Filter = () => {

    const { Location, Property, When, price, price1 } = useSelector((state) => state.filter);
    const dispatch = useDispatch()
    const [inputDate, setInputDate] = useState(false);
    const [price3, setPrice3] = useState([0, 10000])
    const handleChange = (event, newValue) => {
        setPrice3(newValue);
        dispatch(filterActions.price1(newValue[1]));
        dispatch(filterActions.price(newValue[0]));
    }

    const searchHandler = () => {
        dispatch(filterActions.filter())
    }
    return (
        <Box mx={{ md: 8, sm: 6, ms: 4, xs: 2 }} mt={{ md: 6, sm: 4, ms: 3, xs: 1 }}>
            <Box display={{ xs: "none", md: "flex" }} mb={4} justifyContent={"space-between"}>
                <Typography variant='h4' fontWeight={600}>Search properties to rent</Typography>
                <Box >
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Box>
            </Box>
            <Card sx={{ border: "1px solid lightgrey", padding: ".3em" }}>
                <Box>
                    <Grid container display={"flex"} alignItems={"center"}>

                        <Grid item md={3} sm={6} lg={3} ms={6} xs={12} p={1} display={"flex"} justifyContent={"space-between"}>
                            <Box>
                                <Typography color={"grey"}>Location</Typography>
                                <Stack direction={"row"}>
                                    <input
                                        value={Location}
                                        rows={"1"}
                                        placeholder="All"
                                        onChange={(e) => dispatch(filterActions.location(e.target.value))}
                                        style={{ outline: "none", fontSize: "16px", fontWeight: "600", border: "none", maxWidth: `${Location ? "70px" : "20px"}` }} />
                                    <Typography fontWeight={600}>,India</Typography>
                                </Stack>
                            </Box>
                            <Divider sx={{ display: { xs: "none", ms: "block" } }} flexItem orientation="vertical" />
                        </Grid>

                        <Grid item md={3} sm={6} ms={6} xs={12} p={1} display={"flex"} justifyContent={"space-between"}>
                            <Box>
                                <Typography color={"grey"}>When</Typography>
                                <input type={inputDate ? "date" : "text"} onClick={() => setInputDate(true)} value={When} onChange={(e) => dispatch(filterActions.when(e.target.value))} style={{ border: "none", outline: "none" }} placeholder="Select Move in Date!!" />
                            </Box>
                            <Box display={{ md: "flex", sm: "none" }}>
                                <Divider flexItem orientation="vertical" />
                            </Box>
                        </Grid>
                        <Grid item md={2} sm={4} ms={6} xs={12} p={1} >

                            <Box>
                                <Typography color={"grey"}>Price</Typography>
                                {/* <Stack direction={"row"} alignItems={"center"}>   
                             {price ? <Typography>$</Typography> :""  }
                                  <input
                                      value = { price} 
                                      placeholder="$0"
                                      onChange={(e)=>dispatch(filterActions.price(e.target.value))}
                                      style={{ fontWeight: "600", outline: "none", fontSize: "16px", border: "none", width: "30%" }} /> <Typography fontWeight={600}>-</Typography>
                                  {price1 ? <Typography>$</Typography> : ""}
                                  <input value={price1}
                                      placeholder="$10000"
                                      onChange={(e)=>dispatch(filterActions.price1(e.target.value))}
                                      style={{ fontWeight: "600", outline: "none", border: "none", fontSize: "16px", width: "35%"}}/>
                              </Stack> */}

                                <Slider
                                    getAriaLabel={() => "Price range"}
                                    value={price3}
                                    onChange={handleChange}
                                    min={500}
                                    max={10000}
                                    valueLabelDisplay="auto"
                                />
                                <Typography color={"grey"} variant={"body2"} textAlign={"center"}>
                                    {price3[0]}$ -{price3[1]}$
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={2} sm={4} ms={6} xs={12} p={1} display={"flex"} justifyContent={"space-between"}>
                            <Box sx={{ display: { xs: "none", ms: "block" }, padding:"1em 0em", marginLeft:".4em" }} flexItem >

                            <Divider orientation="vertical" />
                            </Box>
                            <Box>
                                <Typography color={"grey"}>Property Type</Typography>
                                <Select value={Property} sx={{
                                    boxShadow: 'none',
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        border: "1px solid transparent",
                                        borderRadius: "5px 5px 0 0"
                                    },
                                    minWidth: "10em",
                                    '.MuiOutlinedInput-notchedOutline': { border: 0 }
                                }}
                                    onChange={(e) => dispatch(filterActions.property(e.target.value))} >
                                    <MenuItem value="All">All</MenuItem>
                                    <MenuItem value="Entire house">Entire house</MenuItem>
                                    <MenuItem value="Private room">Private room</MenuItem>
                                    <MenuItem value="Entire apartment">Entire apartment</MenuItem>
                                </Select>

                            </Box>
                            <Box display={{ md: "none", sm: "flex" }}>
                                <Divider flexItem orientation="vertical" />
                            </Box>
                        </Grid>

                        <Grid item md={2} sm={4} ms={6} xs={122} p={1} display={"flex"} justifyContent={{ md: "flex-end", sm: "flex-start" }}>
                            <Button
                                variant={"contained"}
                                sx={{ padding: ".3em 1em", borderRadius: "10px", fontSize: "17px" }}
                                onClick={() => searchHandler()}
                            >
                                Search
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Card>
        </Box>
    )
}

export default Filter