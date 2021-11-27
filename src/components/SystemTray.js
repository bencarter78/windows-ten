import dayjs from 'dayjs';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeDown, faBatteryQuarter, faWifi } from '@fortawesome/free-solid-svg-icons'
import { faCommentAltLines } from '@fortawesome/pro-regular-svg-icons'

class SystemTray extends Component {
  constructor() {
    super();

    this.time = dayjs().format('HH:mm');
    this.date = dayjs().format('DD/MM/YYYY');
  }

  render() {
    return (
      <div className="flex space-x-1.5">
        <button className="px-1 hover:bg-gray-700 cursor-default">
          <FontAwesomeIcon
            icon={faBatteryQuarter}
            size="sm"
          />
        </button>

        <button className="px-1 hover:bg-gray-700 cursor-default">
          <FontAwesomeIcon
            icon={faWifi}
            size="sm"
          />
         </button>

        <button className="px-1 hover:bg-gray-700 cursor-default">
          <FontAwesomeIcon icon={faVolumeDown} />
         </button>

        <button className="px-1 hover:bg-gray-700 cursor-default">
          <FontAwesomeIcon
            icon={faCommentAltLines}
            size="sm"
          />
        </button>

        <button className="px-1.5 text-xs text-center duration-200 ease-out hover:bg-gray-700 select-none cursor-default">
          <div>
            <div>
              { this.time }
            </div>

            <div>
              { this.date }
            </div>
          </div>
        </button>
      </div>
    );
  };
}

export default SystemTray;
