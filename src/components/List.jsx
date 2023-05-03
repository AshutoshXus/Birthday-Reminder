import Person from './Person'

const List = ({ persons }) => {
  return (
    <section>
      <ul>
        {persons.map((person) => {
          return <Person key={person.id} {...person} />
        })}
      </ul>
    </section>
  )
}
export default List
