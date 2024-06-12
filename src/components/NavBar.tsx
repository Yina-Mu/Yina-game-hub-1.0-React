import { ColorModeContext, HStack, Img, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import { Fragment } from "react/jsx-runtime";

const NavBar = () => {
  return (
    <Fragment>
      <HStack justifyContent="space-between" padding="10px">
        <Img src={logo} boxSize="60px" />
        <Text fontSize="20px">
          <ColorModeSwitch />
        </Text>
      </HStack>
    </Fragment>
  );
};
export default NavBar;
