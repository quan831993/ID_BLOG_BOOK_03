import "../css/subscrible.css"
function Subscrible() {
  return (
    <div className="subscribe">
      <div className="subsTitle">
        <p className="subTit">Subscribe our newsletter for newest books updates</p>
      </div>
      <div className="searchSubs">
        <input type="text" placeholder="Type your mail here" />
        <button>Subs</button>
      </div>
    </div>
  )
}
export default Subscrible;