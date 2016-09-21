import React from 'react';
import Realm from 'realm';
import Moment from 'moment';
import _ from 'underscore';

class Type {}
Type.schema = {
  name: 'Type',
  properties: {
    id: 'string',
    name: 'string'
  }
}

class Activity {}
Activity.schema = {
  name: 'Activity',
  properties: {
    id: 'string',
    start: 'date',
    end: 'date',
    comment: 'string'
  }
}

let realm = new Realm({schema: Activity});

export default class RealmHelper {
  static saveType(name) {
    console.log('Save type: ' + name);
    let id = (new Date).getTime().toString();
    try {
      realm.write(() => {
        realm.create('Type', {
          id: id,
          name: name
        })
      })
    } catch(err) {
      console.log('Error saving to Realm', err);
    }
  }

  static getTypes() {
    try {
      let types = realm.objects('Type');
      return types;
    } catch(err) {
      console.log('Error getting types', err);
      return [];
    }
  }

  // static saveItem(item) {
  //   console.log('Save input', realm.path);
  //   let id = (new Date).getTime().toString();
  //   console.log('ID: ' + id);
  //
  //   try{
  //     realm.write(() => {
  //       realm.create('Locations', {
  //         id: id,
  //         name: item.name,
  //         comment: item.comment,
  //         lat: item.lat,
  //         lon: item.lon,
  //         date: new Date()
  //       })
  //     });
  //   } catch(err) {
  //     console.log('Error saving to Realm', err);
  //   }
  // }
  //
  // static getItems() {
  //   let items = realm.objects('Locations');
  //   return items;
  // }
}
