import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperCheckbox from "../common/SuperCheckbox/SuperCheckbox";
import SuperButton from "../common/SuperButton/SuperButton";
import {ChangeEvent, useState} from "react";
import s from "./Testing.module.scss";

export const Testing = () => {
  const [text, setText] = useState<string>('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  return (
    <div className={s.testingContainer}>
      <div className={s.textingInput}>
        <SuperInputText placeholder={"Write here ..."} onChange={onInputChange}/>
        <p>Output: {text}</p>
      </div>
      <div className={s.textingControllers}>
        <SuperCheckbox onChange={() => alert("I'm changed")}/>
        <SuperButton onClick={() => alert('MORE!!!')}>
          Push me harder
        </SuperButton>
      </div>
    </div>
  )
}
