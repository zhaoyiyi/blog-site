import Vue from 'vue';
import Router from 'vue-router';
import Posts from '@/components/Posts';
import Post from '@/components/Post';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/posts', name: 'Posts', component: Posts },
    { path: '/post/:name', name: 'Post', component: Post, props: true },
  ],
});
