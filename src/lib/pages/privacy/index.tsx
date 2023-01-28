import { Flex, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Privacy = () => {
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
      <NextSeo title="Privacy Policy" />
      <Text fontSize="3xl" fontWeight="black">
        Privacy Policy
      </Text>
      <Text fontSize="xl" fontWeight="medium">
        1. Collection and Use of Personal Information
      </Text>
      <Text fontWeight="light">
        The Application does not collect any personal information about you. All
        payments for the subscription service are processed through the Apple
        App Store.
      </Text>
      <Text fontSize="xl" fontWeight="medium">
        2. Information Sharing and Disclosure
      </Text>
      <Text fontWeight="light">
        The developer will not share or disclose any personal or non-personal
        information with any third party, except as required by law or as
        described in this privacy policy. <br />
        <br />
      </Text>
      <Text fontSize="xl" fontWeight="medium">
        3. Security
      </Text>
      <Text fontWeight="light">
        The developer takes reasonable steps to protect any information that we
        collect from loss, misuse, and unauthorized access, disclosure,
        alteration, and destruction. <br />
        <br />
      </Text>
      <Text fontSize="xl" fontWeight="medium">
        4. Changes to this Privacy Policy
      </Text>
      <Text fontWeight="light">
        The developer may change this privacy policy from time to time. If we
        make any changes to this privacy policy, we will update the Application
        and post the new privacy policy on the Application.
        <br />
        <br />
      </Text>
      <Text fontSize="xl" fontWeight="medium">
        5. Contact Us
      </Text>
      <Text fontWeight="light">
        If you have any questions or concerns about this privacy policy, please
        contact us at team@aikeyboard.app. <br />
        <br />
      </Text>
    </Flex>
  );
};

export default Privacy;
