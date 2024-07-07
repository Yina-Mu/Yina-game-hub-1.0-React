import { ColorModeContext, HStack, Img, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import { Fragment } from "react/jsx-runtime";

const NavBar = () => {
  return (
    <Fragment>
      <HStack justifyContent="space-between" padding="10px">
        <Img src={logo} boxSize="60px" />
        <Text fontSize="30px" fontWeight="bold">
          Nav Bar: This is a{" "}
          <span
            style={{ color: "orange", fontSize: "35px", fontStyle: "italic" }}
          >
            second-handed
          </span>{" "}
          store.
        </Text>
        <ColorModeSwitch />
      </HStack>
    </Fragment>
  );
};
export default NavBar;
