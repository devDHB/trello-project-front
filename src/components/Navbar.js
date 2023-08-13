import axios from "axios";
import { Navigate } from "react-router-dom";

const Navbar = (props) => {
  function modalCreateBoard() {
    // props.modalList["setShowCreateModal"](true);
    props.modalList[0](true);
  }
  function modalMyBoard() {
    // props.modalList["setShowMyBoardModal"](true);
    props.modalList[1](true);
  }

  function modalMember() {
    // props.modalList["setShowMemberModal"](true);
    props.modalList[2](true);
  }
  function modalInvite() {
    // props.modalList["setShowInviteModal"](true);
    props.modalList[3](true);
  }
  function OnMyPage() {
    console.log("마이페이지 로드");
    props.modalList[4](true);
  }
  async function logOut() {
    await axios
      .post("/localhost:3000/auth/logout")
      .then((res) => res.json())
      .then((data) => {
        console.log("로그아웃 성공");
        console.log(data);
      });
  }

  return (
    <nav className="nav-bar">
      <ul className="menu">
        <li className="menu-list">
          <button onClick={modalCreateBoard}>보드 생성</button>
        </li>
        <li className="menu-list">
          <button onClick={modalMyBoard}>내 보드</button>
        </li>
        <li className="menu-list">
          <button onClick={modalMember}>팀원 목록</button>
        </li>
        <li className="menu-list">
          <button onClick={modalInvite}>초대</button>
        </li>
        <li className="menu-list">
          <button onClick={OnMyPage}>내 정보</button>
        </li>
        <li className="menu-list">
          <button onClick={logOut}>로그 아웃</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
