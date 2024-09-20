import LikeIcon from "../../assets/nav/icons/LikeIcon";
import CommentsIcon from "../../assets/nav/icons/CommentsIcon";
import ViewsIcon from "../../assets/nav/icons/ViewsIcon";
import FavIcon from "../../assets/nav/icons/FavIcon";
import st from "./post.module.scss";
import { PostT } from "../../redux/slices/postsReducer";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { getPostUser } from "../../redux/slices/userReducer";

type Props = { post: PostT };

export default function Post({ post }: Props) {
  const [user, setUser] = useState({});

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostUser(post.userId)).then((res) => setUser(res.payload));
  }, []);
  return (
    <div className={st.root}>
      <div className={st.top}>
        <img src="" alt="" className={st.img} />
        <div className={st.info}>
          <h2></h2>
          <h3></h3>
          <h4></h4>
        </div>
      </div>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className={st.bottom}>
        <div className={st.left}>
          <div className={st.item}>
            <LikeIcon />
            <span>{post.reactions.likes}</span>
          </div>
          <div className={st.item}>
            <CommentsIcon />
            <span></span>
          </div>
          <div className={st.item}>
            <ViewsIcon />
            <span>{post.views}</span>
          </div>
        </div>
        <div className={st.right}>
          <FavIcon />
          <span>14</span>
        </div>
      </div>
    </div>
  );
}
