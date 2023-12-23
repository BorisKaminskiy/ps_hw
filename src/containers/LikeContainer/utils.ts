export const checkId = (id: string) => {
  'use client'
  let key = localStorage.getItem('likes')
 
  if (!key) {
    let likes = new Array
    localStorage.setItem('likes', JSON.stringify(likes))
    return false
  }

  let result = JSON.parse(key)
  if (Array.isArray(result)) {
    return result.find(item => item.replace(/['"]+/g, '') === id)
  }
}


export const setId = (id: string): void => {
  'use client'
  
  let tempArray = localStorage.getItem('likes')
  let result = checkId(id)
  
  if (!result && tempArray) {
    let tempArray1 = JSON.parse(tempArray)
    
    if (Array.isArray(tempArray1)) {
      tempArray1.push(id)
      localStorage.setItem('likes', JSON.stringify(tempArray1))
    }
  }

   return
} 

