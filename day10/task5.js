function countdown(targetDate) {
  const target = new Date(targetDate);
  const timer = setInterval(() => {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
      console.log("Count down completed");
      clearInterval(timer);
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  }, 1000);
}
countdown("2025-11-4");
