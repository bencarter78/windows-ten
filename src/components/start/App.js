import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App({ title, icon }) {
  return (
    <div className="p-1 flex items-center hover:bg-gray-700 duration-200 ease-out">
      <div className="bg-blue-500 h-8 w-8 flex justify-center items-center">
        <FontAwesomeIcon
          icon={icon}
          size="md"
        />
      </div>

      <span className="ml-2">
        { title }
      </span>
    </div>
  );
}

export default App;
