import { Container, Text, VStack, Box, Button, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box width="100%" display="flex" justifyContent="space-between" alignItems="center" mb={8}>
        <Text fontSize="2xl" fontWeight="bold">Kive</Text>
        <Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Product
            </MenuButton>
            <MenuList>
              <MenuItem>Library</MenuItem>
              <MenuItem>Generate</MenuItem>
              <MenuItem>Search</MenuItem>
              <MenuItem>Moodboards</MenuItem>
              <MenuItem>Stories</MenuItem>
              <MenuItem>Video</MenuItem>
            </MenuList>
          </Menu>
          <Button ml={4}>Solutions</Button>
          <Button ml={4}>Pricing</Button>
          <Button ml={4}>Careers</Button>
          <Button ml={4}>Log in</Button>
          <Button ml={4} colorScheme="teal">Sign up</Button>
        </Box>
      </Box>
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">Where creative AI gets to work</Text>
        <Text fontSize="lg" textAlign="center">Kive is the all-in-one platform to generate ideas, produce professional content, organise assets and build brands with AI.</Text>
        <Button colorScheme="teal" size="lg">Get started</Button>
      </VStack>
    </Container>
  );
};

export default Index;