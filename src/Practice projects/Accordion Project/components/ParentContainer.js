import React from 'react';
// import { useState } from 'react';
import '../index.css';
import { FAQs } from '../data';

function ParentContainer() {
  const issues = FAQs;
  // const [issuesArray, setIssueState] = useState(issues);

  return (
    <>
      <section className="parent-container">
        <aside className="section-title">
          <h3>Questions And Answers About Login</h3>
        </aside>
        <section className="issues-section">
          {issues.map(function (eachIssue) {
            const { id, question, answer } = eachIssue;
            const btnArray = document.querySelectorAll('.toggle-btn');

            const toggleAnswer = function () {
              btnArray.forEach(function (each) {
                each.style.display = 'none';
              });
            };
            return (
              <div key={id} className="custom-issues-card">
                <div className="card-body">
                  <div className="card-title-block">
                    <h4>{question}</h4>
                    <div className="expand-btn-case">
                      <button className="toggle-btn" onClick={toggleAnswer}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="card-text">{answer}</div>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
}

export default ParentContainer;
