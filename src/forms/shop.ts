import { Shop } from "../ShoppingCart/shoppingCart"

const shopForm = document.createElement('form')
let myShop:Shop

export function initializeShopItems(shop:Shop) {
    myShop = shop
}

export function shopItems() {
    
    shopForm.id = 'shop-form'

    const itemLabel = document.createElement('label')
    itemLabel.textContent = 'Items'
    const itemName = document.createElement('label')
    itemName.textContent = 'Computer'
    const itemInput = document.createElement('input')
    itemInput.type = 'text'
    itemInput.id = 'item'
    itemInput.name = 'item'
    itemInput.required = false;

    const qtyLabel = document.createElement('label');
    qtyLabel.textContent = 'qty:';
    const qtyInput = document.createElement('input');
    qtyInput.type = 'number';
    qtyInput.id = 'qty';
    qtyInput.name = 'qty';
    qtyInput.required = true;
  
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';


  
    shopForm.appendChild(itemLabel);
   
    shopForm.appendChild(document.createElement('br'));
    shopForm.appendChild(itemLabel);
    shopForm.appendChild(document.createElement('br'));
    // shopForm.appendChild(itemName);
    // shopForm.appendChild(qtyInput);
    displayAllShopItems()
    shopForm.appendChild(document.createElement('br'));
    // shopForm.appendChild(qtyInput);
    // shopForm.appendChild(document.createElement('br'));
    
    shopForm.appendChild(submitButton);
    
  
    //shopForm.addEventListener('submit', handleSubmit);
  
    const container = document.createElement('div');
    container.appendChild(shopForm);
  
    document.body.appendChild(container);
}

export function displayAllShopItems()
{
    for(let i = 0; i < myShop.items.length; i++){
        
        let qtyLabel = document.createElement('label')
        qtyLabel.id = 'qty_label'
        qtyLabel.textContent = '  | Qty: '
        
        let itemName = document.createElement('label')
        let qtyInput = document.createElement('input');
        qtyInput.style.width = '50px'
        qtyInput.type = 'number';
        qtyInput.id = 'qty_item_' + i
        itemName.id = 'item_' + i
        itemName.textContent = myShop.items[i].name
        //itemName.style.marginRight = '10px'
        shopForm.appendChild(itemName)
        shopForm.appendChild(qtyLabel)
        shopForm.appendChild(qtyInput)
        shopForm.appendChild(document.createElement('br'));
    }

    //shopForm.style.visibility = 'hidden'
}

export function setShopVisibility(){
    shopForm.style.visibility = 'visible'  
}
  
//   function handleSubmit(event: Event) {
//     event.preventDefault();
  
//     const nameInput = document.getElementById('item') as HTMLInputElement;
//     const ageInput = document.getElementById('qty') as HTMLInputElement;
  
//     const item = nameInput.value;
//     const qty = ageInput.value;


// }

document.addEventListener('DOMContentLoaded', shopItems);