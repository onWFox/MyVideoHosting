import { RouteProps } from "react-router-dom";
import MainPage from "../../../pages/MainPage/ui/MainPage";
import Shorts from "../../../pages/Shorts";
import PlayLists from "../../../pages/PlayLists";
import HistoryPage from "../../../pages/History";

export enum AppRouter {
  MAIN = "main",
  SHORTS = "shorts",
  PLAYLISTS = "playlists",
  HISTORY = "history",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRouter, string> = {
  [AppRouter.MAIN]: "/",
  [AppRouter.SHORTS]: "shorts",
  [AppRouter.PLAYLISTS]: "playlists",
  [AppRouter.HISTORY]: "history",
  [AppRouter.NOT_FOUND]: "*",
};

export const RouteConfig: Record<AppRouter, RouteProps> = {
  [AppRouter.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRouter.SHORTS]: {
    path: RoutePath.shorts,
    element: <Shorts />,
  },
  [AppRouter.PLAYLISTS]: {
    path: RoutePath.playlists,
    element: <PlayLists />,
  },
  [AppRouter.HISTORY]:{
    path: RoutePath.history,
    element: <HistoryPage />,
  }
  ,
  [AppRouter.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: 
      <>
        <h1>Not FOUND</h1>
      </>
    
  },
};
