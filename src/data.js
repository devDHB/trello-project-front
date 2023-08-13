const userData = [
  {
    userId: 1,
    email: "kim@kim.com",
    name: "KIM",
    password: "1234",
    content: "hi",
  },
  {
    userId: 2,
    email: "PARK@PARK.com",
    name: "PARK",
    password: "1234",
    content: "hi",
  },
  {
    userId: 3,
    email: "LEE@LEE.com",
    name: "LEE",
    password: "1234",
    content: "hi",
  },
  {
    userId: 4,
    email: "SON@SON.com",
    name: "SON",
    password: "1234",
    content: "hi",
  },
];

const boardData = [
  {
    boardId: 1,
    userId: 1,
    color: "skyblue",
    description: "보드1",
  },
  {
    boardId: 2,
    userId: 1,
    color: "skyblue",
    description: "보드2",
  },
  {
    boardId: 3,
    userId: 2,
    color: "skyblue",
    description: "보드3",
  },
  {
    boardId: 4,
    userId: 2,
    color: "skyblue",
    description: "보드4",
  },
  {
    boardId: 5,
    userId: 3,
    color: "skyblue",
    description: "보드5",
  },
];

const columnData = [
  {
    columnId: 1,
    boardId: 1,
    name: "할 일",
    position: 1,
  },
  {
    columnId: 2,
    boardId: 1,
    name: "진행중",
    position: 2,
  },
  {
    columnId: 3,
    boardId: 1,
    name: "완료",
    position: 3,
  },
  {
    columnId: 4,
    boardId: 2,
    name: "할 일",
    position: 1,
  },
  {
    columnId: 5,
    boardId: 2,
    name: "진행중",
    position: 2,
  },
];

const cardData = [
  {
    cardId: 1,
    columnId: 1,
    description: "밥 먹기",
    position: 1,
    deadline: "2023-08-15",
  },
  {
    cardId: 2,
    columnId: 1,
    description: "수다 떨기",
    position: 2,
    deadline: "2023-08-15",
  },
  {
    cardId: 3,
    columnId: 1,
    description: "잠 자기",
    position: 3,
    deadline: "2023-08-15",
  },
  {
    cardId: 4,
    columnId: 2,
    description: "과제 하기",
    position: 1,
    deadline: "2023-08-15",
  },
  {
    cardId: 5,
    columnId: 2,
    description: "잠 자기",
    position: 2,
    deadline: "2023-08-15",
  },
];

export { boardData, columnData, cardData, userData };
