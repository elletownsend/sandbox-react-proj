import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
      font-size: 100%;
  }

  body {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1.625rem;  
    line-height: 40px;
    
    margin: 0;

    color: #222222;
  }

  h3 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1.125rem;  
    line-height: 24px;
    
    margin: 0;

    color: #222222;
  }

  h4 {
    font-family: 'Avenir';
    font-weight: 400;
    font-size: 1rem;  
    line-height: 16px;

    margin: 8px 0;

    color: rgba(34,34,34,0.5);
  }

  p {
    font-family: 'Avenir';
    font-weight: 400;
    font-size: 1rem;  
    line-height: 24px;

    margin: 0;
    
    color: #222222;
  }

  a {
      text-decoration: none;
  }

  .tag {
      box-sizing: border-box;

      height: 32px;
      padding: 8px 16px;

      :not(:last-child) {
        margin-right: 8px;
      }

      margin-bottom: 8px;

	line-height: 16px;
	background-color: #E6E6E6;
    border-radius: 5px;
        
    font-family: 'Avenir';
    font-weight: 400;
    font-size: 0.7500em;

    display: inline-block;
    
    color: rgba(34,34,34,0.5);
  }
`

export default GlobalStyle;