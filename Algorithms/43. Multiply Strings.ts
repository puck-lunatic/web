function multiply(num1: string, num2: string): string {
  return (BigInt(num1) * BigInt(num2)).toString();
}

// Digit Calculate
// const addStrings = (num1: string, num2: string): string => {
//   let p1 = num1.length - 1
//   let p2 = num2.length - 1
//   let carry: number = 0

//   const stacked: string[] = []
//   while (p1 >= 0 || p2 >= 0 || carry > 0) {
//       const x1 = p1 >= 0 ? num1[p1].charCodeAt(0) - "0".charCodeAt(0) : 0
//       const x2 = p2 >= 0 ? num2[p2].charCodeAt(0) - "0".charCodeAt(0) : 0

//       const sum: number = x1 + x2 + carry
//       carry = sum >= 10 ? 1 : 0
//       stacked.push(`${sum % 10}`)

//       p1--
//       p2--
//   }

//   return stacked.reverse().join("")
// }

// function multiply(num1: string, num2: string): string {
//   if (num1 === "0" || num2 === "0") return "0"

//   const num1Length = num1.length
//   const response: string[] = []

//   for (let p1 = num1Length - 1; p1 >= 0; p1--) {
//       const digits: string[] = Array(num1Length - p1 - 1).fill("0")
//       let carry: number = 0

//       for (let p2 = num2.length - 1; p2 >= 0; p2--) {
//           const x1 = num1[p1].charCodeAt(0) - "0".charCodeAt(0)
//           const x2 = num2[p2].charCodeAt(0) - "0".charCodeAt(0)
//           const multiplied = x1 * x2 + carry

//           carry = Math.floor(multiplied / 10)
//           digits.push(`${multiplied % 10}`)
//       }

//       if (carry !== 0) digits.push(`${carry}`)
//       response.push(digits.reverse().join(""))
//   }

//   return response.reduce((prev, curr) => addStrings(prev, curr))
// };