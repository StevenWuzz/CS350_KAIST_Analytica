const fs = require('fs')
const googleTrends = require('google-trends-api')

googleTrends.interestByRegion({
	keyword: ["Liberal", "Labor", "ALB", "NLP"],
	startTime: new Date("2015-01-01"),
	endTime: new Date("2018-01-01"),
	geo: "AU-VIC",
}).then((data) => {
	fs.writeFile("./interestByRegion.json", data, (err) => {
		if (err) {
			console.error(err)
		} else {
			console.log("File saved")
		}
	})
}).catch((err) => {
	console.error(err)
})

googleTrends.interestOverTime({
	keyword: ["Liberal", "Labor", "ALB", "NLP"],
	startTime: new Date("2015-01-01"),
	endTime: new Date("2018-01-01"),
	geo: "AU-VIC",
}).then((data) => {
	fs.writeFile("./interestOverTime.json", data, (err) => {
		if (err) {
			console.error(err)
		} else {
			console.log("File saved")
		}
	})
}).catch((err) => {
	console.error(err)
})

googleTrends.relatedQueries({
	keyword: "Liberal",
	startTime: new Date("2015-01-01"),
	endTime: new Date("2018-01-01"),
	geo: "AU-VIC",
}).then((data) => {
	fs.writeFile("./relatedQueries.json", data, (err) => {
		if (err) {
			console.error(err)
		} else {
			console.log("File saved")
		}
	})
}).catch((err) => {
	console.error(err)
})

googleTrends.relatedQueries({
	keyword: "Labor",
	startTime: new Date("2015-01-01"),
	endTime: new Date("2018-01-01"),
	geo: "AU-VIC",
}).then((data) => {
	fs.appendFile("./relatedQueries.json", data, (err) => {
		if (err) {
			console.error(err)
		} else {
			console.log("File saved")
		}
	})
}).catch((err) => {
	console.error(err)
})