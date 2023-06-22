const updateProduct = () => {
  const params = new URLSearchParams(document.location.search);
  const id = params.get("id");

  const apppp = document.querySelector("#body");

  fetch(`http://localhost:3000/products/${id}`)
    .then((res) => res.json())
    .then((products) => {
      const dataProduct = `
    <h1>cập nhật sản phẩm</h1>
         <form class="container" id="myform" action="/index.html">
      <div class="my-3">
        <label class="form-control" for="">Name</label>
        <input class="form-control" value='${products.name}' id="name" type="text" />
      </div>
      <div class="my-3">
        <label class="form-control" for="">Price</label>
        <input class="form-control" value='${products.price}' id="price" type="text" />
      </div>

      <button class="btn btnUpdate btn-success">Cập nhật sản phẩm</button>
    </form>
        `;

      apppp.innerHTML = dataProduct;

      const myform = document.querySelector(".btnUpdate");
      myform.addEventListener("click", (e) => {
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
        fetch(`http://localhost:3000/products/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataForm),
        }).then(() => {
          alert("Success");
        });
      });
    });
};

updateProduct();
