import React, { useEffect, useState } from "react";
import {
  Calendar,
  CheckSquare,
  List,
  Tag,
  Trash,
  Type,
  DollarSign,
  Monitor,
  Clock,
  X,
} from "react-feather";

import Modal from "../../Modal/Modal";
import Editable from "../../Editabled/Editable";

import "./CardInfo.css";
import Timer from "./Timer.js";

function CardInfo(props) {
  const colors = [
    "#a8193d",
    "#4fcc25",
    "#1ebffa",
    "#8da377",
    "#9975bd",
    "#cf61a1",
    "#240959",
  ];

  const [selectedColor, setSelectedColor] = useState();
  const [values, setValues] = useState({
    ...props.card,
  });

  const updateTitle = (value) => {
    setValues({ ...values, title: value });
  };

  const updateCompany = (value) => {
    setValues({ ...values, company: value });
  };

  const updateRate = (value) => {
    setValues({ ...values, rate: value });
  };

  const updateDesc = (value) => {
    setValues({ ...values, desc: value });
  };

  const addLabel = (label) => {
    const index = values.labels.findIndex((item) => item.text === label.text);
    if (index > -1) return;

    setSelectedColor("");
    setValues({
      ...values,
      labels: [...values.labels, label],
    });
  };

  const removeLabel = (label) => {
    const tempLabels = values.labels.filter((item) => item.text !== label.text);

    setValues({
      ...values,
      labels: tempLabels,
    });
  };

  const addTask = (value) => {
    const task = {
      id: Date.now() + Math.random() * 2,
      completed: false,
      text: value,
    };
    setValues({
      ...values,
      tasks: [...values.tasks, task],
    });
  };

  const removeTask = (id) => {
    const tasks = [...values.tasks];

    const tempTasks = tasks.filter((item) => item.id !== id);
    setValues({
      ...values,
      tasks: tempTasks,
    });
  };

  const updateTask = (id, value) => {
    const tasks = [...values.tasks];

    const index = tasks.findIndex((item) => item.id === id);
    if (index < 0) return;

    tasks[index].completed = value;

    setValues({
      ...values,
      tasks,
    });
  };

  const calculatePercent = () => {
    if (!values.tasks?.length) return 0;
    const completed = values.tasks?.filter((item) => item.completed)?.length;
    return (completed / values.tasks?.length) * 100;
  };

  const updateStartDate = (date) => {
    if (!date) return;

    setValues({
      ...values,
      date,
    });
  };

  const updateEndDate = (date) => {
    if (!date) return;

    setValues({
      ...values,
      date,
    });
  };



  useEffect(() => {
    if (props.updateCard) props.updateCard(props.boardId, values.id, values);
  }, [values]);

  return (
    <Modal onClose={props.onClose}>
      <div className="cardinfo-fTimeSheet">
        <div className="cardinfo_box-fTimeSheet">
          <div className="cardinfo_box_title-fTimeSheet">
            <Type />
            <p>Project Title</p>
          </div>
          <Editable
            defaultValue={values.title}
            text={values.title}
            placeholder="Enter Title"
            onSubmit={updateTitle}
          />
        </div>

        <div className="cardinfo_box-fTimeSheet">
          <div className="cardinfo_box_title-fTimeSheet">
            <Monitor />
            <p>Company Name</p>
          </div>
          <Editable
            defaultValue={values.company}
            text={values.company || "Add a Company Name"}
            placeholder="Enter Company Name"
            onSubmit={updateCompany}
          />
        </div>

        <div className="cardinfo_box-fTimeSheet">
          <div className="cardinfo_box_title-fTimeSheet">
            <List />
            <p>Description</p>
          </div>
          <Editable
            defaultValue={values.desc}
            text={values.desc || "Add a Description"}
            placeholder="Enter description"
            onSubmit={updateDesc}
          />
        </div>

        <div className="cardinfo_box-fTimeSheet">
          <div className="cardinfo_box_title-fTimeSheet">
            <Calendar />
            <p>Start Date</p>
          </div>
          <input
            type="date"
            defaultValue={values.date}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateStartDate(event.target.value)}
          />
        </div>

        <div className="cardinfo_box-fTimeSheet">
          <div className="cardinfo_box_title-fTimeSheet">
            <Calendar />
            <p>Due Date</p>
          </div>
          <input
            type="date"
            defaultValue={values.date}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateEndDate(event.target.value)}
          />
        </div>

        <div className="cardinfo_box-fTimeSheet">
          <div className="cardinfo_box_title-fTimeSheet">
            <DollarSign />
            <p>Rates</p>
          </div>
          <Editable
            type="number"
            defaultValue={values.rate}
            text={values.rate || "Enter Rate (per hour)"}
            placeholder="Enter Rate ($/hr)"
            onSubmit={updateRate}
          />
        </div>

          <div className="cardinfo_box_title-fTimeSheet">
            <Clock />
            <p>Set Timer</p>
          </div>
          <Timer/>

        <div className="cardinfo_box-fTimeSheet">
          <div className="cardinfo_box_title-fTimeSheet">
            <Tag />
            <p>Labels</p>
          </div>
          <div className="cardinfo_box_labels-fTimeSheet">
            {values.labels?.map((item, index) => (
              <label
                key={index}
                style={{ backgroundColor: item.color, color: "#fff" }}
              >
                {item.text}
                <X onClick={() => removeLabel(item)} />
              </label>
            ))}
          </div>
          <ul>
            {colors.map((item, index) => (
              <li
                key={index + item}
                style={{ backgroundColor: item }}
                className={selectedColor === item ? "li_active" : ""}
                onClick={() => setSelectedColor(item)}
              />
            ))}
          </ul>
          <Editable
            text="Add Label"
            placeholder="Enter label text"
            onSubmit={(value) =>
              addLabel({ color: selectedColor, text: value })
            }
          />
        </div>

        <div className="cardinfo_box-fTimeSheet">
          <div className="cardinfo_box_title-fTimeSheet">
            <CheckSquare />
            <p>Tasks</p>
          </div>
          <div className="cardinfo_box_progress-bar-fTimeSheet">
            <div
              className="cardinfo_box_progress-fTimeSheet"
              style={{
                width: `${calculatePercent()}%`,
                backgroundColor: calculatePercent() === 100 ? "limegreen" : "",
              }}
            />
          </div>
          <div className="cardinfo_box_task_list-fTimeSheet">
            {values.tasks?.map((item) => (
              <div key={item.id} className="cardinfo_box_task_checkbox-fTimeSheet">
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onChange={(event) =>
                    updateTask(item.id, event.target.checked)
                  }
                />
                <p className={item.completed ? "completed" : ""}>{item.text}</p>
                <Trash onClick={() => removeTask(item.id)} />
              </div>
            ))}
          </div>
          <Editable
            text={"Add a Task"}
            placeholder="Enter task"
            onSubmit={addTask}
          />
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;
