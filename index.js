/**
 * Copyright Radical Candor, Inc., 2016-2017. All Rights Reserved
 * @flow
 */
module.exports = {
  getActionType: function(action) {
    if (action && action.type) {
      return action.type;
    }
    return 'unknown-type';
  }
};