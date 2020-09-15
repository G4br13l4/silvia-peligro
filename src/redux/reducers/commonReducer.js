const initialState = {
    instagram : {
      sp: [],
      cb: []
    }
};

export default function instagramReducer(state = initialState, action) {
    switch(action.type) {
        case 'LOAD_POSTS_SUCCESS':
            return {
                ...state,
                instagram: {
                    ...state.instagram,
                    sp: action.posts
                }
            }
        default: 
            return state;
    }
}