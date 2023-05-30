import { Button, Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const Signin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post("https://cheerful-mite-tuxedo.cyclic.app/login", form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("user login successfully");
      })
      .catch((err) => alert("something went wrong"));
  };
  return (
    <Flex borderRadius = '1rem' flexDirection={"column"} border='1px solid black' padding={'1rem'} w='35%' margin={'2rem auto'}>
      <Input
      mb='1rem'
        placeholder="Enter Your Email"
        type={"email"}
        isRequired
        name="email"
        onChange={handleChange}
      />
      <Input
      mb='1rem'
        placeholder="Enter Your Password"
        type={"password"}
        isRequired
        name="password"
        onChange={handleChange}
      />
      <Button colorScheme={'messenger'} onClick={handleSubmit}>SignUp</Button>
    </Flex>
  );
};

export default Signin;
