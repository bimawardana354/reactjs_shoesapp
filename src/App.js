import logo from './logo.svg';
import './App.css';
import ReviewItems from './Reviews';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" name="Color Pop Chuck" category="CONVERSE" />
      <ReviewItems />
    </div>
  );
}

function FotoProduk() {
  return (
      <div className="Foto">
        <img src="converse.jpg"/>
      </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount, discount } = props;
  if (isDiscount == "yes") {
    return (
      <p>Diskon {discount}% Off</p>
    );
  }
  else if (isDiscount == "coming") {
    return (
      <p>Akan Ada Diskon ...</p>
    );
  }
  else {
    return (
      <p>Belum Ada Diskon</p>
    );
  }
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = ["Waterproof Protector", "Color not fade easily", "material not wrinkle easily"];
  const listBenefits = benefits.map((itemBenefit) => 
   <li key={itemBenefit}>{itemBenefit}</li>
  );
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 4.743.999</p>
        <CheckDiscount isDiscount={isDiscount} discount={50}/>
        <p className="Info">
        Color-popped canvas and rubber overlays bring a new twist to colorblocking on the premium Chuck 70. Soft colors and materials celebrate the game-changing icon, features lightweight, visible cushioning just like the original. One of the most recognizable shoes in the shoes Converse.
        </p>
        <ul>
          {listBenefits}
        </ul>
        <a onClick={(e) => TambahCart(category + " " + name, e )} href="#">Add To Cart</a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  return console.log("Yeay Berhasil Membeli Produk " + e );
}

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
};

export default App;
