import { useCallback, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import { boardData, columnData, cardData, userData } from "../data.js";

// dnd
import { ReactSortable } from "react-sortablejs";
import Sortable from "sortablejs";

// const ColumnItem = (props) => {
//   axios
//     .get("/boards/:boardId/column")
//     .then((res) => {
//       res.data;
//       let copy = [...column, ...res.data];
//       setColumn(copy);
//     })
//     .catch(() => {
//       console.log("컬럼 불러오기 실패");
//     });

//   return column.map((column) => {
//     if (column.boardId == props.boardId) {
//       return (
//         <div key={column.columnId}>
//           <ul className="column">
//             <li className="column-list">
//               <h3>{column.name}</h3>
//               <CardItem columnId={column.position} />
//             </li>
//           </ul>
//           <button className="card-create-btn">카드추가</button>
//         </div>
//       );
//     }
//   });
// };

const ColumnItem = (props) => {
  const [column, setColumn] = useState(columnData);

  function handleCreateCard(e) {
    console.log(e.target.parentElement);
  }

  useEffect(() => {
    const columns = document.querySelectorAll(".column-container");
    columns.forEach((column) => {
      new Sortable(column, {
        animation: 150,
        ghostClass: "blue-background-class",
        // onUpdate({ oldIndex, newIndex }) {
        //index update 코드 작성
        //axios.put('/api/v1/cards/index', { oldIndex, newIndex });
        // }
      });
    });
  });

  return column.map((column, i) => {
    if (column.boardId == props.boardId) {
      return (
        <div key={column.columnId}>
          <ul className="column">
            <li className="column-list">
              <h3>{column.name}</h3>
              <div className="card-container">
                <CardItem columnId={column.columnId} />
              </div>
              <button className="card-create-btn" onClick={handleCreateCard}>
                카드추가
              </button>
            </li>
          </ul>
        </div>
      );
    }
  });

  // return columnData.map((column, i) => {
  //   if (column.boardId == props.boardId) {
  //     return (
  //       <div key={column.columnId}>
  //         <ul className="column">
  //           <li className="column-list">
  //             <h3>{column.name}</h3>
  //             <CardItem columnId={column.columnId} />
  //           </li>
  //         </ul>
  //         <button className="card-create-btn">카드추가</button>
  //       </div>
  //     );
  //   }
  // });
};

// ReactSortable 사용한 카드아이템
const CardItem = (props) => {
  const [items, setItems] = useState(cardData);
  console.log(props);

  useEffect(() => {
    let cardList = items.map((card, i) => {
      if (card.columnId == props.columnId) {
        return (
          <ul className="card" key={i}>
            <li className="card-list">
              <p>{card.description}</p>
            </li>
          </ul>
        );
      }
    });
  });

  return (
    <ReactSortable
      className="itemWrapper"
      group="shared"
      animation={200}
      delay={1}
      swap
      multiDrag
      setList={setItems}
      list={items}
    >
      {items.map((card, i) => {
        // if (card.columnId == props.columnId) {
        return (
          <ul className="card" key={i}>
            <li className="card-list">
              <p>{card.description}</p>
            </li>
          </ul>
        );
        // }
      })}
    </ReactSortable>
  );
};

//원본
// const CardItem = (props) => {

//   return cardData.map((card) => {
//     if (card.columnId == props.columnId) {
//       return (
//         <ul className="card" key={card.position}>
//           <li className="card-list">
//             <p>{card.description}</p>
//           </li>
//         </ul>
//       );
//     }
//   });
// };

const Board = () => {
  const { boardId } = useParams();
  const [board, setBoard] = useState([]);
  const [boardDescription, setBoardDescription] = useState('');
 
 
  useEffect(() => {
    async function fetchData() {
      const boards = await fetchBoardData();
      const boardsDescription = boards.map(board => board.description);
      setBoardDescription(boardsDescription);
    }
    
    fetchData(); 
  
  }, []); 
  
  
  
  
  
  

  const fetchBoardData = async () => {
    const request = await axios.get("http://localhost:3001/api/boards");
    setBoard(request.data.data);
    return request;
  };


  // const [inputValue, setInputValue] = useState("");

  // function boardDescriptionModify(e) {
  //   setBoardDescription(
  //     <input
  //       type="text"
  //       name="chageDescription"
  //       value={inputValue}
  //       onChange={onChange(e)}
  //     />
  //   );
  // }

  // const onChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  const MyBoard = () => {
    const MyBoardList = () => {
    return board.map((board) => {
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
    
    const BoardList = () => {
    return (
    <div>
    <div>
    {boardId == null || boardId == 0 ? (
    <div>
    <h1>보드 페이지입니다</h1>
    <MyBoard />
    </div>
    ) : (
    <h1 className="board-description">{boardDescription}</h1>
    )}
    <div className="column-container">
    <ColumnItem boardId={boardId} />
    </div>
    </div>
    </div>
    );
    };
    
    return (
    <div>
    <div className="board-container">
    <BoardList />
    </div>
    </div>
    );
    };
    
    export default Board;
