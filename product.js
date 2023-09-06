const flowers = [
  {
    image: "flowerimg/snowfoll.png",
    name: "Snowfall",
    price: 1000,
  },
  {
    image: "flowerimg/dawnsdelight.png",
    name: "DawnsDelight",
    price: 1000,
  },
  {
    image: "flowerimg/pinkelegance.png",
    name: "RusticCharm",
    price: 1000,
  },

  {
    image: "flowerimg/rusticscharm.png",
    name: "AutumnSymphony",
    price: 1000,
  },

  {
    image: "flowerimg/autumnsymphany.png",
    name: "RusticCharm",
    price: 1000,
  },
  {
    image: "flowerimg/rosydelight.png",
    name: "RosyDelight",
    price: 1000,
  },
  {
    image: "flowerimg/serenity.png",
    name: "Serenity",
    price: 1000,
  },
  {
    image: "flowerimg/blue.png",
    name: "BlueHarmony",
    price: 1000,
  },
  {
    image: "flowerimg/mysticalmojestry.png",
    name: "MysticalMajesty",
    price: 1000,
  },

  {
    image: "flowerimg/card item.png",
    name: "BlazingBlossoms",
    price: 1000,
  },
];

//console.log(flowers);

function addimages(event) {
  const root = document.querySelector("#root");

  flowers.forEach(function (flower, i) {
    const div = createimage(flower, i);
    root.appendChild(div);
  });
}
//console.log(addimages());
function createimage(flower, i) {
  const div = document.createElement("div");

  const anchor = document.createElement("a");
  anchor.setAttribute("href", `/productpage.html?id=${i}`);
  div.appendChild(anchor);

  const img = document.createElement("img");
  img.setAttribute("src", flower.image);

  const price = document.createElement("p");
  price.innerHTML = flower.price;

  const name = document.createElement("p");
  name.innerHTML = flower.name;

  div.append(img, price, name);

  return div;
}

// addimages();

function displayImages(flower) {
  const wrap = document.createElement("div");

  const flowersImages = document.createElement("div");

  const fimage = document.createElement("img");
  fimage.setAttribute("src", flower.image);
  const name = document.createElement("p");
  name.innerHTML = flower.name;
  const price = document.createElement("p");
  price.innerHTML = flower.price;
  flowersImages.append(fimage, name, price);
  wrap.appendChild(flowersImages);
  return wrap;
}
(() => {
  const serializedItems = JSON.stringify(flowers);
  localStorage.setItem("catalog", serializedItems);
})();
