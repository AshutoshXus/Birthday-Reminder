import { useState } from 'react'
import data from '../data'
import List from './List'

function BirthdayList() {
  const [persons, updatePerson] = useState(data)

  return (
    <main>
      <section className="container">
        <h3> {persons.length} Birthdays Today</h3>

        <List persons={persons} />

        <button
          type="button"
          className="btn btn-block"
          onClick={() => updatePerson([])}
        >
          Clear All
        </button>
      </section>
    </main>
  )
}
export default BirthdayList
