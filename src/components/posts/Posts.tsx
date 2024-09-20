import st from "./posts.module.scss";

import { useAppSelector } from "../../redux/store";
import Post from "../post/Post";

type Props = {};

export default function Posts({}: Props) {
  const { posts, postsLoading, postsError } = useAppSelector(
    (state) => state.posts
  );

  console.log(posts);
  return (
    <div className={st.root}>
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
}
