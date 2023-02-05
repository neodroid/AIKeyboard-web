import { Flex, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Terms = () => {
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
      <NextSeo title="Terms and Conditions" />
      <Text fontSize="3xl" fontWeight="black">
        Terms and Conditions
      </Text>
      <Text fontSize="xl" fontWeight="medium">
        1. Introductions
      </Text>
      <Text fontWeight="light">
        1.1 These terms and conditions ("Terms") govern your use of AI Keyboard
        ("Application").
        <br />
        <br />
      </Text>
      <Text fontSize="xl" fontWeight="medium">
        2. Intellectual property rights
      </Text>
      <Text fontWeight="light">
        2.1 The Application acts as a bridge to access the AI and does not own
        any intellectual property rights in the content generated by the API.
        The developer does not claim any ownership of the content generated by
        the API.
        <br />
        <br />
      </Text>
      <Text fontSize="xl" fontWeight="medium">
        3. Compliance with App Store Guidelines
      </Text>
      <Text fontWeight="light">
        3.1 By using the application, you agree to comply with all of Apple's
        guidelines and policies. You represent and warrant that you will not use
        the application in any way that is prohibited by these guidelines and
        policies.
        <br />
        <br />
      </Text>
      <Text fontSize="xl" fontWeight="medium">
        4. Subscription & Payment
      </Text>
      <Text fontWeight="light">
        4.1 The application is a subscription-based service, with a monthly fee
        of 3.99 for unlimited prompts. By subscribing to the application, you
        agree to pay the monthly fee through your iTunes account. You can cancel
        your subscription at any time through your apple account subscription
        settings.
        <br />
        <br />
        4.2 The Application reserves the right to modify the subscription fee at
        any time, with the modified fee applying to new subscribers and to
        existing subscribers upon their next renewal.
        <br />
        <br />
      </Text>
      <Text fontSize="xl" fontWeight="medium">
        5. Refund and Cancellation Policy
      </Text>
      <Text fontWeight="light">
        5.1 You can cancel your subscription at any time by going to your apple
        account subscription settings. No refund will be provided for the
        current month
        <br />
        <br />
      </Text>
      <Text fontSize="xl" fontWeight="medium">
        6. Dispute Resolution & Mediation
      </Text>
      <Text fontWeight="light">
        6.1 Any disputes arising out of or related to these Terms or the
        Application shall be resolved through mediation.
        <br />
        <br />
      </Text>
      <Text fontSize="xl" fontWeight="medium">
        7. Warranty disclaimer
      </Text>
      <Text fontWeight="light">
        7.1 The Application is provided "as is" and the developer makes no
        warranty, express or implied, regarding the Application's completeness,
        accuracy, reliability, suitability or availability.
        <br />
        <br />
      </Text>
      <Text fontSize="xl" fontWeight="medium">
        8. Changes to the App
      </Text>
      <Text fontWeight="light">
        8.1 We reserve the right to make changes to the app, including but not
        limited to adding or removing features or functionality, at any time and
        without notice.
        <br />
        <br />
      </Text>
      <Text fontSize="xl" fontWeight="medium">
        9. Termination
      </Text>
      <Text fontWeight="light">
        9.1 We may terminate or suspend your use of the app at any time, with or
        without cause, and without notice.
        <br />
        <br />
      </Text>
      <Text fontSize="xl" fontWeight="medium">
        10. Changes to the Terms
      </Text>
      <Text fontWeight="light">
        10.1 We may update these terms and conditions from time to time, so
        please check back periodically for updates.
        <br />
        <br />
        Last updated: January 28, 2023
        <br />
        <br />
        By using the AIKeyboard app, you consent to our terms and conditions.
        <br />
        <br />
      </Text>
    </Flex>
  );
};

export default Terms;
