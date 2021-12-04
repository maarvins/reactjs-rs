import {useState, useEffect} from "react"

import {RepositoryItem} from "./RepositoryItem"

import "../styles/repositories.scss"

type Repository = {
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch("https://api.github.com/users/maarvins/repos") //buscar os valores do OBJETO dentro da api
      .then((response) => response.json()) //quando eu obter os valores da api, vou transformar em um JSON
      .then((data) => setRepositories(data)) //depois da conversão para json, terei os dados do repositório e guardo eles no meu estado setRepositories
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem repository={repository} key={repository.name} />
          ) //passando um map dentro do array repositories pra retornar o qualquer valor do objeto
        })}
      </ul>
    </section>
  )
}
