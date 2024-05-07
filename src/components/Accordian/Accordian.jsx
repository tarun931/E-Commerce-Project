import { useState } from "react";

function Accordian({ heading, body, defaultExpanded, children }) {
  const [acc, setAcc] = useState(defaultExpanded);
  function toggleAcc() {
    setAcc(!acc);
  }
  return (
    <div className="accordian" onClick={toggleAcc}>
      <div> {heading}</div>
      <div> {acc ? "-" : "+"}</div>
      {acc && <div> {children}</div>}
    </div>
  );
}

export default Accordian;
