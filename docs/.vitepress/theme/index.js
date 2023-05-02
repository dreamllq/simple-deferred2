import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './custom.css';
import Layout from './layout.vue'
import NotFound from './not-found.vue'

export default {
  Layout,
  NotFound,
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus);
  }
};