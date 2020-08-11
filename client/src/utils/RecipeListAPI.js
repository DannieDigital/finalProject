import axios from "axios";

const BASEURL = "https://api.spoonacular.com/recipes/search?query=";
const APIKEY = "&apiKey=b42c4702dace43f3a8eab57371424152";


export default {
  search: function(query) {
    delete axios.defaults.headers.common["x-auth-token"];
    return axios.get(BASEURL + query + APIKEY);
  }
};