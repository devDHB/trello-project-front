import { useEffect, useState } from "react";

const MemberList = (props) => {
  const [member, setMember] = useState(props.userData);

  useEffect(() => {
    fetch("/boards/:boardId/invitation", {
      headers: {
        Accept: "application / json",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    document
      .querySelector(".member-modal")
      .addEventListener("click", function (e) {
        if (e.target === document.querySelector(".member-modal")) {
          props.setShowMemberModal(false);
        }
      });
  });

  const MyMember = () => {
    return member.map((member) => {
      return <li className="member-list">{member.name}</li>;
    });
  };

  return (
    <div className="member-modal outer">
      <div className="member-container inner">
        <h3>멤버 목록</h3>
        <ul>
          <MyMember />
        </ul>
      </div>
    </div>
  );
};

export default MemberList;
