import React from "react";

import { Box, VStack } from "@chakra-ui/react";

import { UrlBox, Statistics } from "..";

const MainSection = () => {
  return (
    <VStack
      w="full"
      px="1.5rem"
      pb="5rem"
      spacing="8rem"
      mt="7rem"
      bg="gray.100"
      as="section"
    >
      <UrlBox />
      <Statistics />
    </VStack>
  );
};

export default MainSection;
