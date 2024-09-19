import st from "./footer.module.scss";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className={st.footerContainer}>
      <p>© 2023 ABC</p>
      <div className={st.footerLinks}>
        <li>
          <a href="">Footer link</a>
        </li>
        <li>
          <a href="">Footer link</a>
        </li>
        <li><a href="">Footer link</a></li>
        <li><a href="">Footer link</a></li>
      </div>
      <div className={st.privacy}>
        <li>Privacy Policy </li>
        <li>Terms and Conditions</li>
      </div>
    </div>
  );
}
