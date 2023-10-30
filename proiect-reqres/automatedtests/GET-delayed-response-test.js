const {spec, request} = require ('pactum')

describe('GET Delayed Response', () => {
    

    before(async () =>{
        request.setDefaultTimeout(10000);
    });
    

    const baseURL = "https://reqres.in"

    it('GET Delayed Response', async () =>{
        this.timeout(10000)

        await spec()
        .get(baseURL+"/api/users?delay=3")
        .expectStatus(200)

        
    });
    
});