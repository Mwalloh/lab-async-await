// Write your code here!

// async function getUser() {
// 	try {
// 		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
// 		const posts = await response.json();
// 		displayPosts(posts);
// 	} catch (error) {
// 		console.log(`Error: ${error}`);
// 	}
// }
// getUser();

fetch("https://jsonplaceholder.typicode.com/posts")
	.then((response) => response.json())
	.then((posts) => {
		displayPosts(posts);
	})
	.catch((error) => {
		console.log(error);
	});

function displayPosts(posts) {
	posts.forEach((post) => {
		// Create elements
		const li = document.createElement("li");
		const h1 = document.createElement("h1");
		const p = document.createElement("p");

		// Add content to the created elements
		h1.textContent = post.title;
		p.textContent = post.body;

		// Append 'h1' and 'p' to 'li'
		li.appendChild(h1);
		li.appendChild(p);

		// Append 'li' to 'ul'
		const ul = document.getElementById("post-list");
		ul.appendChild(li);
	});
}
