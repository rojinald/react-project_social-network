import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
   posts: [
      { id: 1, message: 'Давай дружить!', likesCount: 50 },
      { id: 2, message: 'Это мой первый пост :)', likesCount: 10 },
   ],
}

it('lenght of posts should be incremented', () => {
   //1 . test data
   let action = addPostActionCreator('Kabzda kak prosto')
   //2 . action
   let newState = profileReducer(state, action);
   //3. expectation
   expect(newState.posts.length).toBe(3)

});


it('message of new post should be correct ', () => {
   //1 . test data
   let action = addPostActionCreator('Kabzda kak prosto')
   //2 . action
   let newState = profileReducer(state, action);
   //3. expectation

   expect(newState.posts[2].message).toBe('Kabzda kak prosto')

});

it('after deleting lenght of messages should be decrement ', () => {
   //1 . test data
   let action = deletePost(1)
   //2 . action
   let newState = profileReducer(state, action);
   //3. expectation
   expect(newState.posts.length).toBe(1)

});

it(`after deleting lenght shouldn't be decrementif id is incorrect `, () => {
   //1 . test data
   let action = deletePost(1000)
   //2 . action
   let newState = profileReducer(state, action);
   //3. expectation
   expect(newState.posts.length).toBe(2)

});



