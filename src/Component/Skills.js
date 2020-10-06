import React from 'react';
import '../CSS/Skills.css';

export default function Skills(){
    return(
        <div className="right-column">
            <div >
              <h3>SKILLS SET</h3>
            </div>
            <div className="bar">
              <div className="bar fill" style={{ width: '90%'}}>
                <div className="tag bold">C#/MVC/.Net</div>
              </div>
              <span>90%</span>
            </div>

            <div className="bar">
              <div className="bar fill" style={{ width: '80%'}}>
                <div className="tag bold">SQL</div>
              </div>
              <span>80%</span>
            </div>

            <div className="bar">
              <div className="bar fill" style={{width: '80%'}}>
                <div className="tag bold">HTML</div>
              </div>
              <span>80%</span>
            </div>

            <div className="bar">
              <div className="bar fill" style={{width: '70%'}}>
                <div className="tag bold">CSS</div>
              </div>
              <span>70%</span>
            </div>

            <div className="bar">
              <div className="bar fill" style={{width: '70%'}}>
                <div className="tag bold">JavaScript</div>
              </div>
              <span>70%</span>
            </div>

            <div className="bar">
              <div className="bar fill" style={{width: '50%'}}>
                <div className="tag bold">React</div>
              </div>
              <span>50%</span>
            </div>

            <div className="bar">
              <div className="bar fill" style={{ width: '50%'}}>
                <div className="tag bold">Angular</div>
              </div>
              <span>50%</span>
            </div>
          </div>
    )
}