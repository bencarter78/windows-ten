import App from './App';
import { faCalculator, faCalendarAlt, faPoop } from '@fortawesome/pro-regular-svg-icons'

function AppList({ className }) {
  const GroupApp = ({ group }) => (
    <>
      {group.apps.map((app) => (
        <App
          title={app.label}
          icon={app.icon}
        />
      ))}
    </>
  );

  const groups = [
    {
      title: 'C',
      apps: [
        {
          label: 'Calculator',
          icon: faCalculator,
        },
        {
          label: 'Calendar',
          icon: faCalendarAlt,
        },
      ],
    },
    {
      title: 'D',
      apps: [
        {
          label: 'Dogshit',
          icon: faPoop,
        },
      ],
    },
  ];



  return (
    <div class="p-4 space-y-1 flex-grow select-none text-white">
      {
        groups.map((group) => (
          <div>
            <div className="p-1 flex items-center hover:bg-gray-700 duration-200 ease-out">
              { group.title }
            </div>

            <GroupApp group={group} />
          </div>
        ))
      }
    </div>
  );
}

export default AppList;
