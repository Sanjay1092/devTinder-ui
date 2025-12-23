const ConnectionCard = ({props}) => {
    const {photoUrl,firstName,lastName,age,gender,bio}= props
  return (
<div className="card card-side bg-base-100 shadow-sm mt-4">
  <figure>
    <img
      src={photoUrl}
      alt="user" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName} {lastName}</h2>
    <p>{age} {gender}</p>
    <p>{bio}</p>
  </div>
</div>
  )
}

export default ConnectionCard