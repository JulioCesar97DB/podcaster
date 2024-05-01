
export const data = async () => {

    const resp = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`)

    const data = await resp.json()

    const apiPodcastList = JSON.parse(data.contents)

    const podcastList = apiPodcastList.feed.entry.map((podcaster) => {
        return {
            id: podcaster["id"]["attributes"]["im:id"],
            summary: podcaster["summary"]["label"],
            author: podcaster["im:artist"]["label"],
            img: podcaster["im:image"][2]["label"],
            title: podcaster["im:name"]["label"]
        }
    })

    return podcastList
}


export const getTracks = async (id) => {

    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}&media=podcast &entity=podcastEpisode&limit=20`)}`
    const resp = await fetch(url)
    const content = await resp.json()
    const data = JSON.parse(content.contents)

    let tracks = []
    
    if (data.results && data.results.length > 1) {

        tracks = data.results.slice(1).map((data) => {

            return {
                date: data.releaseDate.slice(0, 10),
                title: data.trackName,
                duration: new Date(data.trackTimeMillis).toISOString().slice(11, 19),
                episodeUrl: data.episodeUrl,
                description: data.description,
                id: data.trackId

            }
        })

    }

    return tracks

}