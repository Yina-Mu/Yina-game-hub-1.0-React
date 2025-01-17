import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yello" : "grey";

  return (
    <Badge colorScheme={color} fontSize="18px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
