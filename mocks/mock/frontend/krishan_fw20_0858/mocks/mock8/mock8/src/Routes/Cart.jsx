import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DELETE_CART } from "../redux/CartReducer/CartActionTypes";
import { ADD_ORDER } from "../redux/OrderReducer/OrderActionTypes";

const Cart = () => {
  const { cart } = useSelector((store) => store.cart);
  const [total, setTotal] = useState(
    cart.reduce((ac, el) => ac + el.price, 0) + 50
  );

  const [val, setVal] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDec = (el) => {
    setVal((val) => val - 1);
    setTotal(total - el);
  };

  const handleInc = (el) => {
    setVal((val) => val + 1);
    setTotal(total + el);
  };
  const handlePlace = () => {
    alert("Your order has been successfully placed");
    dispatch({ type: ADD_ORDER, payload: { total } });
    dispatch({ type: DELETE_CART });
    navigate("/orders");
  };
  return (
    <>
      <Flex justifyContent={"space-evenly"}>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
          }}
          p="1rem"
          gap="1rem"
          w="70%"
        >
          {cart &&
            cart.map((el, ind) => {
              return (
                <Box
                  key={ind}
                  p="1rem"
                  borderRadius={"1rem"}
                  bgGradient="linear(45deg, lightblue,white,lightblue)"
                >
                  <Image src={el.image} w="90%" marginInline={"auto"} />
                  <Text
                    padding={".7rem"}
                    mt="1rem"
                    mb=".7rem"
                    borderRadius={"1rem"}
                    border="1px solid black"
                  >
                    Brand : {el.brand}
                  </Text>
                  <Text
                    padding={".7rem"}
                    mb=".7rem"
                    border="1px solid black"
                    borderRadius={"1rem"}
                  >
                    Title : {el.title}
                  </Text>
                  <Text
                    padding={".7rem"}
                    mb=".7rem"
                    border="1px solid black"
                    borderRadius={"1rem"}
                  >
                    Category : {el.category}
                  </Text>
                  <Text
                    padding={".7rem"}
                    mb=".7rem"
                    border="1px solid black"
                    borderRadius={"1rem"}
                  >
                    Mrp : {el.price}
                  </Text>
                  <Button
                    isDisabled={val === 1}
                    onClick={() => handleDec(el.price)}
                  >
                    -
                  </Button>
                  {val}
                  <Button onClick={() => handleInc(el.price)}>+</Button>
                </Box>
              );
            })}
        </Grid>
        <Flex flexDirection={"column"} w="25%" justifyContent={"center"}>
          <Text
            border="1px solid black"
            padding="1rem"
            borderRadius={"1rem"}
            mb="1rem"
            fontSize={"xl"}
            fontWeight={"bold"}
            fontStyle="italic"
          >
            Order Summary
          </Text>
          <Text
            border="1px solid black"
            padding="1rem"
            borderRadius={"1rem"}
            mb="1rem"
          >
            Total Price{" "}
          </Text>
          <Text
            border="1px solid black"
            padding="1rem"
            borderRadius={"1rem"}
            mb="1rem"
          >
            Your Items + 50rs for delivery{" "}
          </Text>
          <Text
            border="1px solid black"
            padding="1rem"
            borderRadius={"1rem"}
            mb="1rem"
          >
            Total is {total}
          </Text>
          <Button bgColor={"lightCoral"} onClick={handlePlace}>
            Place Order
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Cart;
