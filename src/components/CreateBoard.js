import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateBoard = (props) => {
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    document
      .querySelector(".create-board-modal")
      .addEventListener("click", function (e) {
        if (e.target === document.querySelector(".create-board-modal")) {
          props.setShowCreateModal(false);
        }
      });
  });

  async function handleCreateBoard(e) {
    e.preventDefault();

    const data = {
      description: description,
      color: color,
    };

    axios
      .post("http://localhost:3000/boards/", {
        data,
      })
      .then((res) => {
        console.log(res.data);
        window.alert("보드 생성 완료");
      })
      .catch((err) => {
        window.alert("보드 생성 실패");
        console.log(err);
      });
  }

  return (
    <div className="outer-bg">
      <div className="create-board-modal outer">
        <div className="inner">
          <form className="create-board-form" action="POST">
            <legend className="create-board-title">보드 생성</legend>
            <p>내용</p>
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <p>색상</p>
            <input
              type="color"
              name="color"
              onChange={(e) => {
                setColor(e.target.value);
                console.log(color);
              }}
            />
            <br />
            <button className="board-create-btn" onClick={handleCreateBoard}>
              생성하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBoard;
