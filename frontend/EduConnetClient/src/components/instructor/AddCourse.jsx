import React from 'react'
import { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Checkbox, Divider } from "antd";
import { Form, Input, Radio } from "antd";
// import axios from "../../util/AxiosInstance";
// import uploadFileToFirebase from "../../util/UploadFilesToFIreBase";
import Swal from "sweetalert2";
import AdminNavbar from '../Admin/AdminNavbar';
const { TextArea } = Input;

const plainOptions = [
    "Art & Design",
    "Business",
    "Development",
    "Finance",
    "Health & Fitness",
    "Technology",
    "Data Science",
];
const defaultCheckedList = [""];
function AddCourse() {

    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();
    const [file, setFile] = useState("");
    const [checkedList, setCheckedList] = useState(defaultCheckedList);

    const handleCancel = () => {
        close();
    };

    const onFinish = async (values) => {
        try {
            let uploadImg = "No Image";
            setConfirmLoading(true);
            if (file) {
                const response = await uploadFileToFirebase(file);
                uploadImg = response;
            }
            const response = await axios.post("course/", {
                title: values.title,
                description: values.description,
                instructor: values.instructor,
                duration: values.duration,
                coverImage: uploadImg,
                price: values.price,
                tags: checkedList,
                lessons: values.lessons.map((lesson, lessonIndex) => ({
                    title: lesson.title,
                    description: lesson.description,
                    videoUrl: lesson.video,
                    quiz: lesson.quiz.map((question, questionIndex) => ({
                        question: question.question,
                        option1: question.option1,
                        option2: question.option2,
                        option3: question.option3,
                        option4: question.option4,
                        correctAnswer: question.correctAnswer,
                    })),
                })),
            });

            if (response.status === 201) {
                console.log("Course added successfully!");
                await Swal.fire({
                    icon: "success",
                    title: "Course added successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                close();
            } else {
                console.error("Failed to add course:", response.statusText);
                await Swal.fire({
                    icon: "error",
                    title: "Failed to add course",
                    text: response.statusText,
                });
            }
        } catch (error) {
            console.error("Error adding course:", error);
            await Swal.fire({
                icon: "error",
                title: "Error",
                text: error.response.data.message,
            });
        } finally {
            setConfirmLoading(false);
        }
    };
    const onChange = (list) => {
        setCheckedList(list);
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
    };

    return (
        <div>
            <AdminNavbar/>
            <Form form={form} name="form" onFinish={onFinish} autoComplete="off">
                <div className="pb-3 font-bold text-lg"> Basic Details</div>
                <div className="pb-3">Title</div>
                <Form.Item
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: "Please input title for the course!",
                        },
                    ]}
                >
                    <Input placeholder="Course Title" />
                </Form.Item>
                <div className="pb-3"> Description</div>
                <Form.Item
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: "Please input description for the course!",
                        },
                    ]}
                >
                    <TextArea
                        placeholder="Description of the course"
                        autoSize={{
                            minRows: 2,
                            maxRows: 6,
                        }}
                    />
                </Form.Item>
                <div className="pb-3"> Instructor</div>
                <Form.Item
                    name="instructor"
                    rules={[
                        {
                            required: true,
                            message: "Please input description for the course!",
                        },
                    ]}
                >
                    <Input placeholder="Instructor" />
                </Form.Item>
                <div className="pb-3"> Duration</div>
                <Form.Item
                    name="duration"
                    rules={[
                        {
                            required: true,
                            message: "Please input total course duration!",
                        },
                    ]}
                >
                    <Input placeholder="Total course duration(hours)" type="number" />
                </Form.Item>
                <div className="pb-3"> Cover Image </div>
                <label>
                    <img
                        className=""
                        src={
                            file
                                ? URL.createObjectURL(file)
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt="avatar"
                        style={{
                            width: "120px",
                            height: "120px",
                            cursor: "pointer",
                        }}
                    />
                </label>
                <Form.Item
                    name="coverImage"
                    rules={[
                        {
                            required: true,
                            message: "Please input Cover image for the course!",
                        },
                    ]}
                >
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            setFile(file);
                        }}
                    />
                </Form.Item>
                <div className="pb-3"> Price ($)</div>
                <Form.Item
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: "Please input total price!",
                        },
                    ]}
                >
                    <Input placeholder="Total course price($)" type="text" />
                </Form.Item>
                <div className="pb-3">Tags</div>
                <Checkbox
                    indeterminate={
                        checkedList.length > 0 &&
                        checkedList.length < plainOptions.length
                    }
                    onChange={onCheckAllChange}
                    checked={checkedList.length === plainOptions.length}
                    className="pb-3"
                >
                    Check all
                </Checkbox>
                <br />
                <Checkbox.Group
                    options={plainOptions}
                    value={checkedList}
                    onChange={onChange}
                    className="pb-3"
                />
                {/* Dynamic fields lesson */}
                <div className="pb-3 font-bold text-lg"> Lessons</div>
                <Form.List name="lessons">
                    {(fields, { add: addLesson, remove: removeLesson }) => (
                        <>
                            {fields.map((lessonField, lessonIndex) => (
                                <div key={lessonField.key}>
                                    <div className="flex justify-between items-center pb-3">
                                        <h3>Lesson {lessonIndex + 1}</h3>
                                        {fields.length > 1 && (
                                            <MinusCircleOutlined
                                                onClick={() => removeLesson(lessonField.name)}
                                            />
                                        )}
                                    </div>
                                    <Form.Item
                                        {...lessonField}
                                        name={[lessonField.name, "title"]}
                                        fieldKey={[lessonField.fieldKey, "title"]}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input title for the lesson!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Lesson Title" />
                                    </Form.Item>
                                    <Form.Item
                                        {...lessonField}
                                        name={[lessonField.name, "description"]}
                                        fieldKey={[lessonField.fieldKey, "description"]}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input description for the lesson!",
                                            },
                                        ]}
                                    >
                                        <TextArea
                                            placeholder="Description of the lesson"
                                            autoSize={{ minRows: 2, maxRows: 6 }}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        {...lessonField}
                                        name={[lessonField.name, "video"]}
                                        fieldKey={[lessonField.fieldKey, "video"]}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input video URL for the lesson!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Lesson Video URL" />
                                    </Form.Item>
                                    {/* Dynamic fields for quizzes */}
                                    <div className="pb-3 font-bold text-lg">
                                        Questions and Answers
                                    </div>
                                    <Form.List name={[lessonField.name, "quiz"]}>
                                        {(quizFields, { add: addQuiz, remove: removeQuiz }) => (
                                            <>
                                                {quizFields.map((quizField, quizIndex) => (
                                                    <div key={quizField.key}>
                                                        <div className="flex justify-between items-center pb-3">
                                                            <h4>Question {quizIndex + 1}</h4>
                                                            {quizFields.length > 1 && (
                                                                <MinusCircleOutlined
                                                                    onClick={() => removeQuiz(quizField.name)}
                                                                />
                                                            )}
                                                        </div>
                                                        <Form.Item
                                                            {...quizField}
                                                            name={[quizField.name, "question"]}
                                                            fieldKey={[quizField.fieldKey, "question"]}
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: "Please input question!",
                                                                },
                                                            ]}
                                                        >
                                                            <Input placeholder="Question" />
                                                        </Form.Item>
                                                        <Form.Item
                                                            {...quizField}
                                                            name={[quizField.name, "option1"]}
                                                            fieldKey={[quizField.fieldKey, "question"]}
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: "Please input Option 1!",
                                                                },
                                                            ]}
                                                        >
                                                            <Input placeholder="Option 1" />
                                                        </Form.Item>

                                                        <Form.Item
                                                            {...quizField}
                                                            name={[quizField.name, "option2"]}
                                                            fieldKey={[quizField.fieldKey, "question"]}
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: "Please input Option 2!",
                                                                },
                                                            ]}
                                                        >
                                                            <Input placeholder="Option 2" />
                                                        </Form.Item>
                                                        <Form.Item
                                                            {...quizField}
                                                            name={[quizField.name, "option3"]}
                                                            fieldKey={[quizField.fieldKey, "question"]}
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: "Please input Option 3!",
                                                                },
                                                            ]}
                                                        >
                                                            <Input placeholder="Option 3" />
                                                        </Form.Item>
                                                        <Form.Item
                                                            {...quizField}
                                                            name={[quizField.name, "option4"]}
                                                            fieldKey={[quizField.fieldKey, "question"]}
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: "Please input Option 4!",
                                                                },
                                                            ]}
                                                        >
                                                            <Input placeholder="Option 4" />
                                                        </Form.Item>
                                                        <Form.Item
                                                            {...quizField}
                                                            name={[quizField.name, "correctAnswer"]}
                                                            fieldKey={[
                                                                quizField.fieldKey,
                                                                "correctAnswer",
                                                            ]}
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message:
                                                                        "Please select the correct answer!",
                                                                },
                                                            ]}
                                                        >
                                                            <Radio.Group>
                                                                <Radio value="option1">Option 1</Radio>
                                                                <Radio value="option2">Option 2</Radio>
                                                                <Radio value="option3">Option 3</Radio>
                                                                <Radio value="option4">Option 4</Radio>
                                                            </Radio.Group>
                                                        </Form.Item>
                                                    </div>
                                                ))}
                                                <Form.Item>
                                                    <Button
                                                        type="dashed"
                                                        onClick={() => addQuiz()}
                                                        icon={<PlusOutlined />}
                                                    >
                                                        Add Question
                                                    </Button>
                                                </Form.Item>
                                            </>
                                        )}
                                    </Form.List>
                                </div>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => addLesson()}
                                    icon={<PlusOutlined />}
                                >
                                    Add Lesson
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>

                <div className="flex felx-row justify-end gap-3">
                    <Form.Item>
                        <Button onClick={handleCancel}>Cancel</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={confirmLoading}
                        >
                            Add Course
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default AddCourse