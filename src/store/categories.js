const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
const LOAD_CATEGORIES_START = "LOAD_CATEGORIES_START";
const LOAD_CATEGORIES_DONE = "LOAD_CATEGORIES_DONE";
const LOAD_CATEGORIES_ERROR = "LOAD_CATEGORIES_ERROR";

export function categoriesLoading() {
  return {
    type: LOAD_CATEGORIES_START
  };
}

export function categoriesLoaded(categories) {
  return {
    type: LOAD_CATEGORIES_DONE,
    payload: categories
  };
}

export function categoriesFailed(error) {
  return {
    type: LOAD_CATEGORIES_ERROR,
    payload: error
  };
}
//When a thunk is dispatched, it is passed two arguments: dispatch and getState. The dispatch function allows you to dispatch other actions, including other thunks, while the getState function allows you to access the current state of the Redux store.

// A thunk function typically returns another function, which takes the dispatch and getState arguments as its parameters. This inner function then performs some asynchronous operation, and dispatches one or more actions based on the results.
export function loadCategories() {
  return async (dispatch) => {
    dispatch(categoriesLoading());

    try {
      // HTTP status code
      // 2XX => success
      // 3xx => redirection
      // 4xx => Failed request
      // 5xx => Unexpected errors
      const response = await fetch(
        "https://run.mocky.io/v3/297308ac-aeb0-4e98-8868-9c1d3a878a4c"
      );
      if (response.ok) {
        const json = await response.json();
        dispatch(categoriesLoaded(json));
      } else {
        dispatch(categoriesFailed(new Error(response.statusText)));
      }
    } catch (error) {
      dispatch(categoriesFailed(error));
    }
  };
}

function categoriesReducer(
  state = {
    categories: [],
    isLoading: false,
    error: null,
    selectedCategoryId: null
  },
  action
) {
  switch (action.type) {
    case SET_SELECTED_CATEGORY: {
      return {
        ...state,
        selectedCategoryId: action.payload
      };
    }
    case LOAD_CATEGORIES_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case LOAD_CATEGORIES_DONE: {
      return {
        ...state,
        isLoading: false,
        categories: action.payload
      };
    }
    case LOAD_CATEGORIES_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
}

export default categoriesReducer;

// for carousel
// show images in a given width and change the left attribute

// parent 800px
// 4 800 px width
//  flex or float
// left 0px
// -800px
//
