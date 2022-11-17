import React from "react";

import { Flex, Box, Heading, Text, Image, VStack } from "@chakra-ui/react";

const statistics = [
  {
    image: "icon-brand-recognition.svg",
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    image: "icon-detailed-records.svg",
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    image: "icon-fully-customizable.svg",
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const Statistics = () => {
  return (
    <VStack px="1.5rem" gap="5rem">
      <VStack>
        <Heading textAlign="center" >Advanced Statistics</Heading>
        <Text textAlign="center">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Text>
      </VStack>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        align="flex-start"
        mt="4rem"
        maxW="1440px"
        gap="3rem"
      >
        {statistics.map((item, index) => (
          <VStack
            align={{ base: "center", lg: "flex-start" }}
            position="relative"
            shadow="lg"
            rounded="md"
            mt={{ base: "0", lg: `${index * 2}rem` }}
            pb="2rem"
            px="2rem"
            bg="white"
            key={index}
            transitionDuration=".3s"
            _hover={{ transform: "translateY(-.5rem)", shadow: "xl" }}
          >
            <Flex
              borderWidth={3}
              borderColor="Cyan"
              w="fit-content"
              p="1.2rem"
              rounded="full"
              bg="darkViolet"
              mt="-2rem"
              mb="1rem"
            >
              <Image maxW="2.2rem" src={`/images/${item.image}`} />
            </Flex>
            <Heading textAlign={{ base: "center", lg: "start" }} size="md">
              {item.title}
            </Heading>
            <Text
              textAlign={{ base: "center", lg: "start" }}
              color="gray"
              mt="1rem"
              lineHeight="1.7"
            >
              {item.description}
            </Text>
          </VStack>
        ))}
      </Flex>
    </VStack>
  );
};

export default Statistics;
