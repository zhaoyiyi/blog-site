import Vue from 'vue';
import Vuex from 'vuex';
import 'whatwg-fetch';
import marked from 'marked';
import moment from 'moment';

Vue.use(Vuex);

const API = 'https://api.github.com/repos/zhaoyiyi/blog-posts/contents';
const TOKEN = 'f90564d6559f9b45e00e0e09c1def73fdd63e4f6';
const PROJECTS = 'https://raw.githubusercontent.com/zhaoyiyi/blog-posts/master/projects.json';

const state = {
  posts: [],
  post: {},
  projects: [],
  project: {},
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
  },
  gotPost(state, post) {
    const { content, metadata } = parsePost(post);
    state.post = {
      title: metadata.title,
      date: moment(metadata.date, 'YYYY-MM-DD').format('MMM Do, YYYY'),
      html: marked(content),
    };
  },
  gotProjects(state, projects) {
    state.projects = projects;
  },
  gotProject(state, project) {
    state.project = project;
  },
};

const actions = {
  async getPosts({ commit, state }) {
    if (state.posts.length > 0) return;
    const res = await fetch(`${API}/posts?access_token=${TOKEN}`);
    commit('gotPosts', await res.json());
  },
  async getPost({ commit, state, dispatch }, name) {
    // wait to fetch posts data if lands on post page
    if (!state.post.title) {
      await dispatch('getPosts');
    }
    const target = state.posts.find(item => item.name === name);
    const res = await fetch(target.url);
    commit('gotPost', await res.text());
  },
  async getProjects({ commit, state }) {
    if (state.projects.length > 0) return;
    const res = await fetch(`${PROJECTS}`);
    commit('gotProjects', await res.json());
  },
  async getProject({ commit, dispatch, state }, index) {
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
