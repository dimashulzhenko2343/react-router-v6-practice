import s from "./Palace.module.css";

const Palace = () => {
  return (
    <div className={s.boxImg}>
      <img
        className={s.image}
        src="https://elaginpark.org/upload/iblock/633/633dedec0276924e5e1f6cc6b29205b8.jpg"
        alt=""
      />
    </div>
  );
};

export default Palace;