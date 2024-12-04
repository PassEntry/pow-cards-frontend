import { Hero } from '../presentation/components/Hero';
import { Claim } from '../presentation/components/Claim';
import { NotFound } from '../presentation/components/NotFound';
import { APP_ROUTES } from './constants';

export const routes = [
  {
    path: APP_ROUTES.HOME,
    element: <Hero />
  },
  {
    path: APP_ROUTES.CLAIM,
    element: <Claim />
  },
  {
    path: APP_ROUTES.NOT_FOUND,
    element: <NotFound />
  }
]; 