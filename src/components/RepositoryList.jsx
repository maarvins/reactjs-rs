import {RepositoryItem} from "./RepositoryItem"

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/"
}

export function RepositoryList() {
  return (
    <section>
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}
