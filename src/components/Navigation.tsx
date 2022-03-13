import {NavLink} from "react-router-dom"
import { ROUTE_PATH } from "./common/constants"

export const Navigation = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between"
    }}>
      <NavLink to={ROUTE_PATH.PROFILE}>
        <span>Profile page</span>
      </NavLink>
      <NavLink to={ROUTE_PATH.ERROR}>
        <span>Error page</span>
      </NavLink>
      <NavLink to={ROUTE_PATH.AUTH}>
        <span>Auth page</span>
      </NavLink>
      <NavLink to={ROUTE_PATH.PASSWORD_RECOVERY}>
        <span>Password recovery page</span>
      </NavLink>
      <NavLink to={ROUTE_PATH.PASSWORD_INPUT}>
        <span>Password input page</span>
      </NavLink>
      <NavLink to={ROUTE_PATH.TESTING}>
        <span>Test component page</span>
      </NavLink>
    </div>
  )
}
