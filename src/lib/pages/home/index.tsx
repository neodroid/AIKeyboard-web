import { Flex, Image, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

const Home = () => {
  return (
    <Flex
      direction="column"
      // alignItems="center"
      // justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
      // bg="red"
    >
      <NextSeo title="AI Keyboard" />
      <Flex alignItems="center" direction="column">
        <Text fontSize="4xl" fontWeight="bold">
          AI Keyboard
        </Text>
        <Text fontSize="xl" fontWeight="regular">
          Generate anything at you keyboard
        </Text>
        <Image src="demo.gif" borderRadius="20" maxW="90%" mt="50" />
        <Flex mt="50" justifyContent="space-evenly">
          <Flex mr="10">
            <Link href="/terms">Terms and conditions</Link>
          </Flex>
          <Flex>
            <Link href="/privacy">Privacy Policy</Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
