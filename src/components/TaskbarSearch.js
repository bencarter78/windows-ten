import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

class TaskbarSearch extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <div className="flex h-full bg-gray-800 items-center px-2">
        <FontAwesomeIcon
          icon={faCircle}
          size="lg"
        />

        <input 
          className="bg-gray-800 h-full mx-2 placeholder-gray-500 text-gray-500 focus:outline-none" 
          placeholder="Ask me anything"
        />

        <FontAwesomeIcon
          icon={faMicrophone}
          className="mx-2"
        />
      </div>
    );
  };
}

export default TaskbarSearch;
