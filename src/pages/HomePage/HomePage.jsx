import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h1> Welcome to Contacts App!</h1>
      <p> Here, you can manage all your contacts.</p>
    </div>
  );
};

export default HomePage;
