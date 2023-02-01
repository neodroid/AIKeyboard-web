import {
  Button,
  Flex,
  FormControl,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import type { SetStateAction } from "react";
import { useRef, useState } from "react";
// import Banner from "../../components/Banner"
import { FiInfo } from "react-icons/fi";

const Home = () => {
  const initialRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userEmail, setUserEmail] = useState("");
  const handleChange = (event: { target: { value: SetStateAction<string> } }) =>
    setUserEmail(event.target.value);
  const handleClick = async () => {
    try {
      await fetch("https://callisto-api.vercel.app/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }),
      });
      // const data = await response.json();
      // console.log(data);
    } catch (error) {
      // console.error(error);
    }
    onClose();
  };
  return (
    <>
      {/* <Banner/> */}
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
          <Text fontSize="xl" fontWeight="light" textAlign="center">
            Generate anything at your keyboard
          </Text>
          <Flex mt="10">
            <Icon as={FiInfo} boxSize="6" />
            <Text textAlign="center">
              We are currently on Apple Appstore submission review!
            </Text>
          </Flex>
          <Button mt="5" p="7" onClick={onOpen}>
            Add me to the waitlist!
          </Button>
          <Text fontWeight="hairline" mt="5" textAlign="center">
            We will give you an email notification when the keyboard is live if
            you're on the waitlist!
          </Text>
          <Image src="demo.gif" borderRadius="20" maxW="90%" mt="50" />
          <Flex mt="50" justifyContent="space-evenly">
            <Flex mr="10">
              <Link href="/terms">Terms and Conditions</Link>
            </Flex>
            <Flex>
              <Link href="/privacy">Privacy Policy</Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter your email</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                value={userEmail}
                onChange={handleChange}
                ref={initialRef}
                placeholder="email"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClick}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
