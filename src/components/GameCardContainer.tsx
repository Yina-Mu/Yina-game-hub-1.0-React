import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      height="100%"
      width="100%"
      borderRadius={60}
      overflow="hidden"
      p="10px"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
