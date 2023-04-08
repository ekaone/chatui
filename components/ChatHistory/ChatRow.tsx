import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { IMessages } from "@/shared/types";

const ChatRow = ({ id, name, message, time }: IMessages) => {
  return (
    <Flex
      key={id}
      py={4}
      px={8}
      w="full"
      alignItems="center"
      borderBottomColor="gray.100"
      borderBottomWidth={1}
      style={{ transition: "background 300ms" }}
      _hover={{ bg: "gray.50", cursor: "pointer" }}
    >
      <Box rounded="full" bg="gray.100" minW={14} minH={14} />
      <VStack
        overflow="hidden"
        flex={1}
        ml={3}
        spacing={0}
        alignItems="flex-start"
      >
        <Heading fontSize={12} w="full">
          {name}
        </Heading>
        <Text
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          w="full"
          fontSize="xs"
          color="gray.500"
        >
          {message}
        </Text>
      </VStack>
      <Text ml={3} fontSize="xs" color="gray.500">
        {time}
      </Text>
    </Flex>
  );
};

export default ChatRow;
