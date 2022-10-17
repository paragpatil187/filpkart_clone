import { Box, makeStyles, Typography, Button, Grid } from "@material-ui/core";
import { ConstructionOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementitem,
  deleteCart,
  incrementitem,
  removeallcart,
} from "../../redux/data/action";

// import "./cart.css";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";


const useStyle = makeStyles(theme => ({
  component: {
      // marginTop: 55,
      padding: '30px 135px',
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
          padding: '15px 0'
      }
  },
  leftComponent: {
      // width: '67%',
      paddingRight: 15,
      [theme.breakpoints.down('sm')]: {
          marginBottom: 15
      }
  },
  header: {
      padding: '15px 24px',
      background: '#fff',
      marginTop:"70px"
  },
  bottom: {
      padding: '16px 22px',
      background: '#fff',
      boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
      borderTop: '1px solid #f0f0f0'
  },
  placeOrder: {
      display: 'flex',
      marginLeft: 'auto',
      background: '#fb641b',
      color: '#fff',
      borderRadius: 2,
      width: 250,
      height: 51
  }
}));

const Cart = () => {
  const classes = useStyle();
  const [tprice, setTprice] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  const cartproducts = useSelector((state) => state.data.cart);

  const RemoveItem = (idx) => {
    dispatch(decrementitem(idx));
  };
  const Additem = (idx) => {
    dispatch(incrementitem(idx));
  };

  const handlecartRemove = (idx) => {
    const filterdata = cartproducts.filter((e) => {
      return e.id != idx;
    });
    console.log(filterdata);
    dispatch(deleteCart(idx));
  };
  const handlecartDelete = () => {
    dispatch(removeallcart());
  };

  let x = cartproducts;
  return (
    <>
      {x.length ? (
        <Grid container className={classes.component}>
          <Grid
            item
            lg={9}
            md={9}
            sm={12}
            xs={12}
            className={classes.leftComponent}
          >
            <Box className={classes.header}>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({x?.length})
              </Typography>
            </Box>
            {x.map((e) => (
              <CartItem item={e} removeItemFromCart={handlecartRemove} />
            ))}

            <Box className={classes.bottom}>
              <Button
                // onClick={() => buyNow()}
                variant="contained"
                className={classes.placeOrder}
              >
                Place Order
              </Button>
            </Box>

            <Grid item lg={3} md={3} sm={12} xs={12}>
              <TotalView cartItems={x} />
            </Grid>
          </Grid>
          {/* <Button className={classes.remove} onClick={() => handlecartDelete()}>
            Remove All cart items
          </Button> */}
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
