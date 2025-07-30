function createSubscription(subscriptionId, magazineName, subscriptionDate, durationDays) {
  const id = subscriptionId;
  const name = magazineName;
  const startDate = new Date(subscriptionDate);
  const duration = durationDays;

  console.log("Inside createSubscription:");
  console.log(`  Subscription ID: ${id}`);
  console.log(`  Magazine Name: ${name}`);
  console.log(`  Start Date: ${startDate.toDateString()}`);
  console.log(`  Duration: ${duration} days`);

  function checkExpiry() {
    debugger; // <- This triggers DevTools to pause here automatically
    console.log("Inside checkExpiry:");
    const today = new Date();
    const expiryDate = new Date(startDate);
    expiryDate.setDate(expiryDate.getDate() + duration);

    console.log(`  Today is: ${today.toDateString()}`);
    console.log(`  Expiry date is: ${expiryDate.toDateString()}`);

    if (today > expiryDate) {
      console.log(`  Subscription ${id} has expired.`);
    } else {
      console.log(`  Subscription ${id} is still active.`);
    }
  }

  return checkExpiry;
}

const expiryChecker = createSubscription("SUB123", "Tech Monthly", "2024-04-01", 30);

document.getElementById('checkBtn').addEventListener('click', () => {
  expiryChecker();
});