export default ({ children }) => (
  <div id='map'>
    <h1>Map</h1>
    {/* Map code here... */}
    { children }
    <style jsx>{`
      .main {
        font: 15px Helvetica, Arial;
        border: 1px solid #eee;
        padding: 0 10px;
      }
      h1 {
        font-size: 16px;
        font-weight: bold;
        margin: 10px 0;
      }
    `}</style>
  </div>
)