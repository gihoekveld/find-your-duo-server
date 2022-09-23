import {Router} from "./router"

addEventListener("fetch", event => {
	event.respondWith(
		Router(event.request).catch(() => {
			return new Response("Invalid Request!", {status: 400});
		})
	)
})
