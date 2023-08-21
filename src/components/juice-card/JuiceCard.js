import "./JuiceCard.css";

const JuiceCard = ({ juice }) => {
  return (
    <div className="juice-card my-2 col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <div className="card-header">
          <span className="badge bg-danger">-{juice.discount}%</span>
          <h3 className="text-center">{juice.name}</h3>
        </div>
        <div className="card-body">
          <img className="img-fluid" src={juice.imgURL} alt={juice.name} />
        </div>
        <div className="card-footer text-center">
          <h4 className="mb-2">Price ${juice.price}</h4>
          <p className="juice-text">{juice.desc}</p>
          <button className="btn btn-outline-dark btn-sm my-2 w-75">
            View product
          </button>
        </div>
      </div>
    </div>
  );
};

export default JuiceCard;
