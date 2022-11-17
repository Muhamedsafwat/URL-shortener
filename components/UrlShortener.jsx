import React, { useState, useEffect } from "react";
import {
  Flex,
  Button,
  Input,
  Text,
  VStack,
  Link,
  Spinner,
} from "@chakra-ui/react";

const UrlShortener = () => {
  const [url, setUrl] = useState("");
  const [recents, setRecents] = useState([]);
  const [copied, setCopied] = useState(null);
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setUrl(e.target.value);
    setLoading(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (recents.map((item) => item.sentReq).includes(url)) {
      alert("URL already shortened, please try another one");
      setLoading(false);
      setUrl("");
    } else {
      try {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        if (res.ok) {
          const data = await res.json();
          const recentItem = {
            sentReq: url,
            original: data.result.original_link,
            shortened: data.result.short_link,
          };

          setRecents((recents) => [recentItem, ...recents]);
          //update local storage
          localStorage.setItem(
            "recents",
            JSON.stringify([recentItem, ...recents])
          );
          setUrl("");
          setLoading(false);
        } else {
          setLoading(false);
          setUrl("");
          alert("couldn't shorten this link");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  //check for recent shortens
  useEffect(() => {
    const checkLocalStorage = () => {
      const res = localStorage.getItem("recents");
      if (res) {
        const resArr = JSON.parse(res);
        //limiting array length to 3 to save local storage
        const slicedArr = resArr.slice(0, 3);
        localStorage.setItem("recents", JSON.stringify(slicedArr));
        setRecents(slicedArr);
      }
    };
    checkLocalStorage();
  }, []);

  //copy link
  const copyHandler = (index) => {
    const link = recents[index].shortened;
    //set the copied link
    setCopied(index);
    //return to normal button state
    setTimeout(() => {
      setCopied(null);
    }, 2000);
    //add link to clipboard
    navigator.clipboard.writeText(link);
  };

  return (
    <VStack mt="-3.5rem" spacing="1rem" w={{ base: "100%", lg: "60%" }}>
      <Flex
        w="full"
        onSubmit={submitHandler}
        as="form"
        rounded="lg"
        p="2.5rem"
        bg="darkViolet"
        bgImage="/images/bg-shorten-desktop.svg"
        gap="1rem"
        mb="1rem"
        direction={{ base: "column", lg: "row" }}
      >
        <Input
          value={url && url}
          onChange={changeHandler}
          size="lg"
          bg="white"
          placeholder="Shorten a link here..."
        />
        <Button
          type="submit"
          disabled={!url}
          size="lg"
          px="3rem"
          bg={"cyan"}
          color={"white"}
          _hover={{
            opacity: 0.7,
          }}
        >
          {loading ? <Spinner /> : "Shorten it!"}
        </Button>
      </Flex>
      {recents &&
        recents.slice(0, 3).map((item, index) => (
          <Flex
            shadow="md"
            direction={{ base: "column", lg: "row" }}
            rounded="md"
            fontWeight="bold"
            py="1rem"
            px="1.5rem"
            align={{ base: "flex-start", lg: "center" }}
            gap={2}
            bg="white"
            w="full"
            justify="space-between"
            key={index}
          >
            <Text>{item.original}</Text>
            <Flex
              gap={2}
              w={{ base: "full", lg: "fit-content" }}
              direction={{ base: "column", lg: "row" }}
            >
              <Link fontWeight="bold" color="cyan">
                <a target="_blank" href={`https://${item.shortened}`}>
                  {item.shortened}
                </a>
              </Link>
              <Button
                disabled={index == copied}
                onClick={() => copyHandler(index)}
                size="sm"
                px="1.2rem"
                bg={"cyan"}
                color={"white"}
                _hover={{
                  opacity: 0.7,
                }}
              >
                {index == copied ? "Copied!" : "Copy"}
              </Button>
            </Flex>
          </Flex>
        ))}
    </VStack>
  );
};

export default UrlShortener;
