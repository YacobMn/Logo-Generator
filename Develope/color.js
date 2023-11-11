function colorGenerate(data) {
    return `# ${data.title}
    ## Discription
    ${data.discription}
    ## table of contents
    - [Discription](#discription)
    - [Instilation](#instilation)
    ## instilation
    ${data.license}
    ## Usage
    ${data.instilation}
    ## License
    ${data.usage}
    ## contribution
    ${data.contribution}
    ## Features
    ${data.features}
    ## Test
    ${data.test}
  
    
    
  
  `;
  }
  
  module.exports = colorGenerate;
  