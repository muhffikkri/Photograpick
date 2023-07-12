import Home from '../views/pages/home';
import PhotographerList from '../views/pages/photographerList';
import PhotographerDetail from '../views/pages/photographerDetail';
import CategoryPhotographers from '../views/pages/categoryPhotographers';
import CategoryPhotographersDetail from '../views/pages/categoryPhotographerDetail';
import Services from '../views/pages/services';
import Challenge from '../views/pages/challenge';
import UpcomingEvent from '../views/pages/upcomingEvent';
import Reward from '../views/pages/reward';
import Pembelajaran from '../views/pages/pembelajaran';
import Login from '../views/pages/login';
import Register from '../views/pages/register';

const routes = {
  '/': Home, // default page
  '/fotografer': PhotographerList,
  '/fotografer/:id': PhotographerDetail,
  '/kategori': CategoryPhotographers,
  '/kategori/:id': CategoryPhotographersDetail,
  '/layanan': Services,
  '/challenge': Challenge,
  '/event': UpcomingEvent,
  '/reward': Reward,
  '/pembelajaran': Pembelajaran,
  '/login': Login,
  '/register': Register,
};

export default routes;
