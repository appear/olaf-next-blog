export default `
  font-size: 16px;
  line-height: 1.63;
  color: #444;

  h1 {
    margin-bottom: 24px;
    font-size: 22px;
    font-weight: bold;
  }

  h2 {
    margin: 20px 0;
    font-size: 21px;
    font-weight: bold;
  }

  h3 {
    margin: 20px 0;
    font-size: 19px;
    font-weight: bold;
  }
  
  h4 {
    margin: 20px 0;
    font-size: 16px;
    font-weight: bold;
  }

  blockquote {
    padding: 20px 15px;
    font-size: 14px;
    color: rgba(58, 58, 58, 0.8);
    background: #fafafa;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  blockquote > p {
    padding: 0;
    margin: 0;
  }

  a {
    color: hotpink;
    font-weight: bold;
  }
  
  p {
    margin-bottom: 16px;
    line-height: 1.8;

    img {
      width: 100%;
      border-radius: 8px;
      margin: 20px 0;
    }
  }

  ul {
    margin: 20px 0;
  }
  
  ol { 
    list-style: decimal;
    padding-left: 20px;
  }

  ul li {
    position: relative;
    padding: 0 0 0 25px;
    margin-bottom: 10px;
  }

  ul li:before {
    content: "👉";
    position: absolute;
    left: 0;
    top: 0;
    font-weight: bold;
  }

  li { 
    margin-bottom: 10px; 
  }

  hr {
    margin: 50px 0;
    height: 1px;
    background-color: #efefef;
  }
  
  pre {
    margin: 40px 0 !important;
    border-radius: 4px;

    code {
      font-size: 14px !important;
    }
  }

  strong {
    font-weight: 700;
  }

  
`
