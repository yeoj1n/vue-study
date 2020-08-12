import Vue from "vuex";
import Vuex from "vuex";
import axios from "axios";
import { SERVER_URL, GET_COUNTRIES, GET_COUNTRY } from "@/common/api.js";

Vue.use(Vuex);

export const store = new Vuex.store({
  state: {
    country: null,
  },
  getters: {},
  mutations: {
    GLOBALSTATUS(state) {},
    // COUNTRYSTATUS(state, { country }) {
    //   this.country = country;
    // },
  },
  actions: {
    GLOBALSTATUS({ commit }, { email, password }) {
      return axios
        .get(`${SERVER_URL}${GET_COUNTRIES}`)
        .then(({ data }) => commit("GLOBALSTATUS", data));
    },
    // COUNTRYSTATUS({ commit }, { country }) {
    //   return axios
    //     .get(`${SERVER_URL}${GET_COUNTRIES}/{country}`, { country })
    //     .then(({ data }) => commit("COUNTRYSTATUS", data));
    // },
  },
});
