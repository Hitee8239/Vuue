import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    appReady: false,
    config: {
      title: "Hitee Site",
      footer: "Hitee Site all right reserved.",
      menu: [
        {
          title: "Home",
          icon: "mdi-home",
          to: "",
          grant: 0,
          newTab: false,
          subItems: [
            {
              title: "소녀의행성",
              icon: "",
              to: "/video",
              grant: 0,
              newTab: false,
              subItems: [
                {
                  title: "menu",
                  icon: "",
                  to: "/video-1",
                  grant: 0,
                  newTab: false,
                  subItems: [],
                },
                {
                  title: "Menu1-2",
                  icon: "",
                  to: "/menu1-2",
                  grant: 0,
                  newTab: false,
                  subItems: [],
                },
              ],
            },
            {
              title: "허스키바이러스",
              icon: "mdi-dog-service",
              to: "/husky",
              grant: 0,
              newTab: false,
              subItems: [],
            },
            {
              title: "보더로운생활",
              icon: "",
              to: "/border",
              grant: 0,
              newTab: false,
              subItems: [],
            },
            {
              title: "뭉치의 개팔상팔",
              icon: "",
              to: "/mungchi",
              grant: 0,
              newTab: false,
              subItems: [],
            },
          ],
        },
        {
          title: "About",
          icon: "mdi-help",
          to: "/about",
          grant: 0,
          newTab: false,
          subItems: [],
        },
      ],
    },
    banner: [
      {
        id: 1,
        titleName: "소녀의 행성",
        src: require("../assets/planet.jpg"),
      },
      {
        id: 2,
        titleName: "허스키바이러스",
        src: require("../assets/huskyvirus.jpg"),
      },
      {
        id: 3,
        titleName: "보더로운생활",
        src: require("../assets/border.jpg"),
      },
      {
        id: 4,
        titleName: "뭉치의 개팔상팔",
        src: require("../assets/mungchi.jpg"),
      },
    ],
  },
  mutations: {
    SET_APP_READY(state) {
      state.appReady = true;
    },
  },
  actions: {
    async appInit({ dispatch, commit }, user) {
      if (user) {
        commit("user/SET_MEMBER", user.member);
        commit("user/SET_TOKEN", user.token);
      } else {
        await dispatch("user/initUser");
      }
      commit("SET_APP_READY");
    },
  },
  modules,
});

export function createStore() {
  return store;
}

export default store;
