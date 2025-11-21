const amountInput = document.querySelector('#order-amount');
const shippingSelect = document.querySelector('#shipping-type');
const calcButton = document.querySelector('#calc-btn');
const resultEl = document.querySelector('#result');

function formatPrice(value) {
  return value.toFixed(2).replace('.', ',') + ' €';
}

class Shipping {
  calculate(orderAmount) {
    throw new Error('Méthode calculate() non implémentée');
  }
}

class StandardShipping extends Shipping {
  calculate(orderAmount) {
    return orderAmount >= 50 ? 0 : 4.99;
  }
}

class ExpressShipping extends Shipping {
  calculate(orderAmount) {
    return orderAmount >= 100 ? 0 : 9.99;
  }
}

class PickupShipping extends Shipping {
  calculate(orderAmount) {
    return orderAmount >= 30 ? 0 : 2.99;
  }
}

function getShipping(type) {
  const map = {
    standard: new StandardShipping(),
    express: new ExpressShipping(),
    pickup: new PickupShipping()
  };
  return map[type] || new StandardShipping();
}

calcButton.addEventListener('click', () => {
  const type = shippingSelect.value;
  const amount = Number(amountInput.value) || 0;

  const shipping = getShipping(type);
  const shippingCost = shipping.calculate(amount);

  resultEl.textContent = 'Frais de livraison : ' + formatPrice(shippingCost);
});
