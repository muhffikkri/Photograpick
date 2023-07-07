import 'regenerator-runtime';
// import '../styles/style.css';
// import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const app = new App({
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  
  await swRegister();
});
