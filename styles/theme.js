import { extendTheme } from "@chakra-ui/react";

const colors = {
  cyan: "hsl(180, 66%, 49%)",
  darkViolet: "hsl(257, 27%, 26%)",
  red: "hsl(0, 87%, 67%)",
  grayColor: "hsl(0, 0%, 75%)",
  grayishViolet: "hsl(257, 7%, 63%)",
  veryDarkBlue: "hsl(255, 11%, 22%)",
  veryDarkViolet: "hsl(260, 8%, 14%)",
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: "poppins",
    body: "poppins",
  },
});

export default theme;
