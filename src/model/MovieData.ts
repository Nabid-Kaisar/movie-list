export interface MovieData {
  seqId?: string
  movieName: string
  releasedYear: string
  imdbRating: string
  letterboxdRating: string
  downloadLink?: string
  finishedWatching: boolean
  isDownloaded?: boolean
  deviceContainsDownloadName?: string
  other?: string
}
