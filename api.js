fetch("https://javascript.webexam-mcdm.dk/api/images")
  .then((response) => response.json())
  .then((responseData) => {
    for (let i = 0; i < responseData.length; i++) {
      const newElement = () => {
        let newDiv = document.createElement("div");
        newDiv.className = "box";
        document.getElementById("newCars").appendChild(newDiv);

        let img = document.createElement("img");
        img.src = responseData[i].url;
        img.className = "img";
        newDiv.appendChild(img);

        let heading = document.createElement("h3");
        heading.innerHTML = responseData[i].name;
        heading.className = "name";
        newDiv.appendChild(heading);
      };

      newElement();
    }
  });
