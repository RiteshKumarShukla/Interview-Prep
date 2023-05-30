import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const GetProfile = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://cheerful-mite-tuxedo.cyclic.app/getProfile`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data.user))
      .catch((err) => console.log(err));
  }, []);
  // console.log(data);
  return (
    <Box>
      {data.name && (
        <Flex
          border="1px solid black"
          alignItems={"flex-start"}
          justifyContent="center"
          padding={"1rem"}
          flexDirection="column"
        >
          <Text fontSize={"2xl"} fontStyle="italic" mb="1rem">
            {" "}
            Profile Details
          </Text>
          <Image
            width={"240px"}
            src={data.profile}
            borderRadius="1rem"
            m="1rem"
          ></Image>
          <Flex
            justifyContent="space-between"
            w="fit-content"
            padding="1rem"
            alignItems="center"
          >
            <Text>Name</Text>
            <Input disabled defaultValue={data.name} />
          </Flex>

          <Flex
            justifyContent="space-between"
            w="fit-content"
            padding="1rem"
            alignItems="center"
          >
            <Text>Bio</Text>
            <Input disabled defaultValue={data.bio} />
          </Flex>

          <Flex
            justifyContent="space-between"
            w="fit-content"
            padding="1rem"
            alignItems="center"
          >
            <Text>Phone</Text>
            <Input disabled defaultValue={data.phone} />
          </Flex>

          <Flex
            justifyContent="space-between"
            w="fit-content"
            padding="1rem"
            alignItems="center"
          >
            <Text>Email</Text>
            <Input disabled defaultValue={data.email} />
          </Flex>

          <Flex
            justifyContent="space-between"
            w="fit-content"
            padding="1rem"
            alignItems="center"
          >
            <Text>Password</Text>
            <Input
              disabled
              defaultValue={data.password}
              type="password"
            ></Input>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default GetProfile;
