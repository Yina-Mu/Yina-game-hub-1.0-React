import { HStack, Img, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <HStack>
      <Img src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};
export default NavBar;
