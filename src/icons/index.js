import SvgIcon from './SvgIcon.vue'; // svg component

// import all svg
const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);

requireAll(req);

// register globally
export default {
  install(Vue) {
    Vue.component('svg-icon', SvgIcon);
  },
};
