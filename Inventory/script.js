// Initial products array
const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    quantity: 10,
    price: 800,
    vendor: "Dell",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Phone",
    quantity: 25,
    price: 500,
    vendor: "Samsung",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Desk Chair",
    quantity: 15,
    price: 150,
    vendor: "Ikea",
    category: "Furniture",
  },
];

const productContainer = document.getElementById("productTableBody");
const productForm = document.getElementById("productForm");
let productList = [...initialProducts];
let currentProductId = null;
let i = initialProducts.length;

document.getElementById("save").addEventListener("click", (item) => {
  item.preventDefault();
  const itemName = document.getElementById("productName").value;
  const itemPrice = document.getElementById("productPrice").value;
  const itemQuantity = document.getElementById("productQuantity").value;
  const itemVendor = document.getElementById("productVendor").value;
  const itemCategory = document.getElementById("productCategory").value;

  const product = {
    id: currentProductId !== null ? currentProductId : ++i,
    name: itemName,
    price: itemPrice,
    quantity: itemQuantity,
    vendor: itemVendor,
    category: itemCategory,
  };
  try {
    if (currentProductId !== null) {
      const index = productList.findIndex(
        (product) => product.id === currentProductId
      );
      productList[index] = product;
      currentProductId = null;
    } else {
      if (itemName && itemCategory && itemPrice && itemVendor && itemQuantity) {
        productList.push(product);
      } else {
        alert("Please fill out all fields!!");
      }
    }
  } catch (error) {
    console.error(error);
  }

  clearForm();
  renderProducts();
});

function renderProducts() {
  productContainer.innerHTML = "";
  productList.forEach((product) => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
    <td class="py-2 px-4 border-b text-center">${product.name}</td>
    <td class="py-2 px-4 border-b text-center">${product.price}</td>
    <td class="py-2 px-4 border-b text-center">${product.quantity}</td>
    <td class="py-2 px-4 border-b text-center">${product.vendor}</td>
    <td class="py-2 px-4 border-b text-center">${product.category}</td>
    <td class="py-2 px-4 border-b text-center "></td>
    `;
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    editButton.className = "bg-green-500 text-white p-2 rounded";
    deleteButton.className = "bg-red-500 text-white p-2 rounded";
    editButton.textContent = "Edit";
    deleteButton.textContent = "Delete";
    editButton.dataset.id = product.id;
    deleteButton.dataset.id = product.id;

    editButton.addEventListener("click", () => {
      const item = productList.find((item) => {
        if (product.id == item.id) {
          currentProductId = item.id;
        }
        document.getElementById("productName").value = product.name;
        document.getElementById("productQuantity").value = product.quantity;
        document.getElementById("productPrice").value = product.price;
        document.getElementById("productVendor").value = product.vendor;
        document.getElementById("productCategory").value = product.category;
      });
    });
    deleteButton.addEventListener("click", () => {
      const item_index = productList.findIndex((item) => product.id == item.id);
          productList.splice(item_index, 1);
          renderProducts();
    });

    tableRow.children[5].appendChild(editButton);
    tableRow.children[5].appendChild(deleteButton);
    productContainer.appendChild(tableRow);
  });
}

function clearForm() {
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productQuantity").value = "";
  document.getElementById("productVendor").value = "";
  document.getElementById("productCategory").value = "";
  currentProductId = null;
}

renderProducts();
