import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";

const initialValues = {
  name: "",
};

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values.name);
    actions.resetForm();
  };

  return (
    <div className={s.formBox}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            name="name"
            className={s.formInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button className={s.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
