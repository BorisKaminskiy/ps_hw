import { IPost } from "@/types/posts";

export const getBlog = async (id: number): Promise<IPost | null> => {
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/posts/${id}`, {
    next: {
      revalidate: 600,
    }
  })
    
  if (!response.ok) {
    return null;
  }
 
  return response.json()
} 

export const getBlogs = async (): Promise<IPost[]> => {
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/posts`, {
    next: {
      revalidate: 600,
    }
  })
    
  if (!response.ok) {
    throw new Error('error');
  }

  return response.json()
} 