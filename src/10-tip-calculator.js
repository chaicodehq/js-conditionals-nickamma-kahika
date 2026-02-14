/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // Your code here
  if(!Number.isInteger(serviceRating) || serviceRating>5 || serviceRating < 1){
    return null;
  }
  if(billAmount <= 0 ){
    return null;
  }

  let ans = {
    tipPercentage : 0,
    tipAmount : 0,
    totalAmount : 0
  }

  if (serviceRating == 1) {
    ans = {
      tipPercentage: 5,
      tipAmount: (billAmount * 0.05),
      totalAmount: Math.ceil((billAmount * 1.05) * 100) / 100,
    };
    return ans;
  } else if (serviceRating == 2) {
    ans = {
      tipPercentage: 10,
      tipAmount: (billAmount * 0.1),
      totalAmount: Math.ceil((billAmount * 1.1) * 100) / 100,
    };
    return ans;
  } else if (serviceRating == 3) {
    ans = {
      tipPercentage: 15,
      tipAmount: (billAmount * 0.15),
      totalAmount: Math.ceil((billAmount * 1.15) * 100) / 100,
    };
    return ans;
  } else if (serviceRating == 4) {
    ans = {
      tipPercentage: 20,
      tipAmount: (billAmount * 0.2),
      totalAmount: Math.ceil((billAmount * 1.2) * 100) / 100,
    };
    return ans;
  } else if (serviceRating == 5) {
    ans = {
      tipPercentage: 25,
      tipAmount: (billAmount * 0.25),
      totalAmount: Math.ceil((billAmount * 1.25) * 100) / 100,
    };
    return ans;
  }


}
