import { LRUCache } from "lru-cache";

const TRACKS_TTL =  86400000
const PODCAST_TTL = 86400000

export const tracksCache = new LRUCache({ttl: TRACKS_TTL})
export const PodcastCache = new LRUCache({ttl: PODCAST_TTL})
