import Nav from "../../components/navBar/Nav";
import st from "./home.module.scss";
import profileImg from "../../assets/nav/Image.png";

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <Nav />
      <div className={st.home}>
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
        <div className={st.postOutput}>
          saffas
        </div>
      </div>
    </div>
  );
}
