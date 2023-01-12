import { Avatar, Text, Heading, Box,VStack } from "@chakra-ui/react";


const greeting = "Hello! My name is Anjana Arun."

const bio = "I studying masters in computer science at RPTU. I have 4 years of experience in software development."



const Body = () => {
    return (
        <Box p='70px'>
            <VStack spacing={4}>
                <Avatar src='' size={"xl"} />
                <Text color="white" size="md">{greeting}</Text>
                <Heading color="white" size="md">{bio}</Heading>
            </VStack>
        </Box>
    )
}

export default Body;