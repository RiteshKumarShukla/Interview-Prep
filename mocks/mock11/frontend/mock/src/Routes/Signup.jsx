import { Button, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import {PhoneIcon} from '@chakra-ui/icons'
const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if(form.email && form.password){
        axios
          .post("https://cheerful-mite-tuxedo.cyclic.app/register", form)
          .then((res) => alert("User registered successfully"))
          .catch((err) => alert("something went wrong"));

    }
    else{
        alert('please fill all details')
    }
  };
  return (
    <Flex borderRadius = '1rem' flexDirection={"column"} border='1px solid black' padding={'1rem'} w='35%' margin={'2rem auto'}>
      <Input
      mb='1rem'
        placeholder="Enter Your Email"
        type={"email"}
        required
        name="email"
        onChange={handleChange}
      />
    
      <Input
      mb='1rem'
        placeholder="Enter Your Password"
        type={"password"}
        required
        name="password"
        onChange={handleChange}
      />
      <Button colorScheme={'green'} onClick={handleSubmit}>SignUp</Button>
    </Flex>
  );
};

export default Signup;
