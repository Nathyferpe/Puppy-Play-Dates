import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {

    --color-dogwood-rose: #DD216B;
    --color-purple: #8c7ae6;
    --color-blueberry-soda: #7f8fa6;
    --color-selective-yellow: #FDBB01;
    --color-desert-sand: #E3C4A6;
    --font-heading: 'Permanent Marker', Arial, Helvetica, sans-serif;
    --font-body: 'Kosugi', Arial, Helvetica, 'Roboto', sans-serif;
    --padding-page: 24px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    

  /* http://meyerweb.com/eric/tools/css/reset/
      v2.0 | 20110126
      License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-size: 100%;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  /* article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  } */
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  

  h1 {
  color: #9c88ff;
  font-family: var(--font-heading);
  font-size: 48px;
  text-align: center;
}


.btn:link,
.btn:visited {
    display: inline-block;
    padding: 10px 30px;
    font-weight: 300;
    text-decoration: none;
    color: #fff;
    border-radius: 150px;
    transition: background-color 0.2s, border 0.2s, color 0.2s;
    margin-right: 15px;
}

.btn-full:link,
.btn-full:visited {
    background: #e67e22;
    border: solid 1px #e67e22;
    color: #fff;
}
.btn-ghost:link,
.btn-ghost:visited {
    border: solid 1px #e67e22;
    color: #e67e22;   
}

.btn:hover,
.btn:active {
background: #d35400 }

.btn-full:hover,
.btn-full:active {
    background: #d35400;
}

.btn-ghost:hover,
.btn-ghost:active {
    border: solid 1px #e67e22;
    color: #fff;
}

button {
    background: var(--color-dogwood-rose);
    border: none;
    color: #ffffff;
    font-size: 32px;
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    display: inline-flex;
    font-size: 1rem;
    font-weight: 700;
    justify-content: center;
    /* line-height: 1.5; */
    padding: 0.9rem;
    text-decoration: none;
    align-items: center;
    border-radius: 8px;
    text-decoration: none;
    width: 100%;
}

h2 {
  color: #2f3640;
 margin-bottom: 10px;
 font-size: 32px;
 justify-content: center;

}
h3,
label {
 color: #2f3640;
 margin-bottom: 25px;
}
p,
a,
li,
blockquote,
input {
  font-family: var(--font-body);
  text-decoration: none;
}

  input {
    margin-top: 5px;
    margin-bottom:5x;
    font-size: 15px;
    height: 42px;
    border: 2px solid var(--color-blueberry-soda);
    border-radius: 4px;
    padding: 0 12px;
  }
`;
