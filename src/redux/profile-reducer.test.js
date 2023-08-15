import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: "Hello world", likesCount: 6 },
        { id: 2, message: "it's my first react project", likesCount: 15 },
        { id: 3, message: "i am so interested in this", likesCount: 8 }
    ]
}

test('length of posts should be incremented', () => {
    let action = addPostCreator('yes')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
    
})

test('message of new post should be correct', () => {
    let action = addPostCreator('yes')
    let newState = profileReducer(state, action)
    expect(newState.posts[3].message).toBe('yes')
})

test('length of messages after deleting should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
})

test(`length of messages after deleting should'nt be decrement if id is incorrect`, () => {
    let action = deletePost(100)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})
