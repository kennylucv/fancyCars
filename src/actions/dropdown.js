export const types = {
  SELECTED_SORT: "DD/SELECTED_SORT"
};

export const actions = {
  selectSort: option => ({ type: types.SELECTED_SORT, sortOption: option })
};
