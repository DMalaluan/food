import createDataContext from './createDataContext';

const favoritesReducer = (state, action) => {
   switch (action.type) {
        case 'add_favorite':
            return [...state, { id: action.payload.id, title: action.payload.title }];
        case 'delete_favorite':
            return state.filter((favorite) => favorite.id !== action.payload);
        default: 
            return state;
   }
};

const addFavorite = dispatch => {
    return (id, title) => {
        dispatch({ type: 'add_favorite', payload: { id, title } });
    };
};

const deleteFavorite = dispatch => {
    return async (id) => {
        dispatch({ type: 'delete_favorite', payload: id });
    };
};

export const { Context, Provider } = createDataContext(
    favoritesReducer, 
    { addFavorite, deleteFavorite }, 
    []
);