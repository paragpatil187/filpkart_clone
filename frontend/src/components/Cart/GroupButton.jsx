import React, { useState } from "react";
import { ButtonGroup, Button, makeStyles } from "@material-ui/core";
import { decrementitem, incrementitem } from "../../redux/data/action";
import { useDispatch } from "react-redux";

const useStyle = makeStyles({
  component: {
    marginTop: 30,
  },
  button: {
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "blue",
      color: "white",
    },
  },
});

const GroupedButton = ({ item }) => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const [counter, setCounter] = useState(1);

  const RemoveItem = (idx) => {
    dispatch(decrementitem(idx));
  };
  const Additem = (idx) => {
    dispatch(incrementitem(idx));
  };

  return (
    <ButtonGroup className={classes.component}>
      <Button
        className={classes.button}
        onClick={() => RemoveItem(item.id)}
        disabled={item.quantity === 0}
      >
        -
      </Button>

      <Button disabled>{item.quantity}</Button>
      <Button className={classes.button} onClick={() => Additem(item.id)}>
        +
      </Button>
    </ButtonGroup>
  );
};

export default GroupedButton;
