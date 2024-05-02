import { LRUCache } from "lru-cache";

const TRACKS_TTL =  86400000
const PODCAST_TTL = 86400000

export const podcastCache = new LRUCache({
    ttl: PODCAST_TTL,
    ttlAutopurge: true
})

export const tracksCache = new LRUCache({
    ttl: TRACKS_TTL,
    ttlAutopurge: true
})
