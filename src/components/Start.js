import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows } from '@fortawesome/free-brands-svg-icons'

const Start = ({toggle}) => (
  <button 
    className="px-4 py-2 text-white hover:text-blue-500 hover:bg-gray-700 duration-200 ease-out cursor-default"
    onClick={toggle}
  >
    <FontAwesomeIcon
      icon={faWindows}
      size="lg"
    />
  </button>
)

export default Start