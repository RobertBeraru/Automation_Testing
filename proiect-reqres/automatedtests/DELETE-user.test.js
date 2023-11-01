const {spec, request} = require ('pactum')
const {faker} = require('@faker-js/faker')

describe('DELETE users', () => {
    before(async () =>{
        request.setDefaultTimeout(10000);
    });

    const baseURL = "https://reqres.in"
    let userID = faker.number.int({ max: 20 })

    it('DELETE list users', async () =>{
        await spec()
        .delete(baseURL+"/api/users/"+userID)
        .expectStatus(204)
        
    });

    after(() => {
        console.log(`The user with the id ${userID} has been succesfully removed.`)
    });
    
});
