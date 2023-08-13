import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  async function handleSignUp(e) {
    console.log("회원가입 클릭");
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      confirm: confirmPassword,
      name: name,
      content: content,
    };
    console.log(data);

    axios
      .post("http://localhost:3001/api/user/signup", {
        data,
      })
      .then((res) => {
        console.log(res.data);
        window.alert("회원가입 성공");
        return navigate("/");
      })
      .catch((err) => {
        window.alert("회원가입 실패");
        console.log(err);
      });
  }
  async function handleSignIn(e) {
    console.log("로그인 클릭");
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3001/api/auth/login", {
        data,
      })
      .then((res) => {
        console.log(res.data);
        window.alert("로그인 성공");
        return navigate("/board/");
      })
      .catch((err) => {
        window.alert("로그인 실패");
        console.log(err);
      });
  }

  useEffect(() => {
    function resetClass(element, classname) {
      element.classList.remove(classname);
    }
    document
      .getElementsByClassName("show-signup")[0]
      .addEventListener("click", function () {
        let form = document.getElementsByClassName("form")[0];
        resetClass(form, "signin");
        form.classList.add("signup");
        document.getElementById("signup-submit-btn").style.display = "block";
        document.getElementById("signin-submit-btn").style.display = "none";
      });
    document
      .getElementsByClassName("show-signin")[0]
      .addEventListener("click", function () {
        let form = document.getElementsByClassName("form")[0];
        resetClass(form, "signup");
        form.classList.add("signin");
        document.getElementById("signup-submit-btn").style.display = "none";
        document.getElementById("signin-submit-btn").style.display = "block";
      });
  });

  return (
    <div className="form signup">
      <div className="form-header">
        <div className="show-signup">Sign Up</div>
        <div className="show-signin">Sign In</div>
      </div>
      <div className="arrow"></div>
      <form className="form-elements">
        <div className="form-element">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-element">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-element">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-element">
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-element">
          <input
            type="text"
            name="content"
            placeholder="content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <div className="form-element">
          <button id="signup-submit-btn" onClick={handleSignUp}>
            Sign Up
          </button>
          <button id="signin-submit-btn" onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
