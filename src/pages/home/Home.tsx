import Nav from "../../components/navBar/Nav";
import st from "./home.module.scss";
import profileImg from "../../assets/nav/Image.png";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/store";
import { getAllPosts } from "../../redux/slices/postsReducer";
import Posts from "../../components/posts/Posts";

type Props = {};

export default function Home({}: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div className={st.root}>
      <Nav />
      <div className={st.home}>
        <div className={st.postSection}>
          <div className={st.postForm}>
            <div className={st.postFormTop}>
              <img src={profileImg} alt="" />
              <input
                className={st.postInput}
                type="text"
                placeholder="What's on your mind?"
                autoFocus
              />
            </div>
          </div>
          <Posts />
        </div>
        <div className={st.rightColumn}>
          <div className={st.rightColumnContainer}>Right column</div>
        </div>
      </div>
    </div>
  );
}
