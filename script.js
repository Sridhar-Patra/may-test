function getMenu() {
    const box = document.querySelector('.dynamic-display');
    if (box.classList.contains('menu')) {
      box.innerHTML = '';
    } else {
      fetch('https://avivashishta29.github.io/f2-contest-test/db.json')
        .then(response => response.json())
        .then(data => {
          // Display the menu items on the webpage
          const menuDiv = document.createElement('div');
          menuDiv.setAttribute('class', 'menu');
          data.forEach(item => {
            const menuItem = document.createElement('p');
            menuItem.textContent = item.name + ' - $' + item.price;
            menuDiv.appendChild(menuItem);
          });
          box.appendChild(menuDiv);
        })
        .catch(error => {
          console.log('Error fetching menu:', error);
        });
    }
  }
  
  // Function to take the order
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const order = {
          burgers: ['Burger 1', 'Burger 2', 'Burger 3']
        };
        resolve(order);
      }, 2500);
    });
  }
  
  // Function for order preparation
  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = {
          order_status: true,
          paid: false
        };
        resolve(orderStatus);
      }, 1500);
    });
  }
  
  // Function for payment
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = {
          order_status: true,
          paid: true
        };
        resolve(orderStatus);
      }, 1000);
    });
  }
  
  // Function to display the thank you message
  function thankYou() {
    alert('Thank you for eating with us today!');
  }
  
  // Event listeners for the buttons
  document.getElementById('menuButton').addEventListener('click', getMenu);
  document.getElementById('orderButton').addEventListener('click', () => {
    takeOrder()
      .then(order => {
        console.log('Order:', order);
        return orderPrep();
      })
      .then(orderStatus => {
        console.log('Order status:', orderStatus);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });
  
  document.getElementById('payButton').addEventListener('click', () => {
    payOrder()
      .then(orderStatus => {
        console.log('Order status:', orderStatus);
        if (orderStatus.paid) {
          thankYou();
        }
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });