import { gql } from "@apollo/client";

export const GetAllCharacters = gql`{
    characters {
        results {
          id
          name
          image
          status
          species
        }
      }
}`

export const GetCharacterById = gql`
  query ($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      gender
      created
    }
  }
`;

export const GetCharactersByName = gql`
query ($name: String){
    characters ( filter: {name: $name}){
      results {
        id
        name
        image
        status
        species
      },
    },
  }
`;