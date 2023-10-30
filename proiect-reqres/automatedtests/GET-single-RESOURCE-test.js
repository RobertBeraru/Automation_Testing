const {spec, request} = require ('pactum')

describe('GET list Resource', () => {

    before(async () =>{
    request.setDefaultTimeout(10000);
});

    const baseURL = 'https://reqres.in/'

    it('GET list Resource', async() => {

        await spec()
        .get (baseURL+'api/unknown/2')
        .expectStatus(200)
        
    });
    
});