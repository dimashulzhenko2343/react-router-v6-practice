import s from "./BrickHouse.module.css";

const BrickHouse = () => {
  return (
    <div className={s.boxImg}>
      <img
        className={s.image}
        src="https://trizio.ru/img-srv01/102018/img_post/post_973_36930.jpg"
        alt=""
      />
    </div>
  );
};

export default BrickHouse;
