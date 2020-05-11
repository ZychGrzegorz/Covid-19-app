export function CountryColors() {
  const sortConfirmed = (country, el) => {
    // console.log(el);
    if (country.attributes.title.value === el.country) {
      if (el.cases.total === 0) {
        country.setAttribute("style", "fill: 	#F7EEE1");
      } else if (el.cases.total > 0 && el.cases.total < 100) {
        country.setAttribute("style", "fill: #FDD49E");
      } else if (el.cases.total >= 100 && el.cases.total < 1000) {
        country.setAttribute("style", "fill: #FDBB84");
      } else if (el.cases.total >= 1000 && el.cases.total < 5000) {
        country.setAttribute("style", "fill: #FC8D59");
      } else if (el.cases.total >= 5000 && el.cases.total < 20000) {
        country.setAttribute("style", "fill: #EF6548");
      } else if (el.cases.total >= 20000 && el.cases.total < 50000) {
        country.setAttribute("style", "fill:	#D7301F");
      } else if (el.cases.total >= 50000 && el.cases.total < 150000) {
        country.setAttribute("style", "fill: #B30000");
      } else if (el.cases.total >= 150000) {
        country.setAttribute("style", "fill: #7F0000");
      }
    }
  };

  const sortDeaths = (country, el) => {
    // console.log("color new");

    if (country.attributes.title.value === el.country) {
      // console.log(el);
      if (el.deaths.total === 0) {
        country.setAttribute("style", "fill: 	#F7EEE1");
      } else if (el.deaths.total > 0 && el.deaths.total < 10) {
        country.setAttribute("style", "fill: #FDD49E");
      } else if (el.deaths.total >= 10 && el.deaths.total < 100) {
        country.setAttribute("style", "fill: #FDBB84");
      } else if (el.deaths.total >= 100 && el.deaths.total < 500) {
        country.setAttribute("style", "fill: #FC8D59");
      } else if (el.deaths.total >= 500 && el.deaths.total < 1000) {
        country.setAttribute("style", "fill: #EF6548");
      } else if (el.deaths.total >= 1000 && el.deaths.total < 5000) {
        country.setAttribute("style", "fill:	#D7301F");
      } else if (el.deaths.total >= 5000 && el.deaths.total < 20000) {
        country.setAttribute("style", "fill: #B30000");
      } else if (el.deaths.total >= 20000) {
        country.setAttribute("style", "fill: #7F0000");
      }
    }
  };

  return { sortConfirmed, sortDeaths };
}
