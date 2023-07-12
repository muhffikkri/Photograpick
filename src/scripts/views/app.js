import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
// import DrawerInitiator from '../utils/drawer-initiator';
// import FootNoteInitiator from '../utils/foot-note-initiator';

class App {
  constructor({drawer, content, footer}) {
    this._drawer = drawer;
    this._content = content;
    this._footer = footer;

    this._initialAppShell();
  }

  _initialAppShell() {
    // DrawerInitiator.init({
    //   drawer: this._drawer,
    // });

    // FootNoteInitiator.init({
    //   footer: this._footer,
    // });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
