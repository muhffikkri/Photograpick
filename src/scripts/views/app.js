import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({content}) {
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    // DrawerInitiator.init({
    //   drawer: this._drawer,
    //   content: this._content,
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
