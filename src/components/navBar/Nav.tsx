import logo from "../../assets/logo.png";
import search from "../../assets/nav/Search.svg";
import bookmark from "../../assets/nav/Bookmark.svg";
import notification from "../../assets/nav/notification.svg";
import ellipse from "../../assets/nav/Ellipse 1.svg";
import profileImg from "../../assets/nav/Image.png";
import st from "./nav.module.scss";

type Props = {};

export default function Nav({}: Props) {
  return (
    <div className={st.navbar}>
      <a href="">
        <img src={logo} alt="" />
      </a>

      <ul className={st.navMenu}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Network</a>
        </li>
        <li>
          <a href="">Events</a>
        </li>
      </ul>

      <div className={st.icons}>
        <img src={search} alt="" />
        <img src={bookmark} alt="" />
        <div className={st.notificationAndEllipse}>
          <img src={notification} alt="" />
          <img src={ellipse} alt="" />
        </div>
        <img src={profileImg} alt="" />
      </div>
    </div>
  );
}
