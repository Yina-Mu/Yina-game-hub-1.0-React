import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms?.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
          <Emoji rating_top={game.rating_top} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
