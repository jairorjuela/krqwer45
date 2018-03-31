import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {

  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: '',
      temp: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTask: event.target.value
    });
  }

  handleSubmit(event) {
    if(this.state.newTask === ""){
      this.setState({
        categorie: "error"
      });
      event.preventDefault();
    }else{
    this.state.tasks.push({name: this.state.newTask, done: false})
    this.setState({
      tasks: this.state.tasks,
      newTask: "",
    });
    event.preventDefault();
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) =>
              <li key={task.id} className={task.done ? "done" : null } >
                {task.name}
              </li>)
            }
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.handleChange} className={this.state.categorie} />
          </form>
        </div>
      </div>
    )
  }


}

export default App;
