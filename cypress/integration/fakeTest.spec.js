describe('API testing', () => {


    it('first one', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo')

        cy.intercept({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode : 200,
            body : [{
                    aisle: "1947",
                    book_name: "El principito",
                    isbn: "ESP2021"
                }]

        }).as('bookretrievals')
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookretrievals').should(({request, response})=>{

            cy.get('tr').should('have.length' , response.body.length+1)
            
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')

        // length  of the respond table array


    })
})