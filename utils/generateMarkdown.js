function generateMarkdown(userResponses, userInfo) {

    // Generate table of contents
    let draftToC = `## Table of Contents`;
    if (userResponses.installation !== '') { draftToC += `
    * [Installation](#installation)` };
    if (userResponses.usage !== '') { draftToC += `
    * [Usage](#usage)` };
    if (userResponses.contributing !== '') { draftToC += `
    * [Contributing](#contributing)` };
    if (userResponses.tests !== '') { draftToC += `
    * [Tests](#tests)` };
  
    // Generate markdown for top required portions of the README
    let draftMarkdown = 
    `# ${userResponses.title}
  
    ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
    
    Check out the badges hosted by [shields.io](https://shields.io/).
    
    
    ## Description 
    
    *The what, why, and how:* 
    
    ${userResponses.description}
  
    `
  
    // add Table of Contents
    draftMarkdown += draftToC;
   
    // add license
    draftMarkdown += `
    * [License](#license)`;
    
  
    // add installation
    if (userResponses.installation !== '') {
    draftMarkdown +=
    `

    ## Installation
    
    *Steps required to install project and how to get the development environment running:*
    
    ${userResponses.installation}`
    };
    
    // add usage
    if (userResponses.usage !== '') {
    draftMarkdown +=
    
    `
    
    ## Usage 
    
    *Instructions and examples for use:*
    
    ${userResponses.usage}`
    };
    
    // add contributors
    if (userResponses.contributing !== '') {
  
    draftMarkdown +=
      
    `
    
    ## Contributing
    
    *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
    ${userResponses.contributing}`
    };
    
    // add tests
    if (userResponses.tests !== '') {
    
    draftMarkdown +=
    `
    
    ## Tests
    
    *Tests for application and how to run them:*
    
    ${userResponses.tests}`
    };
  
    // license
    draftMarkdown +=
    `
    
    ## License
    
    ${userResponses.license}
    `;
  
  
    // questions
    let draftDev = 
    `
    ---
    
    ## Questions?
  
    <img src="${userInfo.avatar_url}" alt="${userInfo.login}" width="40%" />
    
    For any questions, please contact me with the information below:
   
    GitHub: [@${userInfo.login}](${userInfo.url})
    `;
  
    // add GitHub email to developer section
    if (userInfo.email !== null) {
    
    draftDev +=
    `
  
    Email: ${userInfo.email}
  
    `};
  
    // Add developer section
    draftMarkdown += draftDev;
  
    // Return markdown
    return draftMarkdown;
    
  }
  
  module.exports = generateMarkdown;