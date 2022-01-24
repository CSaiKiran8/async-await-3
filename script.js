let btn = document.getElementById("btn");
let data = document.getElementById("data");

const url = "https://excuser.herokuapp.com/v1/excuse/college/";

btn.addEventListener("click", async function() {
   data.innerHTML = "<h1>"+"...Loading"+"</h1>"; 
   try {
      let res = await fetch(url);
      let object = await res.json();
      // console.log(object);

      data.innerHTML = `
      <h1>ID: ${object[0].id}</h1>
      <h3>Category: ${object[0].category}</h3>
      <h3>Excuse: ${object[0].excuse}</h3>
      `;
   }
   catch (error) {
      console.log(error);
   }
});

