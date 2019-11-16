import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import UIfx from "uifx";
import mp3File from "./beep.mp3";

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [session, setSession] = useState(25 * 60);
  const [breakValue, setBreakValue] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [timer, setTimer] = useState(null);

  const secToMin = sec => {
    const min = Math.floor(sec / 60);
    const second = sec % 60;
    return `${min >= 10 ? min : 0 + "" + min}:${
      second >= 10 ? second : 0 + "" + second
    }`;
  };

  const breakIncrement = () => {
    if (breakLength < 60 && isPaused) {
      setBreakLength(breakLength + 1);
    }
  };

  const sessionIncrement = () => {
    if (sessionLength < 60 && isPaused) {
      setSessionLength(sessionLength + 1);
    }
  };

  const breakDecrement = () => {
    if (breakLength > 1 && isPaused) {
      setBreakLength(breakLength - 1);
    }
  };

  const sessionDecrement = () => {
    if (sessionLength > 1 && isPaused) {
      setSessionLength(sessionLength - 1);
    }
  };

  useEffect(() => {
    if (session > 0) {
      setSession(sessionLength * 60);
    }
  }, [sessionLength]);

  useEffect(() => {
    if (breakValue > 0) {
      setBreakValue(breakLength * 60);
    }
  }, [breakLength]);

  useEffect(() => {
    if (!isPaused && session > 0 && breakValue == 0) {
      setTimer(setInterval(timeFunction, 1000));
    } else if (session == 0 && breakValue == 0) {
      const beep = new UIfx(mp3File, {
        volume: 0.4,
        throttleMs: 100
      });
      beep.play();
      setBreakValue(breakLength * 60);
    }
    return () => clearInterval(timer);
  }, [isPaused, session]);

  const timeFunction = () => {
    if (session > 0) {
      setSession(session - 1);
    } else {
      setBreakValue(breakValue - 1);
    }
  };

  useEffect(() => {
    if (!isPaused && breakValue > 0 && session == 0) {
      setTimer(setInterval(timeFunction, 1000));
    } else if (session == 0 && breakValue == 0) {
      const beep = new UIfx(mp3File, {
        volume: 0.4,
        throttleMs: 100
      });
      beep.play();
      setSession(sessionLength * 60);
    }
    return () => clearInterval(timer);
  }, [isPaused, breakValue]);

  const startTimer = () => {
    if (isPaused) {
      setIsPaused(false);
    }
  };

  const pauseTimer = () => {
    if (!isPaused) {
      setIsPaused(true);
      clearInterval(timer);
    }
  };

  const resetTimer = () => {
    if (!isPaused) {
      setIsPaused(true);
    }
    clearInterval(timer);
    setSessionLength(25);
    setBreakLength(5);
    setSession(25 * 60);
    setBreakValue(0);
  };

  return (
    <div className="main">
      <h1 className="title">Promodoro Clock</h1>
      <div className="label-container">
        <span id="break-label" className="label">
          Break Length
        </span>
        <span id="session-label" className="label">
          Session Length
        </span>
      </div>
      <div className="setterWrapperContainer">
        <div className="setterContainer">
          <span
            onClick={breakDecrement}
            id="break-decrement"
            className="downArrow"
          >
            &#10148;
          </span>
          <span id="break-length" className="lengthLabel">
            {breakLength}
          </span>
          <span
            onClick={breakIncrement}
            id="break-increment"
            className="upArrow"
          >
            &#10148;
          </span>
        </div>
        <div className="setterContainer">
          <span
            onClick={sessionDecrement}
            id="session-decrement"
            className="downArrow"
          >
            &#10148;
          </span>
          <span id="session-length" className="lengthLabel">
            {sessionLength}
          </span>
          <span
            onClick={sessionIncrement}
            id="session-increment"
            className="upArrow"
          >
            &#10148;
          </span>
        </div>
      </div>
      <div className="countContainer">
        <span id="timer-label">
          {breakValue >= 0 && session == 0 ? "Break" : "Session"}
        </span>
        <span
          style={{
            color:
              (session < 60 && breakValue == 0) ||
              (breakValue < 60 && session == 0)
                ? "red"
                : "green"
          }}
          id="time-left"
        >
          {breakValue >= 0 && session == 0
            ? secToMin(breakValue)
            : secToMin(session)}
        </span>
      </div>
      <div className="controlContainer">
        <FontAwesomeIcon
          style={{ margin: 10 + "px", cursor: "pointer", userSelect: "none" }}
          icon={faPlay}
          onClick={startTimer}
        />
        <FontAwesomeIcon
          style={{ margin: 10 + "px", cursor: "pointer", userSelect: "none" }}
          icon={faPause}
          onClick={pauseTimer}
        />
        <FontAwesomeIcon
          style={{ margin: 10 + "px", cursor: "pointer", userSelect: "none" }}
          icon={faUndoAlt}
          onClick={resetTimer}
        />
      </div>
    </div>
  );
};

export default App;
