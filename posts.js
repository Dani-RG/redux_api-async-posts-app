const { createStore, applyMiddleware } = require("redux");

// Third party middleware option
const loggerMiddleware = require("redux-logger").createLogger();

// Custom middleware option
const customLogger = () => {
  return (next) => {
    return (action) => {
      console.log("action fired ->", action);
      next(action);
    };
  };
};

// Initial state
const initialState = {
  posts: [],
};

// Constants
const REQUEST_STARTED = "REQUEST_STARTED";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILED = "FETCH_FAILED";

// Actions
const fetchPostRequest = () => {
  return {
    type: REQUEST_STARTED,
  };
};

const fetchPostSuccess = () => {
  return {
    type: FETCH_SUCCESS,
  };
};

const fetchPostFailed = () => {
  return {
    type: FETCH_FAILED,
  };
};

// Reducers
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        posts: ["HTML"],
      };
  }
};

// Store
const store = createStore(
  postsReducer,
  applyMiddleware(loggerMiddleware, customLogger)
);

// Subscribe
store.subscribe(() => {
  const data = store.getState();
  console.log("data ->", data);
});

// Dispatch
store.dispatch(fetchPostRequest());
