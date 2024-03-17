import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', {
  state: () => {
    return {
      PostsList: [] as Post[],
      UsersList: null as User | null,
      SearchQuery: null as string | null,
      FilteredPostsList: [] as Post[],
    }
  },
})
  
interface Post {
  id: number,
  userId: number
  title: string,
  body: number,
}
  
interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    sreet: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}