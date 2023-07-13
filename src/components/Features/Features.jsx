import React, { useState } from 'react';
import classes from "./style.module.css";
import clsx from "clsx";
import {Row, Col} from 'antd';
export const Feature = ({ _idx }) => {

  return (
    <div
      className={clsx(
        classes.featuresSection,
        _idx === 0 || _idx === 2 || _idx === 4 ? classes.oddClass : ""
      )}
      style={{margin:0, padding:0}}
    >
      <Col>

        <img
          src="https://picsum.photos/200/300"
          width="60"
          height="60"
          alt="img"
        />

        <h3 style={{color: '#001B5D', fontWeight:'650', fontFamily: 'sans-serif'}} >Lorem ipsum</h3>
        <h3 style={{color: '#001B5D', fontWeight:'650', fontFamily: 'sans-serif'}}> Lorem ipsum dolor sit </h3>
      </Col>
      <div className={classes.overlay}></div>
    </div>
  );
};
