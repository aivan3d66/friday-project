import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperCheckbox from "../common/SuperCheckbox/SuperCheckbox";
import SuperButton from "../common/SuperButton/SuperButton";
import {ChangeEvent, useState} from "react";

export const Testing = () => {
  const [text, setText] = useState<string>('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "400px",
      margin: "20px auto",
    }}>
      <SuperInputText placeholder={"Write here ..."} onChange={onInputChange}/>{text}
      <SuperCheckbox onChange={() => alert("I'm changed")}/>
      <SuperButton onClick={() => alert('MORE!!!')}>
        Push me harder
      </SuperButton>
    </div>
  )
}
