import {gql} from '@apollo/client'

export const GET_DATA = gql`
    query {
        getData {
             title, by, id, img, exclude,
        }
    }    
`

