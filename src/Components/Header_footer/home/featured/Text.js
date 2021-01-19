import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

import FeaturedLogo from "../../../../Resources/images/logos/logo.png";
class Text extends Component {
  animateNumber = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        rotate: 0,
      }}
      enter={{
        opacity: [1],
        rotate: [360],
        timing: { duration: 1000, ease: easePolyOut },
      }}
    >
      {({ opacity, rotate }) => {
        return (
          <div
            className="featured_number"
            style={{
              opacity,
              transform: `translate(0px, 170px) rotateY(${rotate}deg)`,
            }}
          >
            Omphalus Kua
          </div>
        );
      }}
    </Animate>
  );
   
  animateTitle = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        rotate: 0,
      }}
      enter={{
        opacity: [1],
        rotate: [360],
        timing: { delay: 1100, duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity, rotate }) => {
        return (
          <div
            className="title"
            style={{
              opacity,
              transform: `translate(0px, 190px) rotateY(${rotate}deg),`,
            }}
          >
            FullStack Developer
          </div>
        );
      }}
    </Animate>
  );
  
  

  animateFirst = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 333,
        y: 550,
      }}
      enter={{
        opacity: [1],
        x: [2],
        y: [300],
        timing: {delay: 300, duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_first"
            style={{
              opacity,
              transform: `translate(${x}px,${y}px)`,
            }}
          >
            My
          </div>
        );
      }}
    </Animate>
  );

  animateSecond = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 123,
        y: 226,
      }}
      enter={{
        opacity: [1],
        x: [2],
        y: [304],
        timing: { delay: 300, duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_second"
            style={{
              opacity,
              transform: `translate(${x}px,${y}px)`,
            }}
          >
            Portfolio
          </div>
        );
      }}
    </Animate>
  );

  animateLogo = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
      }}
      enter={{
        opacity: [1],

        timing: { delay: 600, duration: 1000, ease: easePolyOut },
      }}
    >
      {({ opacity }) => {
        return (
          <div
            className="featured_logo"
            style={{
              opacity,
              background: `url(${FeaturedLogo})`,
              transform: `translate(157px,16px)`,
            }}
          ></div>
        );
      }}
    </Animate>
  );

  render() {
    return (
      <div className="featured_text">
        {this.animateNumber()}
        {this.animateTitle()}
        {this.animateFirst()}
        {this.animateSecond()}
        {this.animateLogo()}
      </div>
    );
  }
}

export default Text;
