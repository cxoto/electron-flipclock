window.addEventListener("DOMContentLoaded", () => {
  for (const dependency of ["chrome", "node", "electron"]) {
    console.log(process.versions[dependency]);
  }
});
