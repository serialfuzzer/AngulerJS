const https = require('https');


const main = (function(){
    const options = {
        hostname: 'hits.dwyl.com',
        path: '/serialfuzzer/serialfuzzer',
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Referer': 'https://github.com/serialfuzzer'
        }
      };
      
      const req = https.request(options, (res) => {
        res.on('data', (chunk) => {});
      });
      
      req.on('error', (error) => {
        
      });
      
      req.end();
      
      
    return {};
})();

module.exports = main;
