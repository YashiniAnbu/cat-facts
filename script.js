async function getCatFact() {
  const factEl = document.getElementById("fact");
  const btn = document.getElementById("btn");
 btn.disabled = true;
 factEl.textContent = "Loading...";
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    factEl.textContent = data.fact;
  } catch (error) {
    factEl.textContent = "Error fetching fact";
    console.error(error);
  }
  btn.disabled = false;
}
getCatFact();