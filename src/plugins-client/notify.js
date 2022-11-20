import Vue from "vue";
import vuetify from '../plugins/vuetify';
import notify from './NotifyPlugin';

const option = { 
    iconColor : 'red',
};

Vue.use(notify, vuetify, option);