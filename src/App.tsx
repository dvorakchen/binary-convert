import { RefObject, useRef, useState } from "react";
import "./App.css";
import { BaseNone } from 'basenone';

function App() {
  const [base64, setBase64] = useState("");
  const [utf8, setUTF8] = useState("");
  const textRef: RefObject<HTMLInputElement> = useRef(null);

  function handleClick() {
    let value = textRef.current!.value;
    let baseNone = BaseNone.fromBinary(value);
    let b64 = baseNone.toBase64();
    let u8 = baseNone.toUTF8();
    setBase64(b64);
    setUTF8(u8);
  }

  return (
    <div className="container">
      <p>
        <input ref={textRef} type="text" placeholder="binary" />
        <br />
        <button onClick={() => { handleClick() }}>Convert</button>
      </p>
      <p>
        <p>Base64: <span>{base64}</span></p>
      </p>

      <p>
        <p>UTF-8: <span>{utf8}</span></p>
      </p>
    </div>
  );
}

export default App;
