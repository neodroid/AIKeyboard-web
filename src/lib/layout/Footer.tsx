import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
      ©{new Date().getFullYear()} - AI Keyboard by{" "}
        <Link 
          href="https://twitter.com/kevinahmad" 
          isExternal rel="noopener noreferrer" 
          textDecoration="underline">
          Kevin
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
