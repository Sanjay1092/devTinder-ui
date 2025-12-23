

const FeedCard = ({ props, isEditmode = false, status ='',onRequestAccepted,onRequestRejected  }) => {
  const { firstName, photoUrl, age, gender,bio,lastName} = props;

  
  return (
    <div className="card bg-base-100 w-96 shadow-sm m-auto my-8">
      <figure>
        <img src={photoUrl} alt="user" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName} {lastName}</h2>
        <p>
          {age}, {gender}
        </p>
        <p>
         {bio}
        </p>
       {status === "interested" ? <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={()=>onRequestRejected()}>rejected</button>
          <button className="btn btn-secondary" onClick={()=>onRequestAccepted()}>accepted</button> </div> : !isEditmode && <div className="card-actions justify-end">
          <button className="btn btn-primary">ignored</button>
          <button className="btn btn-secondary">interseted</button>
        </div>}
      </div>
    </div>
  );
};

export default FeedCard;
