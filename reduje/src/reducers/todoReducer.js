export const initialState = {
    todo: "Buy Groceries",
    editing: false,
}


export const todoReducer = (state, action) => {
    //Actions
    switch(action.type) {
        case 'NEW_TODO':
        return{
            ...state, 
            editing: !state.editing
        }
        default: 
        return state;
    }
}