import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCog, faImage, faFile } from '@fortawesome/pro-light-svg-icons'
import { faPowerOff } from '@fortawesome/pro-regular-svg-icons'

function SystemActions() {
  return (
    <div className="flex flex-col justify-between px-4 py-4 text-white">
      <FontAwesomeIcon icon={faBars} />

      <div className="flex flex-col items-center space-y-8">
        <img 
          src="/coods.jpeg" 
          className="w-5 h-5 rounded-full"
          alt="User Settings"
        />

        <FontAwesomeIcon icon={faFile} />
        <FontAwesomeIcon icon={faImage} />
        <FontAwesomeIcon icon={faCog} />
        <FontAwesomeIcon icon={faPowerOff} />
      </div>
    </div>
  )
}

export default SystemActions