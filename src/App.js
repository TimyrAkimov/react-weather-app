import "./index.css"
import "./script.js"

function App() {
  return (
    <div className="App">
      <header>
        <div className="app-header">
        <div className="w-full justify-between my-auto flex h-[60px]">
        <img className="w-12 h-12 float-left ml-24 my-auto" src="/images/logo.svg" alt="logo" />
        <a className="text-xl my-auto float-left mr-[57rem] text-grey hover:text-dark-green">WeatherApp</a>
        <div className="mr-24 float-right space-x-6 text-grey my-auto underline">
          <a className="text-dark-green" href="main.html">Main</a>
          <a className="hover:text-dark-green" href="about.html">About</a>
          <a className="hover:text-dark-green" href="new.html">What's New</a>
        </div>
        </div>
        </div>
      </header>

      <body>
        <div className="content">
          <div id="menu" className="fixed z-99 left-0 top-[220px] h-[60vh] w-[25%] align-center justify-between bg-dark-black duration-500 -translate-x-full">
          <a href="#" id="menu-btn"><img className="w-[30px] h-[30px] absolute top-[75px] -right-[125px]" src="/images/menu.png"></img></a>
          <h3 className="mt-4 ml-4 font-semibold text-[28px] text-grey">Show weather in:</h3>
          <form id="form" action="" className="justify-around align-center mt-4 ml-4">
            <input className="h-[30px] w-[250px] rounded-[10px] border-2 border-grey p-3 text-grey bg-transparent" name="city" type="text" placeholder="Enter a city"></input>
            <button className="h-[30px] w-[75px] rounded-[10px] bg-black text-white ml-4 bg-transparent text-grey border-2 border-grey" type="submit">Submit</button>
          </form>
          </div>
          <div className="widget">
            <div id="weather" className="bg-grey rounded-[10px] p-[20px] m-auto relative top-[200px] max-w-[450px] shadow-md shadow-grey">
            </div>
          </div>
          <script src="./script.js"></script>
        </div>
      </body>

      <footer>
        <div className="footer">
          <p className="ml-24 pt-5 text-base text-grey">&copy; 2023 WeatherApp. All Rigths Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
