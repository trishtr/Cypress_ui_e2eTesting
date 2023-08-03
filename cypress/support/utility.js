class Utility {
  getBaseUrl() {
    let envi = Cypress.env("ENV");
    if (envi == "qa") return "https://demowebshop.tricentis.com/";
    else if (envi == "staging")
      return "https://katalon-demo-cura.herokuapp.com/";
  }
}
export default Utility;
