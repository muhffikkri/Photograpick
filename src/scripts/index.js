import 'regenerator-runtime';
import App from './views/app';
// import swRegister from './utils/sw-register';

// Import our custom CSS
import '../scss/main.scss';

// Import all of Bootstrap's JS
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';

// Import all of Bootstrap's ICON


// import custom components
import './views/components/app-bar';
import './views/components/foot-note';

const app = new App({
  drawer: document.querySelector('app-bar'),
  content: document.querySelector('#mainContent'),
  footer: document.querySelector('foot-note'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();

  // await swRegister();
});
