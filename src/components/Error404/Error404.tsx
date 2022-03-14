import s from "./Error404.module.scss";
import error from "./../../img/error.png";

export const Error404 = () => {
  return (
    <div className={s.error}>
      <img className={s.errorImage} src={error} alt={'Page not found - 404'}/>
    </div>
  )
}
