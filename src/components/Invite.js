import axios from "axios";
import { useEffect, useState } from "react";

const Invite = (props) => {
  const [email, setEmail] = useState("");

  async function handleInvite(e) {
    e.preventDefault();

    const inviteData = {
      email: email,
    };
    axios
      .post("http://localhost:3001/boards/:boardId/invitation", {
        inviteData,
      })
      .then((res) => {
        console.log(res.data);
        window.alert("초대 완료");
      })
      .catch((err) => {
        window.alert("초대 실패");
        console.log(err);
      });
  }

  useEffect(() => {
    document
      .querySelector(".invite-modal")
      .addEventListener("click", function (e) {
        if (e.target === document.querySelector(".invite-modal")) {
          props.setShowInviteModal(false);
        }
      });
  });

  return (
    <div className="invite-modal outer">
      <div className="invite-container inner">
        <h3>초대하기</h3>
        <form action="">
          <label htmlFor=""></label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button onClick={handleInvite}>초대</button>
        </form>
      </div>
    </div>
  );
};

export default Invite;
