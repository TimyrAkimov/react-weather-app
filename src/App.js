import "./index.css"

function App() {
  return (
    <div className="App">
      <header>
        <div className="app-header">
        <div className="w-full justify-between my-auto flex h-[60px]">
        <img className="w-12 h-12 float-left ml-24 my-auto" src="/images/logo.svg" alt="logo" />
        <a className="text-xl my-auto float-left mr-[57rem] text-grey hover:text-dark-green">WeatherApp</a>
        <div className="float-right mr-24 space-x-6 text-grey my-auto underline">
          <a className="text-dark-green" href="main.html">Main</a>
          <a className="hover:text-dark-green" href="about.html">About</a>
          <a className="hover:text-dark-green" href="feedback.html">Get in touch</a>
        </div>
        </div>
        </div>
      </header>

      <body>
        <div className="content">

        </div>
      </body>

      <footer>
        <div className="footer">
          <p className="ml-24 pt-5 text-base text-grey">&copy; 2022 WeatherApp. All Rigths Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
