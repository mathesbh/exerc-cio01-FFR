
import { Component } from 'react';
import './App.css';
import { ImageArticle } from './components/ImageArticle';
import { MainMenu } from './components/MainMenu';
import { NavMenu } from './components/NavMenu';
import { SearchBar } from './components/SearchBar';

export class App extends Component {
  state = {
    menuItems: [
      { title: 'Google', link: 'https://google.com' },
      { title: 'Apple', link: 'https://apple.com/br' },
      { title: 'Microsoft', link: 'https://microsoft.com' },
      { title: 'Puc Minas', link: 'https://pucminas.br' },
    ],
    images:[
      { src: 'https://miro.medium.com/max/3840/1*vHHBwcUFUaHWXntSnqKdCA.png', alt: 'Logo React'},
      { src: 'https://www.itexto.com.br/devkico/wp-content/uploads/2016/04/angular-js_600x400.png', alt: 'Logo Angular'},
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png', alt: 'Logo Vue'},
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
            <ImageArticle images={this.state.images} />
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


