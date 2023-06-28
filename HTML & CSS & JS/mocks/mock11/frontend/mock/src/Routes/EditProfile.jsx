import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [data, setData] = useState({});
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`https://cheerful-mite-tuxedo.cyclic.app/getProfile`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data.user);
        setForm(res.data.user);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    axios
      .patch(`https://cheerful-mite-tuxedo.cyclic.app/getProfile`, form, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data.user))
      .catch((err) => console.log(err));
  };
  console.log(data);
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/signin");
    localStorage.removeItem("token");
  };
  return (
    <Box>
      <Button onClick={handleLogOut} position="absolute" top="70" right={"10"}>
        Logout
      </Button>
      {data.name && (
        <Flex
          border="1px solid black"
          alignItems={"center"}
          justifyContent="center"
          padding={"1rem"}
          flexDirection="column"
          w="50%"
          margin={"1rem auto"}
        >
          <Text>Profile Details</Text>
          <Image width={"240px"} src={data.profile}></Image>
          <Text>Profile Url</Text>
          <Input
            name="profile"
            defaultValue={data.profile}
            onChange={handleChange}
          ></Input>
          <Text mb="1rem" borderRadius={"1rem"}>
            Name :
            <Input
              defaultValue={data.name}
              name="name"
              onChange={handleChange}
            />
          </Text>
          <Text mb="1rem" borderRadius={"1rem"}>
            Bio :
            <Textarea
              defaultValue={data.bio}
              name="bio"
              onChange={handleChange}
            />
          </Text>
          <Text mb="1rem" borderRadius={"1rem"}>
            Phone :
            <Input
              defaultValue={data.phone}
              name="phone"
              onChange={handleChange}
            />
          </Text>
          <Text mb="1rem" borderRadius={"1rem"}>
            Email :
            <Input
              defaultValue={data.email}
              name="email"
              onChange={handleChange}
            />
          </Text>
          <Text mb="1rem" borderRadius={"1rem"}>
            Password :
            <Input
              defaultValue={data.password}
              name="password"
              onChange={handleChange}
              type="password"
            ></Input>
            <Button colorScheme={'red'} onClick={handleClick}>Edit</Button>
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default EditProfile;
