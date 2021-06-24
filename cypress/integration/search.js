describe('Buscar elementos', ()=> {
    beforeEach(()=>{
        cy.visit('/'); // toma el sitio padre el especificado en baseUrl
    })
    it('Buscar elementos con multiples resultados', function(){
        cy.search('dress');
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain','dress')
        })
    })
    it('Buscar por elementos sin resultados', ()=>{
        cy.search('qwerty');
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain','No results')
        })
    })
})