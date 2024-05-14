import React, {
    useContext,
    Fragment,
    useEffect,
    useState,
    useMemo,
} from "react";
import { Space, Table, Tag, Button, Dropdown, notification, Modal } from "antd";
import axios from "axios";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { AutoComplete } from "antd";
import { Link } from "react-router-dom";

import "../../css/deliveryManagement.css";

const Context = React.createContext({
    name: "Default",
});

const CourseDeliveryManagement = () => {
    const [deliveries, setDeliveries] = useState([]);
    const [selectedDeliverId, setselectedDelivery] = useState("");
    const [students, setStudents] = useState([]);
    const [api, contextHolder] = notification.useNotification();
    const [selectedStudent, setSelectedStudent] = useState("");
    const [modal, contextHolderModal] = Modal.useModal();
    const [reportUrl, setreportUrl] = useState("");

    const confirm = () => {
        modal.confirm({
            title: "Delete Course Delivery",
            icon: <ExclamationCircleOutlined />,
            content: "Are you sure",
            okText: "Yes",
            cancelText: "No",
            onOk() {
                deleteDeliveryApiCall();
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

    const deleteDeliveryApiCall = (event) => {
        axios
            .post("http://localhost:5050/api/coursedelivery/deleteDelivery", {
                deliveryId: selectedDeliverId,
            })
            .then((response) => {
                openNotification("Course Delivery Deleted Successfully");
                getApi();
            });
    };

    const changeStatusToCompleted = (event) => {
        axios
            .post("http://localhost:5050/api/coursedelivery/changeStatus", {
                deliveryId: selectedDeliverId,
                status: {
                    enrolled: false,
                    inprogress: false,
                    completed: true,
                },
            })
            .then((response) => {
                openNotification("Course Delivery Status Changed Successfully");
                getApi();
            });
    };

    const changeStatusToEnrolled = (event) => {
        axios
            .post("http://localhost:5050/api/coursedelivery/changeStatus", {
                deliveryId: selectedDeliverId,
                status: {
                    enrolled: true,
                    inprogress: false,
                    completed: false,
                },
            })
            .then((response) => {
                openNotification("Course Delivery Status Changed Successfully");
                getApi();
            });
    };

    const changeStatusToInprogress = (event) => {
        axios
            .post("http://localhost:5050/api/coursedelivery/changeStatus", {
                deliveryId: selectedDeliverId,
                status: {
                    enrolled: false,
                    inprogress: true,
                    completed: false,
                },
            })
            .then((response) => {
                openNotification("Course Delivery Status Changed Successfully");
                getApi();
            });
    };

    const generateReports = (event) => {
        // used to making HTTP request fro the node.js
        axios
            .post("http://localhost:5050/api/coursedelivery/generateReport", {})
            .then((response) => {
                console.log(response);
                setreportUrl(response.data.data);
            });
    };

    const assignStudentApi = (deliveryId, driverId, name) => {
        axios
            .post("http://localhost:5050/api/coursedelivery/assignStudent", {
                deliveryId: deliveryId,
                studentId: driverId,
                studentName: name,
            })
            .then((response) => {
                openNotification("Student Assigned Successfully");
                getApi();
            });
    };
    const items = [
        {
            key: "1",
            label: <div onClick={changeStatusToInprogress}>In Progress</div>,
        },
        {
            key: "2",
            label: <div onClick={changeStatusToEnrolled}>Enrolled</div>,
        },
        {
            key: "3",
            label: <div onClick={changeStatusToCompleted}>Completed</div>,
        },
    ];

    const columns = [
        {
            title: "Course Delivery ID",
            dataIndex: "deliveryId",
            key: "name",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Course",
            dataIndex: "courseName",
        },
        {
            title: "Studnt",
            dataIndex: "studentId",
        },
        {
            title: "Tracking ID",
            dataIndex: "trackingId",
        },
        {
            title: "Status",
            dataIndex: "status",
        },

        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <AutoComplete
                        style={{
                            width: 150,
                        }}
                        options={students}
                        placeholder="Assign Student"
                        filterOption={(inputValue, option) =>
                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                            -1
                        }
                        onSelect={(value, label) => {
                            assignStudentApi(record.deliveryId, label.data, value);
                        }}
                    />

                    <Dropdown
                        onOpenChange={() => {
                            setselectedDelivery(record.deliveryId);
                        }}
                        menu={{
                            items,
                        }}
                        placement="bottom"
                        arrow>
                        <Button primary>Change Status</Button>
                    </Dropdown>
                    <Button
                        style={{ background: "#A78364" }}
                        onClick={() => {
                            setselectedDelivery(record.deliveryId);
                            confirm();
                        }}
                        type="primary">
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];
    useEffect(() => {
        getApi();
        getStudentsApi();
        generateReports();
        //eslint-disable-next-line
    }, []);

    const getApi = () => {
        axios
            .get("http://localhost:5050/api/coursedelivery/getCourseDeliveries")
            .then((response) => {
                setDeliveries(response.data.data);
            });
    };

    const getStudentsApi = () => {
        axios
            .get("http://localhost:5050/api/coursedelivery/getStudents")
            .then((response) => {
                let students = [];

                response.data.data.map((data) => {
                    students.push({
                        value: data.name,
                        data: data._id,
                    });
                });

                setStudents(students);
            });
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="mt-auto mb-auto">
                {contextHolder}
                {contextHolderModal}
                <div className="d-flex flex-row justify-content-between">
                    <h3 className="mt-3">Course Delivery Management</h3>{" "}
                    <Link
                        style={{
                            backgroundColor: "#A78364",
                            border: "none",
                            color: "white",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "inline-block",
                            fontSize: "14px",
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            borderRadius: "10px",
                        }}

                        // Generate report 
                        className="mt-5"
                        to={reportUrl}
                        target="_blank"
                        download>
                        Generate reports
                    </Link>
                </div>
                <Table className="mt-3" columns={columns} dataSource={deliveries} />
            </div>
        </div>
    );
};

export default CourseDeliveryManagement;
