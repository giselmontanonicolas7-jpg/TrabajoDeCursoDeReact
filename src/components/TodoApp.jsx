import { useState, useEffect } from 'react'
import styles from './TodoApp.module.css'

function TodoApp() {
  const [notas, setNotas] = useState([])

  // useEffect(callback, [dependencias])
  // Hook que nos permite ejecutar "efectos secundarios" en nuestro componente,
  // por ejemplo: pedir datos a una API cuando el componente se monta.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/notas')

        if (!response.ok) {
          throw new Error(`Error http: ${response.status}`)
        }

        const data = await response.json()
        setNotas(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <h1 className={styles.titulo}>Notas</h1>
      <ul className={styles.notaList}>
        {notas.map((nota) => (
          <li className={styles.notaItem} key={nota.id}>
            {nota.text} {nota.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoApp
