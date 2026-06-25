import { Lead } from "./lead";
import { UTMData } from "./tracking";

export type LeadPayload = {


 tenant:{

  id:string;

  publicKey:string;

 };


 lead:Lead;


 tracking:{


 sessionId:string;

 pageUrl:string;

 landingPage:string;

 referrer:string;

 utm:UTMData;


 };


 source:string;


 timestamp:string;


};