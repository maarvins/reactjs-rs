import {useState, useEffect} from "react"

import {RepositoryItem} from "./RepositoryItem"

import "../styles/repositories.scss"

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/"
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/maarvins/repos") //buscar os valores do OBJETO dentro da api
      .then((response) => response.json()) //quando eu obter os valores da api, vou transformar em um JSON
      .then((data) => console.log(data)) //depois da conversão para json, terei os dados do repositório
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}
