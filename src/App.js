
import { Component } from 'react';
import './App.css';
import { MainArticle } from './components/MainArticle';
import { MainMenu } from './components/MainMenu';
import { NavMenu } from './components/NavMenu';
import { SearchBar } from './components/SearchBar';

export class App extends Component {
  state = {
    menuItems: [
      { title: 'React', link: 'https://reactjs.org/' },
      { title: 'Angular', link: 'https://angular.io/' },
      { title: 'Vue', link: 'https://vuejs.org/' },
      { title: 'Puc Minas', link: 'https://pucminas.br' },
    ],
    contents:[
      { src: 'https://miro.medium.com/max/3840/1*vHHBwcUFUaHWXntSnqKdCA.png', alt: 'Logo React', title: 'React (web framework', content: 'React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies'},
      { src: 'https://www.itexto.com.br/devkico/wp-content/uploads/2016/04/angular-js_600x400.png', alt: 'Logo Angular', title: 'Angular (web framework', content: 'Angular (commonly referred to as "Angular 2+" or "Angular v2 and above") is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.'},
      { src: 'https://vuejs.org/images/logo.png', alt: 'Logo Vue', title: 'Vue (web framework', content: 'Vue.js (commonly referred to as Vue; pronounced /vjuː/, like "view") is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.'},
    ],
  }
  render(){
    return (
      <>
        <header className="main-header">
          <div className="main-logo">
            <h1>Logo</h1>
          </div>

          <div className="header-info">
            <MainMenu />
            <SearchBar />
          </div>
        </header>

        <NavMenu items={this.state.menuItems} />

        <section className="container main-section">
          
          <article className="item">
            <MainArticle contents={this.state.contents} />
          </article> 

          <aside className="main-aside item">
            <ul>
              <li><a href="#section">Section1</a></li>
              <li><a href="#section">Section2</a></li>
              <li><a href="#section">Section3</a></li>
              <li><a href="#section">Section4</a></li>
              <li><a href="#section">Section5</a></li>
              <li><a href="#section">Section6</a></li>
              <li><a href="#section">Section7</a></li>
              <li><a href="#section">Section8</a></li>
              <li><a href="#section">Section9</a></li>
              <li><a href="#section">Section10</a></li>
              <li><a href="#section">Section11</a></li>
              <li><a href="#section">Section12</a></li>
              <li><a href="#section">Section13</a></li>
              <li><a href="#section">Section14</a></li>
              <li><a href="#section">Section15</a></li>
            </ul>
          </aside>

        </section>
      </>
    )
  }
}


