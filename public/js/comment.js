const commentFormHandler = async function(event) {
  event.preventDefault();

      const blog_id = document.querySelector('.comment-form').dataset.blogid;
  const comment_description = document.querySelector('#comment_description').value.trim();

  if (comment_description) {
    console.log("testing post for comments")
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        blog_id,
        comment_description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("post for comments compleat")
    document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);





// const commentFormHandler = async (event) => {
//     event.preventDefault();
//     const body = document.querySelector('#comment_description').value.trim();
//     const blog_id = document.querySelector('.comment-form').dataset.blogid;
//     if (body) {
//       const response = await fetch('/api/comments', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({body}),
        
//       });
//       if (response.ok) {
//         document.location.replace('/dashboard');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };
//   document
//   .querySelector('.comment-form')
//   .addEventListener('submit', commentFormHandler);

