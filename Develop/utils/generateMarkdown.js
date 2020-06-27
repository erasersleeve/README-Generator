// let badge = "";
function generateBadge (data) {
  console.log(data.license);
  if (data.license=="MIT") {};
  // if (data.license="APACHE 2.0") {};
  // if (data.license="GPL 3.0") {};
  // if (data.license="BSD 3") {};
  // if (data.license="None") {};
  
}
// function to generate markdown for README
function generateMarkdown(data) { 
  if (data.license=="MIT") {badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"}
  if (data.license=="APACHE 2.0") {badge ="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"}
  if (data.license=="GPL 3.0") {badge ="[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)"}
  if (data.license=="BSD 3") {badge ="[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"}
  if (data.license=="None") {badge =""}
    
  
  return `# ${data.title}
  ${badge}
  ## Description
  ${data.description}
  ## Table of Contents
  *  [Installation](#Installation)
  *  [Usage](#Usage)
  *  [License](#License)
  *  [Contributing](#Contributing)
  *  [Tests](#Tests)
  *  [Questions](#Questions)
  ## Installation
  To install necessary dependencies, run the following command:

    >${ data.install}

  ## Usage
  ${ data.usage}
  ## License
  ${ data.license}
  ## Contributing
  ${ data.contribution}
  ## Tests
  To run tests, run the following command:
    
    >${ data.test}
  
    ## Questions
  If you have any questions about this repo, open an issue or contact me directly at [${ data.email}](mailto:${data.email}). You can find more of my work at (https://github.com/${data.username}).
  `;
}

module.exports = generateMarkdown;