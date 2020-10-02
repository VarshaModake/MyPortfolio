import React from 'react';
import '../CSS/Skills.css';

export default function Skills(){
    return(
        <div class="right-column">
            <div >
              <h4>TOP EXPERTISE</h4>
            </div>
            <div class="bar">
              <div class="bar fill" style={{ width: '90%'}}>
                <div class="tag bold">C#/MVC/.Net</div>
              </div>
              <span>90%</span>
            </div>

            <div class="bar">
              <div class="bar fill" style={{ width: '80%'}}>
                <div class="tag bold">SQL</div>
              </div>
              <span>80%</span>
            </div>

            <div class="bar">
              <div class="bar fill" style={{width: '80%'}}>
                <div class="tag bold">HTML</div>
              </div>
              <span>80%</span>
            </div>

            <div class="bar">
              <div class="bar fill" style={{width: '70%'}}>
                <div class="tag bold">CSS</div>
              </div>
              <span>70%</span>
            </div>

            <div class="bar">
              <div class="bar fill" style={{width: '70%'}}>
                <div class="tag bold">JavaScript</div>
              </div>
              <span>70%</span>
            </div>

            <div class="bar">
              <div class="bar fill" style={{width: '50%'}}>
                <div class="tag bold">React</div>
              </div>
              <span>50%</span>
            </div>

            <div class="bar">
              <div class="bar fill" style={{ width: '50%'}}>
                <div class="tag bold">Angular</div>
              </div>
              <span>50%</span>
            </div>
          </div>
    )
}