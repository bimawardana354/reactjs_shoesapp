import './App.css';

function Reviews() {
    // mempersiapkan data dummy JSON
    const users = [
      {
        "id": 1,
        "image": "person.jpeg",
        "name": "Madison Sthepani",
        "review": "Not bad shit, is a impressive, I like it, good quality."
      },
      {
        "id": 2,
        "image": "https://images.pexels.com/photos/5691309/pexels-photo-5691309.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Jett Reyna",
        "review": "I really love Converse shoes, these are very unique and cute shoes."
      },
      {
        "id": 3,
        "image": "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Sage Viper",
        "review": "without further ado these shoes are cool and durable."
      }
    ];
    const listReview = users.map((itemReview) => 
      <div key={itemReview.id} className="Item">
        <img src={itemReview.image}/>
      <div className="User">
          <h3>{itemReview.name}</h3>
          <p>{itemReview.review}</p>
        </div>
      </div>
    );
    return (
      <div className="Review-box">
        <h2>Reviews</h2>
        {listReview}
      </div>
    );
  }

  export default Reviews;