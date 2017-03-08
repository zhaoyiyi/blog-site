import Vue from 'vue';
import Vuex from 'vuex';
import 'whatwg-fetch';
import { markdown } from 'markdown';

Vue.use(Vuex);

const API = 'https://api.github.com/repos/zhaoyiyi/recipe-finder/contents/src';
const TOKEN = 'f90564d6559f9b45e00e0e09c1def73fdd63e4f6';

const state = {
  posts: [],
  post: {},
};

const mutations = {
  gotPosts(state, posts) {
    state.posts = posts;
  },
  gotPost(state, post) {
    state.post = post;
  },
};

const actions = {
  getPosts({ commit, state }) {
    // fetch once
    if (state.posts.length > 0) return;

    fetch(`${API}?access_token=${TOKEN}`)
      .then(res => res.json())
      .then(res => commit('gotPosts', res));
  },
  getPost({ commit, state }, name) {
    const target = state.posts.find(post => post.name === name);
    fetch(target.download_url)
      .then(res => res.json)
      .then(res => commit('gotPost', res));
  },
};

const getters = {
  postContent(state) {
    const [, title, date, content] = /(@title:\s?.+[\r\n])(@date:\s?.+[\r\n])(.*)/.exec(state.post) || ['', '', '', '#invalid content'];
    return { title, date, html: markdown.toHTML(content) };
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
