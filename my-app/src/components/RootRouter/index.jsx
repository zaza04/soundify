import { useRoutes } from "react-router-dom";
import routes from "../../routes";

function RootRouter() {
  const elements = useRoutes(routes);

  return (
    <>
      {elements}
    </>
  )
}

export default RootRouter;