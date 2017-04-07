module.exports = {
  getActionType: function(action) {
    if (action && action.type) {
      return action.type;
    }
    return 'unknown-type';
  }
};