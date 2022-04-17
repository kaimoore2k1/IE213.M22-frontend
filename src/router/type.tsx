import { Route } from "react-router-dom";

export interface RouterInterface {
  path: string;
  public: boolean;
  name?: string;
  index?: boolean;
  children: RouterInterface[];
  element: () => JSX.Element;
}

export const handelRecursion = (router: RouterInterface) => {
  if (router.children.length > 0) {
    return router.children.map((child, index) => {
      return (
        <Route key={index} path={child.path} element={<child.element />}>
          {handelRecursion(child)}
        </Route>
      );
    });
  }
};
