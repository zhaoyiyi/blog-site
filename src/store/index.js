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
  async getPosts({ commit, state }) {
    // fetch once
    if (state.posts.length > 0) return;

    const res = await fetch(`${API}?access_token=${TOKEN}`);
    commit('gotPosts', await res.json());
  },
  async getPost({ commit, state, dispatch }, name) {
    // wait to fetch posts data if lands on post page
    if (!state.post.title) {
      await dispatch('getPosts');
    }

    const target = state.posts.find(post => post.name === name);
    const res = await fetch(target.download_url);
    commit('gotPost', await res.text());
  },
};

const getters = {
  postContent(state) {
    const [, title, date, content] = /(@title:\s?.+[\r\n])(@date:\s?.+[\r\n])(.*)/.exec(state.post)
    || ['', '', '', '#invalid content'];
    return { title, date, html: markdown.toHTML(content) };
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
