import axios from "axios";

export default axios.create({
  baseURL: `${"https://cors-anywhere.herokuapp.com/"}http://services.runescape.com/m=itemdb_rs/api/`
});
