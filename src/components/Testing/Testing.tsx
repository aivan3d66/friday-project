import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperCheckbox from "../common/SuperCheckbox/SuperCheckbox";
import SuperButton from "../common/SuperButton/SuperButton";

export const Testing = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "400px",
      margin: "20px auto",
    }}>
      <SuperInputText placeholder={"Write here ..."}/>
      <SuperCheckbox onChange={() => alert("I'm changed")}/>
      <SuperButton onClick={() => alert('MORE!!!')}>
        Push me harder
      </SuperButton>
    </div>
  )
}
