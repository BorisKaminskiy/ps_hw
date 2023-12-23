import { items } from "@/mocks/items";
import { ItemProps } from "@/types/item";


export const getData = async (): Promise<any> => {
  
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    next: {
      revalidate: 60,
    }
  })
    
  if (!response.ok) throw new Error('error')
 
  return response.json()
} 