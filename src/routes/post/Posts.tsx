import { useParams } from "react-router-dom";
import { FullPost } from "../../components/FullPost";

export function Posts() {
  const { id } = useParams<{ id: string }>();
  return <FullPost id={id as string} />;
}
