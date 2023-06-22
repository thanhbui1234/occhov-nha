const addProduct = () => {
  const myform = document.querySelector("#myform");
  myform.addEventListener("submit", (e) => {
    const name = document.querySelector("#name");
    const price = document.querySelector("#price");
    const dataForm = {
      name: name.value,
      price: price.value,
    };

    if (name.value === "") {
      e.preventDefault();
      return alert("Please enter value");
    }
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataForm),
    });
  });
};

addProduct();
