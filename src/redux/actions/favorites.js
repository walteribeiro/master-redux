import { SEARCH } from "redux/types/favorites";

export function addFavorite(repositoryName) {
  return {
    type: SEARCH,
    payload: {
      repositoryName,
    },
  };
}

/**
 * Action Types => 'SEARCH_REPOSITORY'
 * Action Creators => 'addFavorite'
 * Actions => { type: 'SEARCH_REPOSITORY', payload: { repositoryName } };
 */

/** Using middleware Redux Thunk
|--------------------------------------------------
function addFavorite(repository) {
  return {
    type: 'ADD_FAVORITE',
    payload: {
      repository,
    },
  };
}

export function searchAndAddRepository(repositoryName) {
  return async (dispatch) => {
    const response = await api.get(`/repos/${repositoryName}`);

    dispatch(addFavorite(response.data));
  };
}
|--------------------------------------------------
*/
