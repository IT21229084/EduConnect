import React, { useEffect, useState } from "react";
import {
  Space,
  Table,
  Button,
  Checkbox,
  Form,
  Input,
  notification,
  Modal,
} from "antd";
import axios from "axios";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "../../css/deliveryManagement.css";

const Context = React.createContext({
  name: "Default",
});

const StudentManagament = () => {
  const [selectedStudentId, setStudentId] = useState("");
  const [editMode, seteditMode] = useState(false);
  const [students, setStudents] = useState([]);
  const [api, contextHolder] = notification.useNotification();
  const [modal, contextHolderModal] = Modal.useModal();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (editMode) {
      editStudentApi(values.name, values.email, values.phone);
    } else {
      addStudentApi(values.name, values.email, values.phone);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const confirm = () => {
    modal.confirm({
      title: "Delete Student",
      icon: <ExclamationCircleOutlined />,
      content: "Are you sure",
      okText: "Yes",
      cancelText: "No",
      onOk() {
        deleteStudentApiCall();
      },
    });
  };

  const openNotification = (msg) => {
    api.open({
      message: msg,
      className: "custom-class",
      style: {
        width: "auto",
      },
    });
  };

  const deleteStudentApiCall = (event) => {
    axios
      .post("http://localhost:5050/api/delivery/deleteStudent", {
        studentId: selectedStudentId,
      })
      .then((response) => {
        openNotification("Student Deleted Successfully");
        getApi();
      });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone number",
      dataIndex: "phoneNumber",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              seteditMode(true);
              setStudentId(record._id);
              form.setFieldsValue({
                name: record.name,
                email: record.email,
                phone: record.phoneNumber,
              });
            }}>
            Edit
          </Button>

          <Button
            onClick={() => {
              setStudentId(record._id);
              confirm();
            }}
            style={{ background: "#A78364" }}
            type="primary">
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    getApi();

    //eslint-disable-next-line
  }, []);

  const getApi = () => {
    axios
      .get("http://localhost:5050/api/delivery/getStudents")
      .then((response) => {
        setStudents(response.data.data);
      });
  };

  const addStudentApi = (name, email, phone) => {
    axios
      .post("http://localhost:5050/api/delivery/addStudent", {
        name: name,
        email: email,
        phone: phone,
      })
      .then((response) => {
        form.setFieldsValue({ name: "", email: "", phone: "" });
        getApi();
      });
  };

  const editStudentApi = (name, email, phone) => {
    axios
      .post("http://localhost:5050/api/delivery/editStudent", {
        studentId: selectedStudentId,
        name: name,
        email: email,
        phone: phone,
      })
      .then((response) => {
        form.setFieldsValue({ name: "", email: "", phone: "" });
        seteditMode(false);
        getApi();
      });
  };

  return (
    <div className="container-fluid mx-5">
      <div className="mt-auto mb-auto" style={{ height: "100vh" }}>
        {contextHolder}
        {contextHolderModal}
        <h3 className="mt-3">Student Enrollment Management</h3>
        <div className="row">
          <div className="col-6">
            <Table className="mt-3" columns={columns} dataSource={students} />
          </div>
          <div className="col-6">
            <h3 className="text-center"> {editMode ? "Edit" : "Add"} Student</h3>
            <Form
              form={form}
              layout="vertical"
              name="basic"
              initialValues={{
                name: "",
                email: "",
                phone: "",
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off">
              <Form.Item
                style={{ width: 500 }}
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}>
                <Input name="name" />
              </Form.Item>

              <Form.Item
                style={{ width: 500 }}
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "The input is not valid E-mail !",
                  },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item
                style={{ width: 500 }}
                label="Phone Number"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item>
                <div className="d-flex flex-row ">
                  <Button
                    className="w-50"
                    onClick={() => {
                      form.setFieldsValue({ name: "", email: "", phone: "" });
                      seteditMode(false);
                    }}
                    type="danger"
                    htmlType="submit">
                    Clear
                  </Button>
                  <Button
                    style={{ background: "#A78364" }}
                    className="w-50"
                    type="primary"
                    htmlType="submit">
                    {editMode ? "Edit" : "Add"}
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentManagament;
