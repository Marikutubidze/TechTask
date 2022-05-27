const postsList = document.getElementById("postsList");

const getPosts = async () => {
  fetch(
    "https://api.npoint.io/44c1c313d40c0811ad19?fbclid=IwAR2Oy-mPhIpbwpJ033cgSrnjoj_q5skAUortaS0iuQugghsTcywZG_wqYF8"
  )
    .then((response) => response.json())
    .then((data) => drawPosts(data));
};

getPosts();

const drawPost = (post) => {
  const postTemplate = `
    <div class="card">
        ${post.description}
    </div>
  `;
  postsList.innerHTML += postTemplate;
};

const drawPosts = (posts) => {
  posts.forEach((post) => {
    drawPost(post);
  });
};
