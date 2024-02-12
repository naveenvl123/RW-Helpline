$(".open_popup").click(function () {
  $(this)
    .parent(".popup_main")
    .children(".popup_body")
    .addClass("popup_body_show");
});
$(".popup_close").click(function () {
  $(".popup_body").removeClass("popup_body_show");
});
$(".popup_back").click(function () {
  $(".popup_body").removeClass("popup_body_show");
});



document.querySelectorAll(".content").forEach((item, index) => {
  item.addEventListener("click", async (event) => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      return;
    }
    try {
      let copySuccess = document.getElementById("copied-success");
      copySuccess.style.opacity = "1";
      setTimeout(function () { copySuccess.style.opacity = "0" }, 500);

      await navigator.clipboard.writeText(event.target.innerText);

      var tooltip = document.getElementById("myTooltip");
      tooltip.innerHTML = "Copied"

    } catch (err) {
      console.error("Failed to copy!", err);
    }
  });
});

$(document).ready(function () {
  $("button").click(function () {
    $("textarea").select();
    document.execCommand('copy');
  });

});