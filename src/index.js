const tbody = document.querySelector("#tboddy");
console.log(tbody);
const handleDeleete = (id) => {
  fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });
};
const showProduct = () => {
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {
      tbody.innerHTML = data
        .map((product, index) => {
          return `
        <tr>
          <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>
                    <button data-id='${
                      product.id
                    }' class='btn btn-danger delete'>Xóa</button>
                    <a href='/update.html?id=${
                      product.id
                    }' class='btn btn-success '>Update</a>
                </td>
        </tr>
            `;
        })
        .join("");

      const deleteBtn = document.querySelectorAll(".delete");
      deleteBtn.forEach((item) => {
        item.addEventListener("click", () => {
          data = item.dataset.id;

          const result = confirm("Are you sure you want to delete");
          if (result) {
            handleDeleete(data);
          }
        });
      });
    });
};

showProduct();
