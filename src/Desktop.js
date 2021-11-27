import logo from './logo.svg';
import React, { Component, useState } from 'react';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import useStartMenuVisibility from './hooks/useStartMenuVisibility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGulp } from '@fortawesome/free-brands-svg-icons'

function Desktop() {
  const [startMenuState, setStartMenuState] = useStartMenuVisibility(false);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <div className="relative flex-grow flex justify-center items-center bg-blue-800">
        <FontAwesomeIcon
          className="text-pink-600"
          icon={faGulp}
          size="10x"
        />

        {startMenuState ? <StartMenu className="absolute bottom-0 left-0 w-2/5 h-2/3 bg-gray-900" /> : ''}
      </div>

      <Taskbar onToggle={() => setStartMenuState(!startMenuState)} />
    </div>
  );
}

export default Desktop;
