import React from "react";

class SCForm extends React.Component {
  render() {
    const { addSC } = this.props;
    return (
      <div>
        <input ref={input => (this.input = input)} />
        <button onClick={() => addSC(this.input.value)}>Add Class</button>
      </div>
    );
  }
}

export default SCForm;
