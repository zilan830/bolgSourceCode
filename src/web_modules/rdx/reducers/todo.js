const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(state,"state");
      return {
        id: action.id,
        text: action.text,
      };
    default:
      return state
  }
};

export default todo;