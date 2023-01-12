import { VStack } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";


const Nav = () => {
    return (
        <VStack>
            <Box>
                About Me
            </Box>
            <Box>
                Projects
            </Box>
            <Box>
                Contact me
                <Box>
                    <Link href="https://www.linkedin.com/in/anjana-arun-18042ab5/" isExternal>
                        Linkedin
                    </Link>
                </Box>
            </Box>
            <Box>
                Download CV
            </Box>
        </VStack>)
}

export default Nav;