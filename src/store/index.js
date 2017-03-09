import Vue from 'vue';
import Vuex from 'vuex';
import 'whatwg-fetch';
import marked from 'marked';
import moment from 'moment';

Vue.use(Vuex);

const API = 'https://api.github.com/repos/zhaoyiyi/blog-posts/contents/posts';
const TOKEN = 'f90564d6559f9b45e00e0e09c1def73fdd63e4f6';

const state = {
  posts: [],
  post: {},
  isFetching: false,
};

function parsePost(text) {
  const [, metadata, content] = /-{3}[\r\n]([\s\S]*)[\r\n]-{3}([\s\S]*)/.exec(text);
  const metaJson = `{ ${metadata.replace(/[\r\n]/g, ',').replace(/(:\s)?([\w-\s]+)/g, '$1"$2"')} }`;
  return {
    content,
    metadata: JSON.parse(metaJson),
  };
}

const mutations = {
  gotPosts(state, posts) {
    state.posts = posts.map((post) => {
      const [, date, title] = /([\d-]*)-([\w-]*).md/g.exec(post.name);
      return {
        name: post.name,
        title: title.split('-').join(' '),
        date: moment(date).format('MMM D, YYYY'),
        timestamp: moment(date),
        url: post.download_url,
      };
    });
    state.isFetching = false;
  },
  gotPost(state, post) {
    const { content, metadata } = parsePost(post);
    state.post = {
      title: metadata.title,
      date: moment(metadata.date, 'YYYY-MM-DD').format('MMM Do, YYYY'),
      html: marked(content),
    };
    state.isFetching = false;
  },
  fetching(state, isFetching) {
    state.isFetching = isFetching;
  },
};

const actions = {
  async getPosts({ commit, state }) {
    // fetch once
    if (state.posts.length > 0) return;
    commit('fetching', true);
    const res = await fetch(`${API}?access_token=${TOKEN}`);
    commit('gotPosts', await res.json());
  },
  async getPost({ commit, state, dispatch }, name) {
    commit('fetching', true);
    // wait to fetch posts data if lands on post page
    if (!state.post.title) {
      await dispatch('getPosts');
    }
    const target = state.posts.find(post => post.name === name);
    const res = await fetch(target.url);
    commit('gotPost', await res.text());
  },
};

const getters = {
  // newest one first
  sortByDate: state => state.posts.sort((a, b) => a.timestamp.diff(b.timestamp, 'days') > 0 ? 0 : 1),
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
