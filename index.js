const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21492,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4000,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 15225,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const postContainer = document.getElementById("post-container");

  let liked = Array(posts.length).fill(false);

  let postHTML = "";

  for (let index = 0; index < posts.length; index++) {
    const post = posts[index];

    postHTML += `
      <section class="px-3 mt-3">
        <div class="flex items-center gap-[0.5rem]">
          <img
            src="${post.avatar}"
            alt="Profile picture of ${post.name}"
            class="rounded-full w-[2.3rem]"
          />
          <div class="flex flex-col">
            <h1 class="font-bold">${post.name}</h1>
            <p>${post.location}</p>
          </div>
        </div>
        <img
          src="${post.post}"
          alt="Post by ${post.name}"
          class="mt-3 m-auto w-[40rem]"
        />
        <div class="flex items-center gap-2 mt-3">
          <i
            data-lucide="heart"
            id="heart-icon-${index}"
            class="cursor-pointer hover:opacity-50"
          ></i>
          <img
            src="images/icon-comment.png"
            alt="Comment icon"
            class="cursor-pointer hover:opacity-50 w-[1.5rem]"
          />
          <img
            src="images/icon-dm.png"
            alt="Dm icon"
            class="cursor-pointer hover:opacity-50 w-[1.5rem]"
          />
        </div>
        <div class="flex flex-col gap-2 mt-3">
          <p class="font-bold" id="likes-${index}">${post.likes.toLocaleString()} likes</p>
          <p>
            <span class="font-bold">${post.username}</span> ${post.comment}
          </p>
        </div>
      </section>
    `;
  }

  postContainer.innerHTML = postHTML;
  lucide.createIcons();

  for (let index = 0; index < posts.length; index++) {
    const heartIcon = document.getElementById(`heart-icon-${index}`);
    const likesCount = document.getElementById(`likes-${index}`);

    heartIcon.addEventListener("click", function () {
      liked[index] = !liked[index];

      if (liked[index]) {
        heartIcon.style.stroke = "red";
        heartIcon.style.fill = "red";
        posts[index].likes++;
      } else {
        heartIcon.style.stroke = "black";
        heartIcon.style.fill = "none";
        posts[index].likes--;
      }

      likesCount.textContent = posts[index].likes.toLocaleString() + " likes";
    });
  }
});
