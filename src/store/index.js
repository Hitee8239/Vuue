import Vue from "vue";
import Vuex from "vuex";
import { Store } from "vuex";

Vue.use(Vuex);

export function createStore() {
	const store = new Vuex.Store({
		state: {
			config : {
				title : "DOGFILX",
				footer : "DOGFILX allright reserved.",
				menu : [
					{
						title : "Home",
						icon : "mdi-home",
						to : '',
						grant : 0,
						newTap : false,
						subItems : [
							{
								title : "Menu1",
								icon : "",
								to : '/menu1',
								grant : 0,
								newTap : true,
								subItems : [
									{
										title : "Menu1-1",
										icon : "",
										to : '/menu1-1',
										grant : 0,
										newTap : false,
										subItems : []
									},
									{
										title : "Menu1-2",
										icon : "",
										to : '/menu1-2',
										grant : 0,
										newTap : false,
										subItems : []
									},
								]
							},
							{
								title : "Menu2",
								icon : "",
								to : '/menu2',
								grant : 0,
								newTap : false,
								subItems : []
							},
						]
					},
					{
						title : "About", 
						icon : "mdi-help",
						to : '/about',
						grant : 0,
						newTap : false,
						subItems : []
					},
				]
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

