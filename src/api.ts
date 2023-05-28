export async function decreaseTokenBalance() {
  return Promise.resolve("Token balance decreased")
}

export async function decreaseToken(origin:number, amount: number) {

  const result = origin - amount
  
  if(result < 0) {
    return false
  } else {
    return result
  }
}