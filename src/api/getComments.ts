import { ICommentProps } from "@/types/comments";

export const getComments = async (id: number): Promise<ICommentProps[] | []> => {
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/comments?postId=${id}`, {
    next: {
      revalidate: 600,
    }
  })
    
  if (!response.ok) {
    throw new Error('error');
  }

  return response.json()
} 