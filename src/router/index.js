import Vue from 'vue';
import Router from 'vue-router';
import Posts from '@/components/Posts';
import Post from '@/components/Post';
import Projects from '@/components/Projects';
import Project from '@/components/Project';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/posts', name: 'Posts', component: Posts },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/post/:name', name: 'Post', component: Post, props: true },
    { path: '/project/:index', name: 'Project', component: Project, props: true },
  ],
});
