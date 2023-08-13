import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateCard = (props) => {
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    document
      .querySelector(".create-card-modal")
      .addEventListener("click", function (e) {
        if (e.target === document.querySelector(".create-card-modal")) {
          props.setShowCreateModal(false);
        }
      });
  });

  async function handleCreateCard(e) {
    e.preventDefault();

    let 현재카드데이터 = "";

    const createCardData = {
      boarId: props.boardId,
      description: description,
      position: 현재카드데이터.position + 1,
      deadline: deadline,
    };

    axios
      .post("http://localhost:3000/boards/:boardId/cards", {
        createCardData,
      })
      .then((res) => {
        console.log(res.data);
        window.alert("카드 생성 완료");
      })
      .catch((err) => {
        window.alert("카드 생성 실패");
        console.log(err);
      });
  }

  return (
    <div className="outer-bg">
      <div className="create-board-modal outer">
        <div className="inner">
          <form className="create-board-form" action="POST">
            <legend className="create-board-title">카드 생성</legend>
            <p>카드 내용</p>
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <p>기한</p>
            <input
              type="date"
              name="deadline"
              onChange={(e) => {
                setDeadline(e.target.value);
              }}
            />
            <br />
            <button className="board-create-btn" onClick={handleCreateCard}>
              생성하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
