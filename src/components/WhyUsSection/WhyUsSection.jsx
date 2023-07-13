import { Feature } from "../Features/Features";
import classes from "./style.module.css";
import {Row, Col} from 'antd';

export const WhyUsSection = () => {
  return (
    <>
    <Row>
      <Col span={24} className={classes.mainSection} style={{padding : '25px'}}>
        <Col span={24} style={{ display:'flex'}} className={classes.mainIntro}>
          <Col span={24} style={{marginTop:'120px'}}>
          <h1 style={{color: '#001B5D', fontSize: '2rem', fontFamily: 'sans-serif'}} > Why The Industry Chooses Clickdee?</h1>
          <p style={{fontSize: '.9375rem'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin pretium nibh, eu placerat diam rutrum id. Duis ut congue nulla.
            Fusce quis nunc in nunc imperdiet faucibus. Curabitur ut semper erat. Praesent ac libero purus. 
            Nunc viverra bibendum purus, id dictum metus. Curabitur sit amet fermentum nibh.
            Donec nisi neque, mattis vitae justo nec, luctus faucibus purus.
          </p>
          </Col>
          <Col style={{ display:'flex', paddingLeft:'280px'}}>
            {[1, 2].map((each, _idx) => {
              return (
                <div key={_idx}>
                  <Feature idx={_idx} />
                </div>
              );
            })}
          </Col>
        </Col>
        <Col span={24} style={{ display:'flex', justifyContent: 'flex-end', paddingLeft:'30px'}}>
        {[1, 2, 3].map((each, _idx) => {
          return (
            <div key={_idx}>
              <Feature idx={_idx} />
            </div>
          );
        })}
        </Col>
      </Col>
    </Row>
    </>

  );
};
