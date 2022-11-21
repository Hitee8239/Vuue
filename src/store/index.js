import Vue from "vue";
import Vuex from "vuex";
import { Store } from "vuex";

Vue.use(Vuex);

export function createStore() {
	const store = new Vuex.Store({
		state: {
			config : {
				title : "DOGFILX",
				footer : "DOGFILX allright reserved."
			}
		},
		mutations: {
		},
		actions: {
		},
		modules: {
		}
	});
	return store;
}

