import css from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  const handleSubmit = (evt) => {
evt.preventDefault();
const form = evt.target;
const image = form.elements.image.value;
if(form.elements.image.value.trim() === "") {
alert("Please enter search term!");
return;
}
onSearch(image);
form.reset();
  };

    return (
        <header>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="image"
      autoComplete="on"
      autoFocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
</header>

    );
}