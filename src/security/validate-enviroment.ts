import {
  getDomain
} from "./get-domain";


export const validateEnvironment = (
  allowedDomains: string[]
): boolean => {

  const currentDomain =
    getDomain();


  console.log(
    "[Security] domínio atual:",
    currentDomain
  );


  console.log(
    "[Security] domínios permitidos:",
    allowedDomains
  );


  return allowedDomains.includes(
    currentDomain
  );

};