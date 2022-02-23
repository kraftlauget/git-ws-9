$(() => {
  $("#menu-awesome-toggle").on("click", () => {
    $("#menu-container").toggleClass("move-around");
    $("#menu-container ul").toggleClass("bouncy");
  });
});
