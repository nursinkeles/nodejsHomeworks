const posts = [
  { title: "blog-title 1", blogContent: "blog-content 1" },
  { title: "blog-title 2", blogContent: "blog-content 2" },
  { title: "blog-title 3", blogContent: "blog-content 3" },
];

const listPosts = () => {
  posts.map((post) => {
    console.log(post.title);
  });
};

const addPost = (newpost) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newpost);
    resolve(posts);
  });

  return promise1;
};

async function showPosts() {
  try {
    await addPost({ title: "blog-title 4", blogContent: "blog-content 4" });
    listPosts();
  } catch (error) {
    console.log(error);
  }
}

showPosts();
