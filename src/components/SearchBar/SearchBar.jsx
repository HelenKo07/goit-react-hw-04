import css from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";
import { toast } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (values, action) => {
    const searchImage = values.image.trim();
    if (!searchImage) {
      toast.error("Please enter a search term.");
      return;
    }
    onSearch(searchImage);
    action.resetForm();
  };

  return (
    <header className={css.headerFormik}>
      <Formik
        className={css.formik}
        initialValues={{ image: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="image"
            autoComplete="on"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}
