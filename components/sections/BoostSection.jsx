import React from "react";
import { VStack, Button, Heading } from "@chakra-ui/react";

const BoostSection = () => {
  return (
    <VStack
      py="2.5rem"
      spacing="1.5rem"
      bgColor="darkViolet"
      bgImage="/images/bg-boost-desktop.svg"
    >
      <Heading color="white">Boost your links today</Heading>
      <Button
        size="lg"
        rounded={"full"}
        bg={"cyan"}
        color={"white"}
        _hover={{
          opacity: 0.7,
        }}
      >
        Get Started
      </Button>
    </VStack>
  );
};

export default BoostSection;
