export function CountryColors() {
  const sortConfirmed = (country, el) => {
    if (country.attributes.title.value === el.country) {
      if (el.confirmed === 0) {
        country.setAttribute("style", "fill: 	#F7EEE1");
      } else if (el.confirmed > 0 && el.confirmed < 100) {
        country.setAttribute("style", "fill: #FDD49E");
      } else if (el.confirmed >= 100 && el.confirmed < 1000) {
        country.setAttribute("style", "fill: #FDBB84");
      } else if (el.confirmed >= 1000 && el.confirmed < 5000) {
        country.setAttribute("style", "fill: #FC8D59");
      } else if (el.confirmed >= 5000 && el.confirmed < 20000) {
        country.setAttribute("style", "fill: #EF6548");
      } else if (el.confirmed >= 20000 && el.confirmed < 50000) {
        country.setAttribute("style", "fill:	#D7301F");
      } else if (el.confirmed >= 50000 && el.confirmed < 150000) {
        country.setAttribute("style", "fill: #B30000");
      } else if (el.confirmed >= 150000) {
        country.setAttribute("style", "fill: #7F0000");
      }
    }
  };

  const sortDeaths = (country, el) => {
    if (country.attributes.title.value === el.country) {
      if (el.deaths === 0) {
        country.setAttribute("style", "fill: 	#F7EEE1");
      } else if (el.deaths > 0 && el.deaths < 10) {
        country.setAttribute("style", "fill: #FDD49E");
      } else if (el.deaths >= 10 && el.deaths < 100) {
        country.setAttribute("style", "fill: #FDBB84");
      } else if (el.deaths >= 100 && el.deaths < 500) {
        country.setAttribute("style", "fill: #FC8D59");
      } else if (el.deaths >= 500 && el.deaths < 1000) {
        country.setAttribute("style", "fill: #EF6548");
      } else if (el.deaths >= 1000 && el.deaths < 5000) {
        country.setAttribute("style", "fill:	#D7301F");
      } else if (el.deaths >= 5000 && el.deaths < 20000) {
        country.setAttribute("style", "fill: #B30000");
      } else if (el.deaths >= 20000) {
        country.setAttribute("style", "fill: #7F0000");
      }
    }
  };

  return { sortConfirmed, sortDeaths };
}
