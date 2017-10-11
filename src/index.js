
// ReactDOM.render(
//   <div>
//     <h1>Help Queue</h1>
//     <h3>3a</h3>
//     <h3>Thato and Haley</h3>
//     <p><em>Firebase won't save record</em></p>
//   </div>,
//   document.getElementById('react-app-root')
// );

// JSX version above compiles into regular React JS below


'use strict';

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Help Queue'
  ),
  React.createElement(
    'h3',
    null,
    '3a'
  ),
  React.createElement(
    'h3',
    null,
    'Thato and Haley'
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'em',
      null,
      'Firebase won\'t save record'
    )
  )
), document.getElementById('react-app-root'));
