
var btnplus =document.getElementsByClassName('btn-plus')
var btnmoin =document.getElementsByClassName('btn-moin')
var qte = document.getElementsByClassName('quantity')
var prix =document.getElementsByClassName('prix')
document.addEventListener('DOMContentLoaded', function() {
    var cards = document.getElementsByClassName('card');
    var totalElement = document.getElementById('total-achat');
    
    
    
    


for (var i = 0; i < cards.length; i++) {
    cards[i].onclick = function() {
        
        this.classList.toggle('click');
    };
}


    function updateTotal() {
        let totalAmount = 0;
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            let quantityElement = card.querySelector('.quantity');
            let priceElement = card.querySelector('.prix');
            
            let quantity = parseInt(quantityElement.textContent, 10);
            let price = parseInt(priceElement.textContent.replace('prix : ', '').replace(' dinars', ''), 10);
            
            totalAmount += quantity * price;
        }
        totalElement.textContent = `total achat : ${totalAmount} dinars`;
    }

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let btnPlus = card.querySelector('.btn-plus');
        let btnMoin = card.querySelector('.btn-moin');
        let quantityElement = card.querySelector('.quantity');
        
        
        quantityElement.textContent = '0';

        
        btnPlus.addEventListener('click', function() {
            let quantity = parseInt(quantityElement.textContent, 10);
            quantity += 1;
            quantityElement.textContent = quantity;
            updateTotal();
        });

        
        btnMoin.addEventListener('click', function() {
            let quantity = parseInt(quantityElement.textContent, 10);
            if (quantity > 0) {
                quantity -= 1;
                quantityElement.textContent = quantity;
                updateTotal();
            }
        });
    }

    
    updateTotal();
});

