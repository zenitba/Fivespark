server.get("/", async (req, res) => {



  const serviceContracts = await dataFetch("https://api.fivespark.com/items/service_contracts")
  const selectedContracts = serviceContracts.data.filter(contract => contract.id === 3 || contract.id === 4 || contract.id === 7)


  const activitiesServicesContracts = await dataFetch("https://api.fivespark.com/items/activities_service_contracts")

  const contract_basic = activitiesServicesContracts.data.filter(contract => contract.service_contracts_id === 3)
  const contract_complete = activitiesServicesContracts.data.filter(contract => contract.service_contracts_id === 4)
  const contract_premium = activitiesServicesContracts.data.filter(contract => contract.service_contracts_id === 7)


  const activityTranslations = await dataFetch("https://api.fivespark.com/items/activities_translations")

  console.log(activityTranslations)
  

  res.render("index", { selectedContracts, contract_basic, contract_premium, contract_complete, activityTranslations,})
})


/* ---------------------------- Api call function --------------------------- */


const apiInformation = {
	method: "GET",
	headers: {
		Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
	}
}

async function dataFetch(url) {
	const data = await fetch(url, apiInformation)
		.then((response) => response.json())
		.catch((error) => error);
	return data;
}