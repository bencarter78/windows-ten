import React, { useState } from 'react';
import Start from './Start';
import TaskbarSearch from './TaskbarSearch';
import SystemTray from './SystemTray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faFirefoxBrowser, faWhatsapp, faXbox, faSkype } from '@fortawesome/free-brands-svg-icons'

function Taskbar({onToggle}) {
  return (
    <div className="z-10 bg-gray-900 text-white flex">
      <Start toggle={onToggle} />

      <div className="flex flex-grow justify-between">
        <TaskbarSearch />

        <div className="flex flex-grow">
          <button className="text-green-400 hover:bg-gray-700 border-b-2 border-transparent hover:border-blue-500 px-4 cursor-default">
            <FontAwesomeIcon icon={faSpotify} size="lg" />
          </button>

          <button className="text-yellow-500 hover:bg-gray-700 border-b-2 border-transparent hover:border-blue-500 px-4 cursor-default">
            <FontAwesomeIcon icon={faFirefoxBrowser} size="lg" />
          </button>

          <button className="text-green-300 hover:bg-gray-700 border-b-2 border-transparent hover:border-blue-500 px-4 cursor-default">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </button>

          <button className="text-blue-400 hover:bg-gray-700 border-b-2 border-transparent hover:border-blue-500 px-4 cursor-default">
            <FontAwesomeIcon icon={faSkype} size="lg" />
          </button>

          <button className="text-green-700 hover:bg-gray-700 border-b-2 border-transparent hover:border-blue-500 px-4 cursor-default">
            <FontAwesomeIcon icon={faXbox} size="lg" />
          </button>
        </div>

        

        <div className="flex">
          <SystemTray />

          <button className="w-1.5 h-full border-l border-gray-500 duration-200 ease-out hover:bg-gray-700 cursor-default -mr-px" />
        </div>
      </div>
    </div>
  );
}

export default Taskbar;
