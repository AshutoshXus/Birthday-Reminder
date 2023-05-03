const Person = ({ image, name, age }) => {
  return (
    <article className="person">
      <img className="img" src={image} />
      <div>
        <h4> {name}</h4>
        <p> {age} years</p>
      </div>
    </article>
  )
}
export default Person
