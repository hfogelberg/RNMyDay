import React, { Platform } from 'react-native';
import _ from 'underscore';

module.exports = function (scene) {
    var componentMap = {
        'NewActivity': {
          title: 'NewActivity',
          id: 'NewActivity'
        },
        'NewType': {
          title: 'NewType',
          id: 'NewType'
        },
        'Map': {
          title: 'Map',
          id: 'Map'
        },
        'Settings': {
          title: 'Settings',
          id: 'Settings'
        }
    }

    return componentMap[scene];
}
