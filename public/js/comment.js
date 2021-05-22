const commentFormHandler = async (event) => {
    event.preventDefault();
    const comment_description = document.querySelector('#comment_description').value.trim();
    const blog_id = document.querySelector('.comment-form').dataset.blogid;
    if (comment_description && blog_id) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment_description, blog_id }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);




// async function commentFormHandler(event) {
//     event.preventDefault();

//     const comment_text = document.querySelector('input[name="comment-body"]').value.trim();

//     const user_id = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ];

//     if (comment_text) {
//         const response = await fetch('/api/comments', {
//             method: 'POST',
//             body: JSON.stringify({
//                 user_id,
//                 comment_text
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (response.ok) {
//             document.location.reload();

//         } else {
//             alert(response.statusText);
//             document.querySelector('#comment-form').style.display = "block";
//         }
//     }
// }

// document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);