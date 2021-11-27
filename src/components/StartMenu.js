import SystemActions from "./start/SystemActions"
import AppList from './start/AppList';
import AppTiles from "./start/AppTiles";

function StartMenu({ className }) {
  return (
    <div className={`${className} flex text-gray-500 shadow-2xl`}> 
      <div className="flex w-1/2">
        <SystemActions />

        <AppList />
      </div>

      <div className="w-1/2">
        <AppTiles />
      </div>
    </div>
  )
}

export default StartMenu