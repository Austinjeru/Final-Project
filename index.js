document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const dish = document.getElementById('dish').value;
    const quantity = document.getElementById('quantity').value;
    document.getElementById('orderMessage').textContent =
      `You have ordered ${quantity} ${dish.replace('-', ' ')}(s). Thank you!`;
  });
  
  document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    document.getElementById('reservationMessage').textContent =
      `Reservation confirmed for ${name} on ${date} at ${time} for ${guests} guest(s).`;
  });