import { Box } from "@chakra-ui/react";


const Header = () => {
    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="cyan.500"
            h="50px"
        >
            
            
                THis is header

        </Box>);
}

export default Header;