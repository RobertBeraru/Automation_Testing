const {spec, request} = require ('pactum')

describe('GET single user test', async()=>{

    before (async()=> {
        request.setDefaultTimeout(10000);
    })
    
    const baseURL = "https://reqres.in/"
    
    it('GET single user ', async()=>{
        await spec()
        
        .get(baseURL+'api/users/2')
        .expectStatus(200)
    });
});