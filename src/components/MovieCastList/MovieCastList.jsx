import s from "./MovieCastList.module.css";

const MovieCastList = ({ cast }) => {
  return (
    <ul className={s.castList}>
      {cast.map(({ cast_id, profile_path, name, character }) => (
        <li key={cast_id} className={s.castItem}>
          {profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
              className={s.castImage}
            />
          )}
          <p className={s.castName}>{name}</p>
          <p className={s.castCharacter}>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCastList;
