export function API() {
  const fetchAll = (getData) => {
    fetch("https://covid-19-data.p.rapidapi.com/country/all?format=json", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "e41a8fafe3msha31f08bf4139fb9p1bb787jsn922eb1e78fff",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        getData(response);
      })
      .catch((err) => {
        getData("");
        console.log(err);
      });
  };

  const fetchTotal = (getTotalData) => {
    //API limits allow 1 fetch / second
    setTimeout(() => {
      fetch("https://covid-19-data.p.rapidapi.com/totals?format=json", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key":
            "e41a8fafe3msha31f08bf4139fb9p1bb787jsn922eb1e78fff",
        },
      })
        .then((response) => response.json())
        .then((response) => getTotalData(response))
        .catch((err) => {
          getTotalData("");
          console.log(err);
        });
    }, 2000);
  };

  return { fetchAll, fetchTotal };
}
