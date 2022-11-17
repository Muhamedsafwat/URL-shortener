import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function SplitScreen() {
  return (
    <Stack
      p="1.5rem"
      gap="1.5rem"
      mx="auto"
      maxW="1440px"
      my="3rem"
      align="center"
      textAlign={{ base: "center", lg: "start" }}
      direction={{ base: "column-reverse", lg: "row" }}
    >
      <Flex flex={1} align={"center"} justify={"space-between"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"} position={"relative"}>
              More than just shorter links
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </Text>
          <Stack direction={{ base: "column", lg: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"cyan"}
              color={"white"}
              _hover={{
                opacity: 0.7,
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src="/images/illustration-working.svg"
        />
      </Flex>
    </Stack>
  );
}
