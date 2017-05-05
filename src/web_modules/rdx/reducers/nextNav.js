const nextTotal = (state = [], action) => {
  switch (action.type) {
    case 'NEXT_NAV':
      console.log("state", state);
      return {
        total: action.total,
      };
    default:
      return state
  }
};

export default nextTotal;