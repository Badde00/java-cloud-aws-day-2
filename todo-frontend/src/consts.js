import "react";

// const url = import.meta.env.API_ENDPOINT_URL || "http://beanstalk-aws-iris-flystam-env.eba-ptvqpiup.eu-west-1.elasticbeanstalk.com/";
const url = import.meta.env.API_ENDPOINT_URL || "http://3.252.150.250:5000";
// ensure trailing / is removed 
export const API_URL = url.replace(/\/$/, "");
