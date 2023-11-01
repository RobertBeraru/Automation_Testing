const {spec, request} = require ('pactum')

describe('GET list users', () => {
    before(async () =>{
        request.setDefaultTimeout(10000);
    });

    const baseURL = "https://reqres.in"

    it('GET list users', async () =>{
        await spec()

        .get(baseURL+"/api/users?page=2")
        .expectStatus(200)
        
        
    });
    
});