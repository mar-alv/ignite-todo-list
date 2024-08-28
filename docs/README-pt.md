<h1 align='center'> Ignite ToDo List </h1>

<div align='center'>

  ![project-img](../.github/cover.jpg)
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

  [🎨 Design](https://www.figma.com/file/HV7C6SQl1SyA1mN8Xur2bv/ToDo-List-%E2%80%A2-Desafio-React-(Copy)?type=design&node-id=56-96&mode=design&t=MDvKh9d18LPYlRNA-0)

  [⬅️ Voltar](../README.md)

</div>

## 📚 Sumário
- [❕ Sobre](#about)
- [📖 Instruções](#instructions)
  - [📥 Instalar](#install)
  - [🚀 Rodar Localmente](#locally)
  - [📋 Rodar Testes Unitários](#unit-tests)
  - [📔 Rodar Storybook](#storybook)
- [📂 Estrutura](#structure)
- [🧰 Tecnologias](#technologies)
- [📸 Prints e 🎥 Gravações](#screenshots-prints)
- [👤 Autor](#author)
- [📄 Licença](#license)

### <a id='about' style='text-decoration: none; color: inherit;'>❕ Sobre</a>
Esta é a minha implementação do desafio "ToDo List" do primeiro módulo de ReactJS do [Ignite](https://www.rocketseat.com.br/ignite), um curso intermediário e avançado de diversas linguagens de programação e tecnologias oferecido pela [Rocketseat](https://www.rocketseat.com.br/).

Nela, foram implementadas as seguintes funcionalidades, que serão demonstradas em fotos e vídeos mais adiante:
- **Criação de tarefas:** Descreva no campo de texto e pressione Enter ou clique no botão ao lado para criar a tarefa com a descrição especificada.
- **Deleção de tarefas:** Clique no ícone de lixeira da tarefa para deletá-la.
- **Completar tarefas:** Marque a caixa ao lado do texto ou clique nela para marcar a tarefa como concluída.

### <a id='instructions' style='text-decoration: none; color: inherit;'>📖 Instruções</a>
#### <a id='install' style='text-decoration: none; color: inherit;'>📥 Instalar</a>
Cole o 1º comando em um terminal aberto dentro de uma pasta de sua preferência para clonar o projeto
```sh
git clone https://github.com/mar-alv/ignite-todo-list.git
```

Em seguida rode uma das versões do 2º comando para instalar as dependências
```sh
npm i
```
```sh
npm install
```

#### <a id='locally' style='text-decoration: none; color: inherit;'>🚀 Rodar Localmente</a>
Cole o comando em um terminal, a aplicação estará acessível através desse [link](http://localhost:5173)
```sh
npm run dev
```

#### <a id='unit-tests' style='text-decoration: none; color: inherit;'>📋 Rodar Testes Unitários</a>
Cole o comando em um terminal, eles serão executados um atrás do outro apontando se houve testes falhos
```sh
npm run tests
```

#### <a id='storybook' style='text-decoration: none; color: inherit;'>📔 Rodar Storybook</a>
Cole o comando num terminal, a documentação dos componentes do projeto estará acessível através desse [link](http://localhost:6006)
```sh
npm run storybook
```

### <a id='structure' style='text-decoration: none; color: inherit;'>📂 Structure</a>
```
│ .storybook/
│   └── ...
│ .tests/
│   └── ...
│ docs/
│   └── ...
│ src/
│   ├── assets/
│   │     └── ...
│   ├── components/
│   │     ├── componente x/
│   │     │     └── ...
│   │     └── ...
│   ├── contexts/
│   │     └── ...
│   ├── styles/
│   │     └── ...
│   ├── interfaces/
│   │     └── ...
│   └── ...
│ stories/
│   ├── components/
│   │     └── ...
│   └── ...
│ tests/
│   └── ...
```

### <a id='technologies' style='text-decoration: none; color: inherit;'>🧰 Tecnologias</a>
#### Build
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

#### Documentação
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)

#### Framework Front-end
[![React.js](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

#### Estilização
[![Phosphor Icons](https://img.shields.io/badge/Phosphor%20Icons-c4e456?style=for-the-badge&logo=phosphoricons&logoColor=black)](https://phosphoricons.com/)
[![Styled-Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)

#### Testes
[![React Testing Library](https://img.shields.io/badge/React%20Testing%20Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)

### <a id='screenshots-prints' style='text-decoration: none; color: inherit;'>📸 Prints e 🎥 Gravações</a>
Para uma demonstração mais longa clique aqui e curta meu post no <a href='https://www.linkedin.com/feed/update/urn:li:activity:7016166450579058688'>LinkedIn</a>

<div align='center'>

  ![empty-list](../.github/empty-list.png)
  Lista vazia

</div>

<div align='center'>

  ![filled-list](../.github/filled-list.png)
  Lista com tarefas

</div>

<div align='center'>

  ![creating-task](../.github/creating-task.gif)
  Criando tarefa

</div>

<div align='center'>

  ![removing-task](../.github/removing-task.gif)
  Removendo tarefa

</div>

<div align='center'>

  ![toggle-task](../.github/toggle-task.gif)
  Trocando estado da tarefa

</div>

<div align='center'>

  ![generic-stories](../.github/generic-stories.gif)
  Stories Genéricos

</div>

<div align='center'>

  ![components-stories](../.github/components-stories.gif)
  Stories dos componentes

</div>

### <a id='author' style='text-decoration: none; color: inherit;'>👤 Autor</a>
<div style='display: flex; align-items: center;'>
		<img src='https://github.com/mar-alv.png' alt='Marcelo Alvarez GitHub profile picture' style='width: 150px; border-radius: 50%; margin-right: 20px;'>
		<div>
				<strong>Marcelo Alvarez</strong>
				<br>
				<em>Front-end Developer</em><br>
				<span>"Uma citação engraçada gerada por IA aqui 😗"</span><br>
				<a href='https://www.linkedin.com/in/mar-alv'>
					<img
						alt='LinkedIn'
						src='https://img.shields.io/badge/LinkedIn-Marcelo%20Alvarez-0077B5?logo=linkedin&logoColor=white'
					/>
				</a>
				<a href='https://mar-alv.github.io/'>
					<img
						alt='Portfolio'
						src='https://img.shields.io/badge/Portfolio-Marcelo%20Alvarez-000?style=flat&logo=portfolio&logoColor=white'
					/>
				</a>
		</div>
</div>

### <a id='license' style='text-decoration: none; color: inherit;'>📄 Licença</a>
Licenciado via [MIT](../LICENSE)
