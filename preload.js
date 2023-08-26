const Tick = require("@pqina/flip");

window.addEventListener("DOMContentLoaded", () => {
  const handleTick = (tick) => {
    Tick.helper.interval(() => {
      const d = Tick.helper.date();
      tick.value = {
        sep: " : ",
        hours: d.getHours(),
        minutes: d.getMinutes(),
        seconds: d.getSeconds(),
      };
    });
  };

  Tick.DOM.create(document.getElementById("tick"), {
    value: 0,
  });
});
