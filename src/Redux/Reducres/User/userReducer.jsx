const initialState = {
  uid: '',
  username: '',
  isLoggedIn: false,
  hobby: [],
  moreData: {
    city: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setId':
      return {
        ...state,
        uid: action.id,
      };
    case 'setUserName':
      return {
        ...state,
        username: action.uname,
      };
    case 'setUserData':
      return {
        ...state,
        uid: action.data.uid,
        username: action.data.username,
      };
    case 'setIsLoggedIn':
      return {
        ...state,
        isLoggedIn: action.isUserAuthenticated,
      };
    default:
      return {...state};
  }
};
export default userReducer;

// userReducer({type: 'setId', id: 1});
// userReducer({type: 'setUserName', uname: 'i.am.themanikjain'});
// userReducer({
//   type: 'setUserData',
//   data: {uid: 1, username: 'i.am.themanikjain'},
// });
// userReducer({type: 'setIsLoggedIn', isUserAuthenticated: true});
