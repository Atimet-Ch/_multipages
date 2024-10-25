import React, { useEffect, useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Animation.css';

// Global constants
const fieldWidth = 700;
const fieldHeight = 300;
const ballSize = 150;

const maxX = fieldWidth - ballSize - 2;
const maxY = fieldHeight - ballSize - 2;

const vX = 5; // velocity in X
const vY = 5; // velocity in Y

const Animation = () => {
  const [running, setRunning] = useState(false);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const ballRef = useRef(null);
  const fieldRef = useRef(null);

  useEffect(() => {
    initial();
    const interval = setInterval(() => {
      if (running) {
        calculate();
        render();
      }
    }, 40); // animation 25 f/s (duration = 1000ms / 25 = 40ms)

    const keyDownHandler = (event) => {
      switch (event.key) {
        case " ":
          runClick();
          break;
        case "1":
          noneClick();
          break;
        case "2":
          BasketballClick();
          break;
        case "3":
          FootballClick();
          break;
        case "4":
          VolleyballClick();
          break;
        case "5":
          HumanClick();
          break;
        case "6":
          CartoonClick();
          break;
        case "7":
          IconClick();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [running, x, y, goRight, goDown]);

  const initial = () => {
    fieldRef.current.style.width = fieldWidth + "px";
    fieldRef.current.style.height = fieldHeight + "px";
    ballRef.current.style.width = ballSize + "px";
    ballRef.current.style.height = ballSize + "px";
    ballRef.current.style.animation = "rotateA 5s linear infinite";

    // ตั้งค่าลูกบอลเริ่มต้นเป็น Basketball
    BasketballClick();
  };

  const runClick = () => {
    setRunning((prev) => !prev); // toggle running state
  };

  const noneClick = () => {
    if (!running) {
        ballRef.current.style.backgroundImage = "url(./public/color.png)";
    }
  };

  const BasketballClick = () => {
    if (!running) {
      ballRef.current.style.backgroundImage = "url(./public/basketball.png)";
    }
  };

  const FootballClick = () => {
    if (!running) {
      ballRef.current.style.backgroundImage = "url(./public/football.png)";
    }
  };

  const VolleyballClick = () => {
    if (!running) {
      ballRef.current.style.backgroundImage = "url(./public/volleyball.png)";
    }
  };

  const IconClick = () => {
    if (!running) {
      ballRef.current.style.backgroundImage = "url(./public/icon.png)";
    }
  };

  const CartoonClick = () => {
    if (!running) {
      ballRef.current.style.backgroundImage = "url(./public/pngegg.png)";
    }
  };

  const HumanClick = () => {
    if (!running) {
      ballRef.current.style.backgroundImage = "url(./public/human.png)";
    }
  };

  const calculate = () => {
    let newX = x;
    let newY = y;
    let newGoRight = goRight;
    let newGoDown = goDown;

    if (goRight) {
      newX += vX;
      if (newX >= maxX) newGoRight = false;
    } else {
      newX -= vX;
      if (newX <= 0) newGoRight = true;
    }

    if (goDown) {
      newY += vY;
      if (newY >= maxY) newGoDown = false;
    } else {
      newY -= vY;
      if (newY <= 0) newGoDown = true;
    }

    setX(newX);
    setY(newY);
    setGoRight(newGoRight);
    setGoDown(newGoDown);
  };

  const render = () => {
    if (ballRef.current) {
      ballRef.current.style.left = x + "px";
      ballRef.current.style.top = y + "px";

      // ตรวจสอบสถานะการทำงาน
      if (running) {
        ballRef.current.style.animation = "rotate 5s linear infinite"; // เริ่มหมุน
      } else {
        ballRef.current.style.animation = "none"; // หยุดหมุน
      }
    }
  };

  return (
    <div id="container">
      <div id="field" ref={fieldRef} className="field-container" style={{ position: 'relative' }}>
        <div
          id="ball"
          ref={ballRef}
          className="ball"
          style={{ position: "absolute" }}
        ></div>
      </div>

      <div id="control">
        <button
          id="run"
          className={`btn ${running ? 'btn-danger' : 'btn-success'}`}
          onClick={runClick}
        >
          <span className={`bi ${running ? 'bi-pause-fill' : 'bi-play-fill'}`}>
            &nbsp;{running ? 'PAUSE' : 'RUN'}
          </span>
        </button>
        <button className="btn btn-secondary" onClick={noneClick}>
          None
        </button>
        <button className="btn btn-primary" onClick={BasketballClick}>
          Basketball
        </button>
        <button className="btn btn-primary" onClick={FootballClick}>
          Football
        </button>
        <button className="btn btn-primary" onClick={VolleyballClick}>
          Volleyball
        </button>
        <button className="btn btn-primary" onClick={HumanClick}>
          Human
        </button>
        <button className="btn btn-primary" onClick={CartoonClick}>
          Cartoon
        </button>
        <button className="btn btn-primary" onClick={IconClick}>
          Icon
        </button>
      </div>
    </div>
  );
};

export default Animation;
