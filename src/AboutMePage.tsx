import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import AboutMe from "./contents/about-me.md";
import MarkDown from "./components/MarkDown";

export default function AboutMePage() {
  return (
    <Box pt={4} py={8} px={2} maxWidth="3xl" margin="0 auto">
      <Header title="About me" />
      <MarkDown content={AboutMe} />
    </Box>
  );
}
