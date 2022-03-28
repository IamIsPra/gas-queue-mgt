if('serviceWorker' in navigator){
	navigator.serviceWorker.register('/sw.js')
		.then(() => console.log("Service worker registered!"))
		.catch(() => console.log("Service worker not registered!"))
}else{
console.log("Browser not supported!")
}