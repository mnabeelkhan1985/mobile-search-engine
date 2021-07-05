
var data = {
    oppo: {
        reno5: {
            brand: "oppo",
            name: "Oppo Reno 5",
            price: 55000,
            url: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno5-5g.jpg"
        },
        a15: {
            brand: "oppo",
            name: "Oppo A15",
            price: 18000,
            url: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-a15-1.jpg"
        },
        reno20: {
            brand: "oppo",
            name: "Oppo Reno 20",
            price: 61000,
            url: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno2-1.jpg"
        },
        a32: {
            brand: "oppo",
            name: "Oppo A32",
            price: 28000,
            url: "https://www.whatmobile.com.pk/admin/images/Oppo/OppoA32-b.jpg"
        },
        reno2: {
            brand: "oppo",
            name: "Oppo Reno 2",
            price: 15000,
            url: "https://www.whatmobile.com.pk/admin/images/Oppo/OppoReno2-b.jpg"
        },
        P15: {
            brand: "oppo",
            name: "Oppo P15",
            price: 38000,
            url: "https://www.whatmobile.com.pk/admin/images/Oppo/OppoF15-b.jpg"
        },
        reno15: {
            brand: "oppo",
            name: "Oppo Reno 15",
            price: 30000,
            url: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno5-5g.jpg"
        },
        a20: {
            brand: "oppo",
            name: "Oppo A20",
            price: 28000,
            url: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno5-5g.jpg"
        },
    },
    samsung: {
        a32: {
            brand: "Samsung",
            name: "Samsung Galaxy A32",
            price: 37000,
            url: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a32-5g.jpg"
        },
        a52: {
            brand: "Samsung",
            name: "Samsung Galaxy A52",
            price: 52000,
            url: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a52-5g.jpg"
        },
        s5: {
            brand: "Samsung",
            name: "Samsung Galaxy S5",
            price: 39000,
            url: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s5-g900f-1.jpg"
        },
        s12: {
            brand: "Samsung",
            name: "Samsung Galaxy S12",
            price: 77000,
            url: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a12-sm-a125-1.jpg"
        },
        a10: {
            brand: "Samsung",
            name: "Samsung Galaxy A10",
            price: 47000,
            url: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a10-0.jpg"
        },
        a51: {
            brand: "Samsung",
            name: "Samsung Galaxy A51",
            price: 4000,
            url: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a51-sm-a515-1.jpg"
        },
        a20s: {
            brand: "Samsung",
            name: "Samsung Galaxy A20s",
            price: 27000,
            url: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20s-sm-a207-1.jpg"
        },
        a30: {
            brand: "Samsung",
            name: "Samsung Galaxy A30",
            price: 50000,
            url: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a30-2.jpg"
        },
    },
    realme: {
        realme5pro: {
            brand: "Realme",
            name: "Realme 5 Pro",
            price: 41000,
            url: "https://fdn2.gsmarena.com/vv/bigpic/realme-5-pro-rmx1971.jpg"
        },
        realme8: {
            brand: "Realme",
            name: "Realme 8",
            price: 36000,
            url: "https://fdn2.gsmarena.com/vv/bigpic/realme-8.jpg"
        },
        realme6pro: {
            brand: "Realme",
            name: "Realme 5 Pro",
            price: 41000,
            url: "https://fdn2.gsmarena.com/vv/bigpic/realme-5-pro-rmx1971.jpg"
        },
        realme7: {
            brand: "Realme",
            name: "Realme 8",
            price: 36000,
            url: "https://fdn2.gsmarena.com/vv/bigpic/realme-8.jpg"
        },
        realme7pro: {
            brand: "Realme",
            name: "Realme 5 Pro",
            price: 41000,
            url: "https://fdn2.gsmarena.com/vv/bigpic/realme-5-pro-rmx1971.jpg"
        },
        realme6: {
            brand: "Realme",
            name: "Realme 8",
            price: 36000,
            url: "https://fdn2.gsmarena.com/vv/bigpic/realme-8.jpg"
        },
    },
    iphone: {
        iphone12pro: {
            brand: "Iphone",
            name: "Iphone 12 Pro",
            price: 191000,
            url: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-r1.jpg"
        },
        iphone11: {
            brand: "Iphone",
            name: "Iphone 11",
            price: 136000,
            url: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-1.jpg"
        },
        iphone12: {
            brand: "Iphone",
            name: "Iphone 12",
            price: 141000,
            url: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-4.jpg"
        },
        iphone8: {
            brand: "Iphone",
            name: "Iphone 8",
            price: 55000,
            url: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-8-4.jpg"
        },
    }
}

for (var key in data) {
    for (var key1 in data[key]) {
        var col = document.createElement('div')
        col.setAttribute('class', 'col')

        var card = document.createElement('div')
        card.setAttribute('class', 'card h-100')

        var img = new Image()
        img.src = data[key][key1].url;
        img.setAttribute('class', 'card-img-top')

        var cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')

        var modelTitle = document.createElement('h5');
        var mtext = document.createTextNode(data[key][key1].brand)
        modelTitle.appendChild(mtext)
        modelTitle.setAttribute('class', 'card-title')

        var cardTitle = document.createElement('h5');
        var ctext = document.createTextNode(data[key][key1].name)
        cardTitle.appendChild(ctext)
        cardTitle.setAttribute('class', 'card-title')

        var price = document.createElement('p');
        var ptext = document.createTextNode(data[key][key1].price)
        price.appendChild(ptext);
        price.setAttribute('class', 'card-text')

        cardBody.appendChild(modelTitle)
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(price)
        card.appendChild(img)
        card.appendChild(cardBody)
        col.appendChild(card)
        mainSection.appendChild(col)
    }
}

function search() {
    var brand = document.getElementById('brand').value.toLowerCase();
    var model = document.getElementById('model').value.toLowerCase();
    console.log(brand, model);
    console.log(data[brand][model]);
    if(brand === "" || model === "" ){
        alert("PLease enter model name")
    }
    else{
        document.getElementById("mainSection").innerHTML = ""
        console.log(brand, model);
        console.log(data[brand][model]);
    
        var col = document.createElement('div')
        col.setAttribute('class', 'col')
    
        var card = document.createElement('div')
        card.setAttribute('class', 'card h-100')
    
        var img = new Image()
        img.src = data[brand][model].url;
        img.setAttribute('class', 'card-img-top')
    
        var cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')
    
        var cardTitle = document.createElement('h5');
        var ctext = document.createTextNode(data[brand][model].name)
        cardTitle.appendChild(ctext)
        cardTitle.setAttribute('class', 'card-title')
    
        var price = document.createElement('p');
        var ptext = document.createTextNode(data[brand][model].price)
        price.appendChild(ptext);
        price.setAttribute('class', 'card-text')
    
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(price)
        card.appendChild(img)
        card.appendChild(cardBody)
        col.appendChild(card)
        mainSection.appendChild(col)
    }

}