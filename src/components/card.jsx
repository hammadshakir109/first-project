import "./card.css" 

export default function Card(prop) {
  return (
    <>
    <div className="main">
      <div className="second">
        <img src={prop.img} alt="" />
        <p>Tum by Murtaza Qilbish</p>
        <p>Views : 258k</p>
      </div>
      </div>
    </>
  );
}
