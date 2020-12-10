import * as React from 'react';
import { LaunchListQuery } from '../../generated/graphql';
import './styles.css';

export interface OwnProps {
  handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
  data: LaunchListQuery;
}

const className = 'LaunchList';

const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => (
  <div className={className}>
    <h3 className="p-1 bg-secondary text-white text-center m-2">Launches</h3>
    <div className="Launches_sfContainer__sIv8j-1">
  <div className="Launches_failBlock__30v5t-1">
    </div>
    <p style={{margin: "0px 1rem"}}>=</p>
    <p>Sucess</p>
    </div>
<div className="Launches_sfContainer__sIv8j">
  <div className="Launches_failBlock__30v5t">
    </div>
    <p style={{margin: "0px 1rem"}}>=</p>
    <p>Fail</p>
    </div>


    <ol className={`${className}__list  `}>
      {!!data.launches &&
        data.launches.map(
          (launch, i) =>
            !!launch && (
              <li
                key={i}
                className={`${className}__item`}
                onClick={() => handleIdChange(launch.flight_number!)}
              >
                {launch.mission_name} - {launch.launch_year} ({JSON.stringify(launch.launch_success)})
              </li>
            ),
        )}
    </ol>
  </div>
);

export default LaunchList;








