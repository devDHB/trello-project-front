import { useEffect, useState } from "react";

const MyPage = (props) => {
  const [user, setUser] = useState(props.userData);

  useEffect(() => {
    document
      .querySelector(".mypage-modal")
      .addEventListener("click", function (e) {
        if (e.target === document.querySelector(".mypage-modal")) {
          props.setShowMyPageModal(false);
        }
      });
  });

  return (
    <div className="mypage-modal outer">
      <div className="mypage-container inner">
        <h3>마이 페이지</h3>
        <form action="POST">
          <p>email</p>
          <p>{user[0].email}</p>
          <p>이름</p>
          <p>{user[0].name}</p>
          <p>하고 싶은 말</p>
          <p>{user[0].content}</p>
          <p>비밀번호 입력</p>
          <input type="password" name="password" />
          <input type="password" name="confirmPassword" />
          <button>수정</button>
        </form>
      </div>
    </div>
  );
};

export default MyPage;
