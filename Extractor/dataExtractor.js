const jsdom = require('jsdom');
const {JSDOM} = jsdom
exports.extractDatas =(webContent)=>{
const {document} = new JSDOM(webContent).window;
document.querySelectorAll('.company-list').forEach((job,index)=>{
   const jobTitle = job.querySelector('a').textContent
   const companyName = job.querySelector('.jobs-comp-name').textContent
   const jobDate = job.querySelector('.job-date').textContent
   const jobLink = job.querySelector("a").getAttribute('href')
   console.log(index,jobTitle,companyName,jobDate,jobLink);
   
    
})

}