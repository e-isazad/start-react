import { Button, Checkbox, Form, Input } from "antd";
import React, { useContext } from "react";
import { LoginContextt, UserContext } from "../../../services/context";
import axios from "axios";
import style from './index.module.scss'
import { useNavigate } from "react-router-dom";


const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { showLogin, setShowLogin } = useContext(LoginContextt);
  const { value1, setValue1 } = useContext(LoginContextt);
  const { value2, setValue2 } = useContext(LoginContextt);
  function handleSubmit() {
    axios
      .get("https://655ed20f879575426b43fd2e.mockapi.io/api/user")
      .then((response) => {
        const datas = response.data;
  
        const matchingUser = datas.find(
          (data) => data.userName === value1 && data.password === value2
        );
  
        if (!matchingUser) {
          alert("Incorrect username or password!");
        } else {
          alert("Welcome!");
          setShowLogin(false);
          setUser(true);
          navigate('/categories');
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        alert("An error occurred while logging in.");
      });
  }

  return (
    <React.Fragment>
      <div className={style.boxs} >
        <h1 className={style.reng}>LOGIN</h1>
        <div className={style.box}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setValue1(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                  min: 7,
                },
              ]}
            >
              <Input.Password
                onChange={(e) => {
                  setValue2(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      {user && navigate('/categories')}


    </React.Fragment>
  );
}
export default Login;