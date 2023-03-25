// import { createStore, action, thunk, computed } from 'easy-peasy';
// import api from './api/posts';

// export default createStore({
//     posts: [],
//     setposts: action((state, payload) => {
//         state.posts = payload;
//     }),
//     postTitle: [],
//     setPostTitle: action((state, payload) => {
//         state.postTitle = payload;
//     }),
//     postBody: [],
//     setPostBody: action((state, payload) => {
//         state.postBody = payload;
//     }),
//     editTitle: [],
//     setEditTitle: action((state, payload) => {
//         state.posts = payload;
//     }),
//     editBody: '',
//     setEditbody: action((state, payload) => {
//         state.editBody = payload; 
//     }),
//     search: '',
//     setSearch: action((state, payload) => {
//         state.search = payload;
//     }),
//     searchList: [],
//     setSearchList: action((state, payload) => {
//         state.searchList = payload;
//     }),
//     postCount: computed((state) => state.posts.length),
//     getPosById: computed((state) => {
//         return (id) => state.posts.find(post => (post.id).toString() === id);
//     }),
//     savePost: thunk(aysnc(actions, newPost, helpers) => {
//         const { posts } = helpers.getState();
//         try {
//             const response = await api.post('/post', newPost);
//             actions.setPosts([...posts., response.data]);
//             actions.setPostTitle('');
//             actions.setPostBody('');
//         } catch (err) {

//         }
//     })
// });