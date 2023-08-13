import { useEffect } from "react";

const MyBoard = (props) => {
  const boardData = props.boardData;
  console.log(props);

  useEffect(() => {
    document
      .querySelector(".my-board-modal")
      .addEventListener("click", function (e) {
        if (e.target === document.querySelector(".my-board-modal")) {
          props.setShowMyBoardModal(false);
        }
      });
  });

  const MyBoardList = () => {
    return boardData.map((board) => {
      return (
        <li className="my-board-list" key={board.boardId}>
          {board.description}
        </li>
      );
    });
  };

  return (
    <div className="my-board-modal outer">
      <div className="my-board-container inner">
        <h3>내 보드 목록</h3>
        <ul>
          <MyBoardList />
        </ul>
      </div>
    </div>
  );
};

export default MyBoard;

// 해당 보드를 선택하여 불러올수 있게

// import axios from "axios";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

// const MyBoard = () => {
//   // const { userId } = useParams();
//   // const [myBoard, setMyBoard] = [];
//   const MyBoardList = () => {
//     useEffect(() => {
//       return <div>마이보드</div>;
//       // fetch("/board/:userId", {
//       //   headers: {
//       //     Accept: "application / json",
//       //   },
//       //   method: "GET",
//       // })
//       //   .then((res) => res.json())
//       //   .then((data) => {
//       //     console.log(data);
//       //   });
//       // axios
//       //   .get("/board/:userId")
//       //   .then((res) => {
//       //     let copy = [...myBoard, ...res.data];
//       //     setMyBoard(copy);
//       //   })
//       //   .catch(() => {
//       //     console.log("마이보드 불러오기 실패");
//       //   });
//       // return myBoard.map((myBoard) => {
//       //   if (myBoard.userId == userId) {
//       //     return <li className="my-board-list">{myBoard.description}</li>;
//       //   }
//       // });
//     });
//   };

//   return (
//     <div className="my-board-modal outer">
//       <div className="my-board-container inner">
//         <h3>내 보드 목록</h3>
//         <ul>
//           <MyBoardList />
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MyBoard;
