describe('API Test suite', () => {


    it('API Test Case', ()=>{
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php' , {

            "name":"Learn Java part 3",
            "isbn":"bcdk",
            "aisle":"2279",
            "author":"John Die"
            }).then((response)=>{
                expect(response.body).to.have.property("Msg", "successfully added")
        })
    })
})
