import { Flex, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />
      <Text>Hello makasih udh mampir mas bro</Text>
      {/* <SomeText />
      <SomeImage />
      <CTASection /> */}
    </Flex>
  );
};

export default Home;
