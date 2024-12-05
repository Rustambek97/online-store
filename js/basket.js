let basket_json = [
    {
        'img': '../media/chocolate/01.png',
        'name': 'Zolotoy',
        'price': 15000,
        'count': 3,
        'total_price': 45000
    },
    {
        'img': '../media/chocolate/04.png',
        'name': 'Kit Kat',
        'price': 12000,
        'count': 1,
        'total_price': 12000
    },
    {
        'img': '../media/drink/03.png',
        'name': 'coca-cola',
        'price': 14000,
        'count': 3,
        'total_price': 42000
    },
    {
        'img': '../media/chocolate/13.png',
        'name': 'Alpen Gold',
        'price': 13000,
        'count': 3,
        'total_price': 39000
    },
    {
        'img': '../media/chocolate/12.png',
        'name': 'Alpen Gold',
        'price': 13000,
        'count': 3,
        'total_price': 39000
    }
];

let backet = document.querySelector('.backet');

for (let i = 1; i <= 5; i++) {
    let div = document.createElement('div');
    div.classList.add('backet-items');

    div.innerHTML = `
    <img src="${basket_json[i]['img']}" class="backet-img">
    <p class="backet-name">name:${basket_json[i]['name']}</p>
    <p class="backet-price">price:${basket_json[i]['price']}</p>
    <p class="backet-count">count:${basket_json[i]['count']}</p>
    <p class="total-price">total price:${basket_json[i]['total_price']}</p>
    <div class="backet-button">
         delete
    </div>
    `;

    backet.appendChild(div);
}

