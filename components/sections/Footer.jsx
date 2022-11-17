import React from "react";
import {
  Flex,
  VStack,
  Image,
  Box,
  Link,
  Heading,
  Icon,
} from "@chakra-ui/react";

import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const icons = [
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  BsPinterest,
];

const columns = [
  {
    title: "Features",
    links: ["Link Shortening", "Branded Links", "Analytics"],
  },
  { title: "Resources", links: ["Blog", "Developers", "Support"] },
  { title: "Company", links: ["About", "Our Team", "Careers", "Contact"] },
];

const Footer = () => {
  return (
    <Box bg="veryDarkViolet" py="3rem" as="footer">
      <Flex
        gap={{ base: "2.5rem", lg: "none" }}
        flexDir={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "flex-start" }}
        justify="space-between"
        margin="auto"
        maxW="1440px"
        px="1.5rem"
      >
        <Flex flexGrow={0.4}>
          <Image src="/images/logo-white.svg" />
        </Flex>
        {columns.map((col, index) => (
          <VStack align={{ base: "center", lg: "flex-start" }} key={index}>
            <Heading mb="1rem" size="md" color="white">
              {col.title}
            </Heading>
            {col.links.map((link, index) => (
              <Link color="gray.100" key={index}>
                {link}
              </Link>
            ))}
          </VStack>
        ))}
        <Flex gap={5}>
          {icons.map((icon, index) => (
            <Icon
              key={index}
              cursor="pointer"
              fontSize="1.6rem"
              as={icon}
              color="white"
              _hover={{ color: "cyan" }}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
