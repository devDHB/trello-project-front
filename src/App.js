import "./App.css";
import React, { useState, useEffect } from "react";
// 라우터
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Board from "./routes/Board";
import LoginForm from "./components/Login";
import Navbar from "./components/Navbar";
import CreateBoard from "./components/CreateBoard.js";
// import MyBoard from "./components/MyBoard.js";
import MemberList from "./components/MemberList.js";
import Invite from "./components/Invite.js";
import MyPage from "./components/MyPage.js";
import { boardData, userData } from "./data";

// import axios from "axios";

// 타이틀 컴포넌트
const Title = () => {
  return <h2 className="title">5조5시조 - 칸반보드</h2>;
};

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  // const [showMyBoardModal, setShowMyBoardModal] = useState(false);
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showMyPageModal, setShowMyPageModal] = useState(false);

  const modalList = [
    setShowCreateModal,
    // setShowMyBoardModal,
    setShowMemberModal,
    setShowInviteModal,
    setShowMyPageModal,
  ];

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-img">
              <Title />
              <LoginForm />
            </div>
          }
        />
        <Route
          path="/board"
          element={
            <div>
              <Navbar modalList={modalList} />
              <Board boardData={boardData} />
              {showCreateModal && (
                <CreateBoard setShowCreateModal={setShowCreateModal} />
              )}
              {/* {showMyBoardModal && (
                <MyBoard
                  setShowMyBoardModal={setShowMyBoardModal}
                  boardData={boardData}
                />
              )} */}
              {showMemberModal && (
                <MemberList
                  setShowMemberModal={setShowMemberModal}
                  userData={userData}
                />
              )}
              {showInviteModal && (
                <Invite setShowInviteModal={setShowInviteModal} />
              )}
              {showMyPageModal && (
                <MyPage
                  setShowMyPageModal={setShowMyPageModal}
                  userData={userData}
                />
              )}
            </div>
          }
        >
          <Route path=":boardId" element={<Board />} />
        </Route>
        {/* //{" "}
        <Route path="/board" element={<Board />}>
          // <Route path=":boardId" element={<Board />} />
          // 
          //{" "}
        </Route> */}
        <Route path="*" element={<div>존재하지 않는 페이지 주소입니다</div>} />
      </Routes>
    </div>
  );
}

export default App;
