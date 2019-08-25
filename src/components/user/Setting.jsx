// 设置模块页面
import React, { useState, useEffect, useContext } from "react";
import "../../styles/user/setting.css";
// 登录
const SignIn = ({}) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="info">
      <div className="mb10">
        用户名：
        <input
          type="text"
          value={username}
          onChange={e => setUserName(e.target.value)}
        />
      </div>
      <div className="mb10">
        密码：
        <input
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button>确认</button>
    </div>
  );
};
// 注册
const SignUp = ({ signUp = () => {}, user, history }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  // 注册提交函数
  const submit = () => {
    signUp(username, password);
  };
  return (
    <div className="info">
      <div className="mb10">
        用户名：
        <input
          type="text"
          value={username}
          onChange={e => setUserName(e.target.value)}
        />
      </div>
      <div className="mb10">
        密码：
        <input
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="mb10">
        确认密码：
        <input
          type="text"
          value={password2}
          onChange={e => setPassword2(e.target.value)}
        />
      </div>
      <button onClick={submit}>确认</button>
    </div>
  );
};

const Setting = ({ signUp = () => {}, signOut = () => {}, user = {} }) => {
  const [signType, setSignType] = useState("signUp");
  const isSigned = user.access_token ? true : false;

  const signContent = (
    <div className="my-setting">
      <ul>
        <li
          onClick={() => {
            setSignType("signIn");
          }}
        >
          登录
        </li>
        <li
          onClick={() => {
            setSignType("signUp");
          }}
        >
          注册
        </li>
      </ul>
      {signType === "signIn" ? (
        <SignIn />
      ) : (
        <SignUp signUp={signUp} user={user} />
      )}
    </div>
  );

  const unsignedContent = (
    <div className="sign-out" onClick={signOut}>
      退出
    </div>
  );

  return isSigned ? unsignedContent : signContent;
};

export default Setting;
