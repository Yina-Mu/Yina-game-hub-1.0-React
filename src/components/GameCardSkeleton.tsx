import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <CardBody>
        <Skeleton />
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
