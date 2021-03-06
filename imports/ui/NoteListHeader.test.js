import React from 'react';
import expect from 'expect';
import { mount } from 'emzyne';
import { Meteor } from 'meteor/meteor';

import { NoteListHeader } from './NoteListHeader';

if (Meteor.isClient) {
  describe('NoteListHeader', function () {

    it('should call meteorCall on click', function () {
      const spy = expect.createSpy();
      const wrapper = mount(<NoteListHeader meteorCall={spy}/>);

      wraper.find('button').simulate('click');

      expect(spy).toHaveBeenCallWith('notes.insert');
    })

  });
}
