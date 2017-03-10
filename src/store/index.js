import Vue from 'vue';
import Vuex from 'vuex';
import 'whatwg-fetch';
import marked from 'marked';
import moment from 'moment';

Vue.use(Vuex);

const API = 'https://api.github.com/repos/zhaoyiyi/blog-posts/contents';
const TOKEN = '1b297c0c0445bb2bd80bf779fac7bcd69bafef23';
const PROJECTS = 'https://raw.githubusercontent.com/zhaoyiyi/blog-posts/master/projects.json';

const state = {
  posts: [],
  post: {},
  projects: [],
  project: {},
  isLoading: false,
};

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
    state.isLoading = false;
  },
  gotPost(state, post) {
    state.post = {
      title: post.title,
      date: post.date,
      html: marked(post.content),
    };
    state.isLoading = false;
  },
  gotProjects(state, projects) {
    state.projects = projects;
    state.isLoading = false;
  },
  gotProject(state, project) {
    state.project = project;
    state.isLoading = false;
  },
  loading(state, isLoading) {
    state.isLoading = isLoading;
  },
};

const actions = {
  async getPosts({ commit, state }) {
    if (state.posts.length > 0) return;
    commit('loading', true);
    const res = await fetch(`${API}/posts?access_token=${TOKEN}`);
    commit('gotPosts', await res.json());
  },
  async getPost({ commit, state, dispatch }, name) {
    commit('loading', true);
    // wait to fetch posts data if lands on post page
    if (!state.post.title) {
      await dispatch('getPosts');
    }
    const target = state.posts.find(item => item.name === name);
    const res = await fetch(target.url);
    const post = { ...target, content: await res.text() };
    commit('gotPost', post);
  },
  async getProjects({ commit, state }) {
    if (state.projects.length > 0) return;
    commit('loading', true);
    const res = await fetch(`${PROJECTS}`);
    commit('gotProjects', await res.json());
  },
  async getProject({ commit, dispatch, state }, index) {
    commit('loading', true);
    if (state.projects.length === 0) {
      await dispatch('getProjects');
    }
    const project = state.projects[index];
    const res = await fetch(`${project.readme}`);
    const readme = await res.text();
    commit('gotProject', { ...project, readme: marked(readme) });
  },
};

const getters = {
  // newest one first
  posts: state => state.posts.sort((a, b) => a.timestamp.diff(b.timestamp, 'days') > 0 ? 0 : 1),
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
