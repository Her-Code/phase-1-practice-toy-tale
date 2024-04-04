let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
// document.addEventListener('DOMContentLoaded', () => {
//   const toyCollection = document.getElementById('toy-collection');
//   const newToyForm = document.querySelector('.add-toy-form');

//   // Fetch and display all toys
//   fetchToys();

//   function fetchToys() {
//     fetch('http://localhost:3000/toys')
//       .then(response => response.json())
//       .then(toys => {
//         toys.forEach(toy => renderToy(toy));
//       });
//   }

//   function renderToy(toy) {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.innerHTML = `
//       <h2>${toy.name}</h2>
//       <img src="${toy.image}" class="toy-avatar" />
//       <p>${toy.likes} Likes</p>
//       <button class="like-btn" data-id="${toy.id}">Like ❤️</button>
//     `;
//     toyCollection.appendChild(card);

//     const likeButton = card.querySelector('.like-btn');
//     likeButton.addEventListener('click', () => {
//       likeToy(toy);
//     });
//   }

//   // Handle form submission to add new toy
//   newToyForm.addEventListener('submit', event => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const name = formData.get('name');
//     const image = formData.get('image');

//     createToy({ name, image });
//     event.target.reset();
//   });

//   function createToy(toyData) {
//     fetch('http://localhost:3000/toys', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name: toyData.name,
//         image: toyData.image,
//         likes: 0,
//       }),
//     })
//       .then(response => response.json())
//       .then(toy => renderToy(toy));
//   }

//   // Like a toy
//   function likeToy(toy) {
//     const likesElement = toyCollection.querySelector(`[data-id="${toy.id}"]`).previousElementSibling;
//     const newLikes = toy.likes + 1;

//     fetch(`http://localhost:3000/toys/${toy.id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ likes: newLikes }),
//     })
//       .then(response => response.json())
//       .then(updatedToy => {
//         likesElement.textContent = `${updatedToy.likes} Likes`;
//         toy.likes = updatedToy.likes;
//       });
//   }
// });
// document.addEventListener('DOMContentLoaded', () => {
//   const toyCollection = document.getElementById('toy-collection');
//   const newToyBtn = document.getElementById('new-toy-btn');
//   const toyForm = document.getElementById('toy-form');

//   // Fetch Andy's Toys
//   fetchToys();

//   function fetchToys() {
//     fetch('http://localhost:3000/toys')
//       .then(response => response.json())
//       .then(toys => {
//         toys.forEach(toy => renderToy(toy));
//       });
//   }

//   function renderToy(toy) {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.innerHTML = `
//       <h2>${toy.name}</h2>
//       <img src="${toy.image}" class="toy-avatar" />
//       <p>${toy.likes} Likes</p>
//       <button class="like-btn" data-id="${toy.id}">Like ❤️</button>
//     `;
//     toyCollection.appendChild(card);

//     const likeBtn = card.querySelector('.like-btn');
//     likeBtn.addEventListener('click', () => {
//       likeToy(toy);
//     });
//   }
//   document.addEventListener('DOMContentLoaded', () => {
//     const newToyBtn = document.getElementById('new-toy-btn');
    
//   // Add a New Toy
//   newToyBtn.addEventListener('click', () => {
//     const container = document.querySelector('.container');
//     container.style.display = container.style.display === 'none' ? 'block' : 'none';
//   });
//   })

//   toyForm.addEventListener('submit', event => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const name = formData.get('name');
//     const image = formData.get('image');

//     if (name && image) {
//       createToy({ name, image, likes: 0 });
//       event.target.reset();
//     } else {
//       alert('Please fill in both name and image fields.');
//     }
//   });

//   function createToy(toyData) {
//     fetch('http://localhost:3000/toys', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify(toyData),
//     })
//       .then(response => response.json())
//       .then(toy => renderToy(toy));
//   }

//   // Increase a Toy's Likes
//   function likeToy(toy) {
//     const newLikes = toy.likes + 1;

//     fetch(`http://localhost:3000/toys/${toy.id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify({ likes: newLikes }),
//     })
//       .then(response => response.json())
//       .then(updatedToy => {
//         const toyCard = document.querySelector(`.like-btn[data-id="${updatedToy.id}"]`).parentElement;
//         toyCard.querySelector('p').textContent = `${updatedToy.likes} Likes`;
//       });
//   }
// });
document.addEventListener("DOMContentLoaded", () => {
  const toyCollection = document.querySelector("#toy-collection");
  const toyForm = document.querySelector(".add-toy-form");

  // Fetch Andy's Toys
  fetchToys();

  // Add event listener for form submit
  toyForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const name = event.target.name.value;
    const image = event.target.image.value;
    addNewToy(name, image);
  });

  // Function to fetch toys
  function fetchToys() {
    fetch("http://localhost:3000/toys")
      .then((response) => response.json())
      .then((toys) => {
        toys.forEach((toy) => {
          createToyCard(toy);
        });
      });
  }

  // Function to create a new toy card
  function createToyCard(toy) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${toy.name}</h2>
      <img src="${toy.image}" class="toy-avatar" />
      <p>${toy.likes} Likes</p>
      <button class="like-btn" data-id="${toy.id}">Like ❤️</button>
    `;
    toyCollection.appendChild(card);

    // Add event listener for like button
    const likeButton = card.querySelector(".like-btn");
    likeButton.addEventListener("click", () => {
      increaseLikes(toy);
    });
  }

  // Function to add a new toy
  function addNewToy(name, image) {
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        likes: 0,
      }),
    })
      .then((response) => response.json())
      .then((toy) => {
        createToyCard(toy);
      });
  }

  // Function to increase toy likes
  function increaseLikes(toy) {
    const newLikes = toy.likes + 1;
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        likes: newLikes,
      }),
    })
      .then((response) => response.json())
      .then((updatedToy) => {
        const card = toyCollection.querySelector(`[data-id="${updatedToy.id}"]`);
        const likeElement = card.querySelector("p");
        likeElement.textContent = `${updatedToy.likes} Likes`;
        toy.likes = updatedToy.likes; // Update toy object with new likes count
      });
  }
});
