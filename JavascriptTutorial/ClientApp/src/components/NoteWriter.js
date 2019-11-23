import React, {
  Component
} from 'react';

export class NoteWriter extends Component {
  static displayName = NoteWriter.name;

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      value: ''
    };
  }

  addNote = () => {
    if (this.state.value) {
      this.setState({
          notes: [...this.state.notes, this.state.value],
          value: ''
          });
      }
      else {
        alert("haha note is empty haha");
      }
    }

    handleChange = (event) => {
      this.setState({
        value: event.target.value
      });
    }

    render() {
      return (
        <div>
        <h1>NoteWriter</h1>

        <p>This is a simple example of a React component that takes notes.</p>
        <ol>
          {
            this.state.notes.map((item) => 
              <li key={item}> {item} </li>
            )
          }
        </ol>

        <br/>
        <br/>
        <br/>
        <label> New note: </label>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="btn btn-primary" onClick={this.addNote}>Add Note</button>
      </div>
      );
    }
  }