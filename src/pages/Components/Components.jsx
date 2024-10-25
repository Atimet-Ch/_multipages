import "./Components.css";

import Counter from "../../Components/Counter/Counter";
import Timer from "../../Components/Timer/Timer";
import Add from "../../Components/Add/Add";
import Temps from "../../Components/Temps/Temps";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Components() {
  return (
    <div>
      <div className="main-containers">
        <h1>React Components</h1>
        <div className="containers">
          <div className="div1">
            <Counter value={0} />
            <Timer />
          </div>
          {/* <Variable value={0} /> */}
          <div className="div2">
            <Add />
          </div>
          <div className="div3">
            <Temps initCelsius={22} />
          </div>
        </div>
        <h2 className="name-containers">นาย อติเมธ ไชยชนะ 66062831</h2>
      </div>
    </div>
  );
}

export default Components;
