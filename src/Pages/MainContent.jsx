import { useState } from "react";
import Country from "../components/Country";
import Navbar from "../components/Navbar";
function MainContent() {
  const [Darkbg, setDarkbg] = useState(false);
  return (
    <>
      <div>
        <div>
          <Navbar Darkbg={Darkbg} setDarkbg={setDarkbg} />
        </div>
        <div className="country">
          <Country Darkbg={Darkbg} setDarkbg={setDarkbg} />
        </div>
      </div>
    </>
  );
}
export default MainContent;
