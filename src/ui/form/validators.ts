export const validateRequired = (
  value: string
): boolean => {

  return value
    .trim()
    .length > 0;

};



export const validateMinLength = (
  value: string,
  min: number
): boolean => {

  return value
    .trim()
    .length >= min;

};



export const validateName = (
  name: string
): boolean => {


  if (!validateRequired(name)) {
    return false;
  }


  return validateMinLength(
    name,
    3
  );

};



export const validatePhone = (
  phone: string
): boolean => {


  if (!validateRequired(phone)) {
    return false;
  }


  /**
   * Aceita:
   *
   * 41999999999
   * (41)99999-9999
   * (41) 99999-9999
   * 41 9999-9999
   *
   */

  const phoneRegex =
    /^\(?\d{2}\)?\s?\d{4,5}[-\s]?\d{4}$/;



  return phoneRegex.test(
    phone.trim()
  );

};



export const validateEmail = (
  email: string
): boolean => {


  if (!email) {
    return true;
  }


  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(email);

};