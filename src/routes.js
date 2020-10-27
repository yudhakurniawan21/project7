import Home from "./assets/vue/pages/home.vue";
import AboutPage from "./assets/vue/pages/about.vue";
import FormPage from "./assets/vue/pages/form.vue";
import DynamicRoutePage from "./assets/vue/pages/dynamic-route.vue";

import PanelLeftPage from "./assets/vue/pages/panel-left.vue";
import ColorThemes from "./assets/vue/pages/color-themes.vue";
import Chat from "./assets/vue/pages/chat.vue";
import Vuex from "./assets/vue/pages/vuex.vue";

import OnBoarding1 from "./assets/vue/components/OnBoarding1.vue";
import OnBoarding2 from "./assets/vue/components/OnBoarding2.vue";
import OnBoarding3 from "./assets/vue/components/OnBoarding3.vue";
import HomePage from "./assets/vue/pages/HomePage.vue";
import ProductDetails from "./assets/vue/components/ProductDetails.vue";
import Cart from "./assets/vue/pages/Cart.vue";

export default [
  {
    path: "/",
    component: OnBoarding1
  },
  {
    path: "/onboarding2/",
    component: OnBoarding2
  },
  {
    path: "/onboarding3/",
    component: OnBoarding3
  },
  {
    path: "/home/",
    component: HomePage
  },
  {
    path: "/product-details/:id",
    component: ProductDetails
  },
  {
    path: "/cart/",
    component: Cart
  }
];
