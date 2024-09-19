import st from "./profile.module.scss";

type Props = {};

export default function Profile({}: Props) {
  return (
    <div className={st.root}>
      <h1>Profile</h1>
      <div className={st.block}>Hello</div>
    </div>
  );
}
