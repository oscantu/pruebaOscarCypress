describe('Buscar elementos', ()=> {
    beforeEach(()=>{
        cy.visit('/'); // toma el sitio padre el especificado en baseUrl
    })
    it('Buscar elementos con multiples resultados', function(){
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain','dress')
        })
    })
    it('Buscar por elementos sin resultados', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('qwert');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain','No results')
        })
    })
})