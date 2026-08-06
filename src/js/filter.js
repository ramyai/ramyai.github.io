document.addEventListener("DOMContentLoaded", () => {
  const buttons = Array.from(document.querySelectorAll(".filter-btn"));
  const blocks = Array.from(document.querySelectorAll(".project-block"));
  const emptyState = document.getElementById("empty-state");

  // Only one keyword is ever "on" at a time (radio-button behavior), starting
  // with "featured" to match the default landing page. Clicking a button
  // switches the active keyword entirely - it doesn't add to the previous one.
  let active = "featured";

  function render() {
    let visibleCount = 0;
    blocks.forEach((block) => {
      const kws = (block.dataset.keywords || "").split(" ").filter(Boolean);
      const show = kws.includes(active);
      block.style.display = show ? "" : "none";
      if (show) visibleCount++;
    });
    buttons.forEach((b) => b.classList.toggle("active", b.dataset.keyword === active));
    if (emptyState) emptyState.hidden = visibleCount !== 0;
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      active = btn.dataset.keyword;
      render();
    });
  });

  render();
});