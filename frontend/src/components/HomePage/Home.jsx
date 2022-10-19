import { Box, makeStyles } from "@material-ui/core";
import Banner from "./Banner";

import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
import Slide from "./Slide";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // hooks
import storeData, { addCart } from "../../redux/data/action";
import Navbar from "../Header/Navbar";
import NavBarHeader from "./NavBarHeader";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
});

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyle();
  useEffect(() => {
    fetch("https://serverfakeappparag.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => dispatch(storeData(res)))
      .catch((err) => console.log(err));
  }, []);

  const data = useSelector((state) => state.data.data);

  console.log(data);

  return (
    <>
      <NavBarHeader />
      <Box className={classes.component}>
        <Banner />
        <MidSlide products={data} />
        <MidSection />
        <Slide
          data={data}
          title="Discounts for You"
          timer={false}
          multi={true}
        />
        <Slide data={data} title="Suggested Items" timer={false} multi={true} />
        <Slide data={data} title="Top Selection" timer={false} multi={true} />
        <Slide
          data={data}
          title="Recommended Items"
          timer={false}
          multi={true}
        />
      </Box>
    </>
  );
};

export default Home;
