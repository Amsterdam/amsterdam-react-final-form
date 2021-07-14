/**
 * Validation method to check if value is valid emaileddress
 */
 export const isValidEmail = ( message = "Vul een geldig e-mailadres in") => (value:string | undefined):string|boolean => {
    if (value === undefined || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
      return false
    }
    return message
  }
  