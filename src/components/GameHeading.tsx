import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // Games
  // Action Games
  // Xbox
  // Xbox Action Games => platform + genre + searched games
  const heading = `${gameQuery?.platform?.name || ""} ${
    gameQuery?.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginBottom={6}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
