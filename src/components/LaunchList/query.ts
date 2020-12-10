import gql from 'graphql-tag';

export const QERRY_LAUNCH = gql`
        query launches {
            launches {
            launch_year
            mission_name
            launch_success
            flight_number
            }
        }
`;
