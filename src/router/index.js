import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sample from "../components/Sample.vue";
import ConditionaStatements from "../components/ConditionaStatements.vue";
import TemplateExample from "../components/TemplateExample.vue";
import ClassAndStyleBindingExample from "../components/ClassAndStyleBindingExample.vue";
import  ParentComponent from "../components/ParentComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/parent",
    component: ParentComponent,
  },
  {
    path: "/style",
    // name: "Home",
    component: ClassAndStyleBindingExample
  },
  {
    path: "/temp",
    name: "Home",
    component: TemplateExample
  },
  {
    path: "/con",
    //name: "Home",
    component: ConditionaStatements
  },
  {
    path: "/sample",
    name: "Sample",
    component: Sample,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
