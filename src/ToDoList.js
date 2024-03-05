import React from "react";
import "./ToDoList.css";

class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newTask: "",
      newDate: "",
      checkedTasks: [], 
    };
  }

  onChangeDate = (e) => {
    this.setState({ newDate: e.target.value });
  };

  onChangeTask = (e) => {
    this.setState({ newTask: e.target.value });
  };

  ajouteTask = () => {
    if (!this.state.newDate.trim()) {
      alert("ajouter la date");
    } else if (!this.state.newTask.trim()) {
      alert("ajouter la tache");
    } else {
      const { tasks, newTask, newDate, checkedTasks } = this.state;
      const item = { text: newTask, date: newDate };
      this.setState({
        tasks: [...tasks, item],
        newTask: "",
        //checkedTasks: [...checkedTasks, false]
      });
    }
  };

  supprimerTask = (index) => {
    const updateTasks = [...this.state.tasks];
    const updateCheckedTasks = [...this.state.checkedTasks];
    updateTasks.splice(index, 1);
    updateCheckedTasks.splice(index, 1);
    this.setState({
      tasks: updateTasks,
      checkedTasks: updateCheckedTasks,
    });
  };

  handleCheckboxChange = (index) => {
    this.setState((prevState) => {
      const updatedCheckedTasks = [...prevState.checkedTasks];
      updatedCheckedTasks[index] = !updatedCheckedTasks[index];
      return { checkedTasks: updatedCheckedTasks };
    });
  };

  render() {
    return (
      <>
        <h2 >To Do List </h2>
        <div className="todo-container">
          <label className="todo-label">Entrez la date de votre tâche :</label>
          <input
            type="date"
            value={this.state.newDate}
            onChange={this.onChangeDate}
            className="todo-input"
          />
          <br />

          <label className="todo-label">Entrez votre tâche :</label>
          <input
            type="text"
            value={this.state.newTask}
            onChange={this.onChangeTask}
            className="todo-input"
          />

          <button button class="bn30" onClick={this.ajouteTask}>
            Ajouter tâche
          </button>

          {this.state.tasks.map((item, index) => (
            <div key={index} className="task-container">
              <input
                type="checkbox"
                value={item.text}
                className="item-checkbox"
                checked={this.state.checkedTasks[index]}
                onChange={() => this.handleCheckboxChange(index)}
              />
              <span className="task-details">
                <span style={{ color: " #3498db", fontWeight: "bold" }}> tache :</span>{" "}
                {item.text}<br></br>
                 <span style={{ color: " #3498db", fontWeight: "bold" }}> date :</span>{" "}
                {item.date}
              </span>
              {this.state.checkedTasks[index] && (
                <button button class="bn30" onClick={() => this.supprimerTask(index)}>supprimer</button>
              )}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ToDoList;
