import { ColorModeContext, HStack, Img, Stack, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import { Fragment } from "react/jsx-runtime";
import { FaSearchLocation } from "react-icons/fa";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <Fragment>
      <HStack padding="10px">
        <Img src={logo} boxSize="50px" />
        <Stack>
          <Text fontSize="30px" fontWeight="bold">
            Nav Bar: This is a{" "}
            <span
              style={{ color: "orange", fontSize: "35px", fontStyle: "italic" }}
            >
              second-handed
            </span>{" "}
            store.
          </Text>
          <SearchInput onSearch={onSearch} />
        </Stack>
        <ColorModeSwitch />
      </HStack>
    </Fragment>
  );
};
export default NavBar;
