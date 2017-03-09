import Vue from 'vue';
import Vuex from 'vuex';
import 'whatwg-fetch';
import { markdown } from 'markdown';

Vue.use(Vuex);

const API = 'https://api.github.com/repos/zhaoyiyi/blog-posts/contents/posts';
const TOKEN = 'f90564d6559f9b45e00e0e09c1def73fdd63e4f6';

const state = {
  posts: [],
  post: {},
  isFetching: false,
};

const mutations = {
  gotPosts(state, posts) {
    state.posts = posts;
    state.isFetching = false;
  },
  gotPost(state, post) {
    const [, , title, , date, content] = /(@title:\s?)(.+)[\r\n]+(@date:\s?)(.+)[\r\n]+([\s\S]*)/g.exec(post);
    state.post = { title, date, html: markdown.toHTML(content) };
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
    const res = await fetch(target.download_url);
    commit('gotPost', await res.text());
  },
};

const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
