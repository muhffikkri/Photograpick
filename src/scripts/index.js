import 'regenerator-runtime';
import App from './views/app';
// import swRegister from './utils/sw-register';

// Import our custom CSS
import '../scss/styles.scss';

// import custom components
import './views/components/app-bar';
import './views/components/foot-note';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();

  // await swRegister();
});
