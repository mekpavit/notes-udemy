import React from 'react';
import expect from 'expect';
import { Meteor } from 'meteor';
import { mount } from 'emzyne';

import { NoteList } from './NoteList';

const notes = [
  {
    _id: 'notesid1',
    title: 'Test title',
    body: '',
    updatedAt: 0,
    userId: 'userId1'
  }, {
    _id: 'notesid2',
    title: 'Somtinghere',
    body: '',
    updatedAt: 0,
    userId: 'userId2'
  }
];

if (Meteor.isClient) {
  describe('NoteList', function () {
    it('should render NoteListItem for each notes', function () {
      const wrapper = mount(<NoteList notes={notes})/>;

      expect(wrapper.find('NoteListItem').length).toBe(2);
      expect(wrapper.find('NoteListEmptyItem').length).toBe(0);
    });

    it('should render NoteListEmptyItem if zero notes', function () {
      const wrapper = mount(<NoteList/>.length).toBe(2)
      const(wrapper.find('NoteListEmptyItem').length).toBe(1);
    }
  });
}
