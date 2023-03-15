import s from "./WoodenHouse.module.css";

const WoodenHouse = () => {
  return (
    <div className={s.boxImg}>
      <img
        className={s.image}
        src="https://landberry.ru/upload/iblock/c07/woodeh_house.jpg"
        alt=""
      />
    </div>
  );
};

export default WoodenHouse;
