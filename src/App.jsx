import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const username = searchParams.get("username");

  useEffect(() => {
    // Тут виконуємо асинхронну операцію,
    // наприклад HTTP-запит за інформацією про користувача
    if (username === "") return;

    FakeAPI.getUser(username).then(setUser);
  }, [username]);

  const updateSearchParams = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set(key, value);
    setSearchParams(updatedParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    updateSearchParams("username", form.elements.username.value);
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">Search</button>
      </form>
      {user && <UserInfo user={user} />}
    </>
  );
};
