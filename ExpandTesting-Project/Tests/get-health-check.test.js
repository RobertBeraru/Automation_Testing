const{request,spec} = require ('pactum')
const baseURL = 'https://practice.expandtesting.com/notes/api'

describe('Get Health Check test suite', () => {
    before(() => {
        request.setDefaultTimeout(10000);
    });
    it('Website Health Check test', async() => {
        await spec()
        .get(baseURL+'/health-check')
        .expectStatus(200)
        
    });    
});
