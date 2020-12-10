import gql from 'graphql-tag';


export const QUERRY_LANUCH_DEATILS= gql`
        query launchInfo($id: String ){
            launch (id: $id){
            mission_name
            flight_number
            launch_year
            launch_success
            details
            launch_site{
                site_name
            }
            rocket{
                rocket_name
                rocket_type
            }
            links{
                video_link
                flickr_images
            }
            
            }
        }
`;