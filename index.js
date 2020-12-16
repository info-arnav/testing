import React from "react";
import { render } from "react-dom";

const Calculator = () => {
  return (
    <div class="calc" wfd-id="0">
      <section class="screen" wfd-id="7">
        72
      </section>

      <section class="calc-buttons" wfd-id="1">
        <div class="calc-button-row" wfd-id="6">
          <button class="calc-button double " wfd-id="24">
            C
          </button>
          <button class="calc-button" wfd-id="23">
            ←
          </button>
          <button class="calc-button" wfd-id="22">
            ÷
          </button>
        </div>
        <div class="calc-button-row" wfd-id="5">
          <button class="calc-button" wfd-id="21">
            7
          </button>
          <button class="calc-button" wfd-id="20">
            8
          </button>
          <button class="calc-button" wfd-id="19">
            9
          </button>
          <button class="calc-button" wfd-id="18">
            ×
          </button>
        </div>
        <div class="calc-button-row" wfd-id="4">
          <button class="calc-button" wfd-id="17">
            4
          </button>
          <button class="calc-button" wfd-id="16">
            5
          </button>
          <button class="calc-button" wfd-id="15">
            6
          </button>
          <button class="calc-button" wfd-id="14">
            -
          </button>
        </div>
        <div class="calc-button-row" wfd-id="3">
          <button class="calc-button" wfd-id="13">
            1
          </button>
          <button class="calc-button" wfd-id="12">
            2
          </button>
          <button class="calc-button" wfd-id="11">
            3
          </button>
          <button class="calc-button" wfd-id="10">
            +
          </button>
        </div>
        <div class="calc-button-row" wfd-id="2">
          <button class="calc-button triple" wfd-id="9">
            0
          </button>
          <button class="calc-button" wfd-id="8">
            =
          </button>
        </div>
      </section>
    </div>
  );
};

render(<Calculator></Calculator>, document.getElementById("root"));
