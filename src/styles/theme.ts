import { extendTheme } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const projectButton = defineStyle({
  background: "gray.700",
  color: "white",
  fontWeight: 400,
  width: "fit-content",
  fontSize: "xl",
  height: "3em",
  paddingInlineStart: "1.25em",
  paddingInlineEnd: "1.25em",
  letterSpacing: "0.05em",
  _hover: {
    background: "gray.900",
  },
});

const buttonTheme = defineStyleConfig({
  variants: { project: projectButton },
});

const linkText = defineStyle({
  textDecoration: "underline",
  color: "gray.700",
  _hover: {
    color: "black",
  },
});

const textTheme = defineStyleConfig({
  variants: { link: linkText },
});

export const theme = extendTheme({
  fonts: {
    heading: "'Mukta', -apple-system, 'Helvetica Neue', serif",
    body: "'Mukta', -apple-system, 'Helvetica Neue', serif",
  },
  styles: {
    global: {
      h1: {
        color: "gray.700",
        letterSpacing: "0.025em",
        fontWeight: 600,
      },
      ".markdown": {
        h1: {
          fontSize: "3xl",
          marginTop: 4,
          ":not(:first-child)": {
            marginTop: 8,
          },
          paddingTop: 8,
          paddingBottom: 4,
          borderTopWidth: 1,
          borderTopColor: "gray.200",
        },
        h2: {
          fontSize: "2xl",
          paddingBottom: 2,
        },
        p: {
          fontSize: "lg",
          lineHeight: "tall",
          marginBottom: "1em",
        },
        a: {
          textDecoration: "underline",
        },
        ul: {
          listStyleType: "none",
          li: {
            paddingLeft: 4,
            ":not(:last-child)": {
              marginBottom: 4,
            },
            borderLeftWidth: 4,
            borderLeftColor: "gray.200",
          },
        },
      },
    },
  },
  semanticTokens: {
    colors: {
      primary: {
        default: "gray.700",
      },
      secondary: {
        default: "gray.500",
      },
    },
  },
  components: {
    Button: buttonTheme,
    Text: textTheme,
  },
});
