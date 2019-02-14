export function startOfNotifications() {
  Notification.requestPermission().then(function (result) {
    if (result === 'denied') {
      console.log('denied');
      return;
    }
    if (result === 'granted') {
      console.log('granted');
      spawnNotification('you have meeting today');
    }
  });
}
export function spawnNotification(title) {
  let n = new Notification(title);
  n.setTime = function (day) {
    setTimeout(() => {
      alert(`you have meeting ${day} today`);
    }, day * 24 * 3600 * 1000);
  }
  return n;
}


