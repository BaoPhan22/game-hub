import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Link,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenre";
import getCroppedImageURL from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genres) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Button
              onClick={() => onSelectedGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
