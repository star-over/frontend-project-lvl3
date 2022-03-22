// @ts-check

import * as yup from 'yup';
import { messageModes, processingModes } from './modes.js';

export const initYup = () => {
  yup.setLocale({
    string: {
      url: () => 'messages.errorUrlInvalid',
    },
    mixed: {
      notOneOf: () => 'messages.errorRssExist',
    },
  });
};

export const initElements = () => ({
  form: document.querySelector('form.rss-form'),
  input: document.querySelector('#url-input'),
  feedback: document.querySelector('.feedback'),
  submit: document.querySelector('.rss-form button[type="submit"]'),
  feedsBox: document.querySelector('.feeds'),
  postsBox: document.querySelector('.posts'),
  modal: document.querySelector('#modal'),
});

export const initState = () => ({
  processing: {
    mode: processingModes.waiting,
  },
  input: {
    text: '',
    disabled: false,
  },
  feedback: {
    messageCode: '',
    mode: messageModes.fail,
  },
  feeds: [],
  posts: [],
  seenPosts: new Set(),
  modalPostId: null,
});
