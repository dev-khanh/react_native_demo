/* eslint-disable prettier/prettier */
function InstanceInterval(time) {
  var timer = false;
  this.start = function () {
    if (!this.isRunning()) {
      timer = setInterval(() => {
        console.log('SETINTERVAL');
      }, time);
    }
  };
  this.isRunning = function () {
    return timer !== false;
  };
  this.stop = function () {
    clearInterval(timer);
    timer = false;
  };
}
export default InstanceInterval;
