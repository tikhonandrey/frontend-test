import { GET_DOG_QUERY } from "../ListView";

export default [
  {
    request: {
      query: GET_DOG_QUERY,
      variables: {
        name: "Buck"
      }
    },
    result: {
      data: {
        dog: { id: "1", name: "Buck", breed: "bulldog" }
      }
    }
  }
];
