//your JS code here. If required.
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const submitBtn = document.getElementById('submit');
const bookList = document.getElementById('book-list');

submitBtn.addEventListener('click', function(){
	const title = titleInput.value.trim();
	const author = authorInput.value.trim();
	const isbn = isbnInput.value.trim();

    // Validate input
  if (title === '' || author === '' || isbn === '') {
    alert('Please fill out all fields!');
    return;
  }

	const row = document.createElement('tr');
	row.innerHTML = `<td>${title}</td>
	<td>${author}</td>
	<td>${isbn}</td>
	<td><button class="delete">Clear</button></td>`

	//append the row
	bookList.appendChild(row);

	titleInput.value = "";
	authorInput.value="";
	isbnInput.value="";
})

bookList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
  }
});