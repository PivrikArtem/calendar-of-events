export function startOfNotifications() {
  // debugger;
  Notification.requestPermission().then(function (result) {
    if (result === 'denied') {
      console.log('denied');

      return;
    }
    if (result === 'granted') {
      console.log('granted');
      spawnNotification([1, 2, 3], '/icon.svg', 'new title');
      return;
    }
    // Do something with the granted permission.
  });
  function spawnNotification(body, icon, title) {

    let dts = new Date().getDate();
    let options = {
      body: body,
      icon: icon,
      timestamp: dts
    };
    let n = new Notification(title, options);
    console.log(n);
    n.time = time();

    function time() {
      setTimeout(() => {
        console.log(1);
      }, 5000);
    }

  }
}




