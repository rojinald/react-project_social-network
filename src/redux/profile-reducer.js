const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
   posts: [
      { id: 1, message: 'Давай дружить!', likesCount: 50 },
      { id: 2, message: 'Это мой первый пост :)', likesCount: 10 },
   ],
   newPostText: 'test'
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 3,
            message: state.newPostText,
            likesCount: 0
         };
         state.posts.push(newPost);
         state.newPostText = '';
         return state;
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;
      default:
         return state;
   }
}

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updatePostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;