export const validateCredentials = (
  credential: string,
  credentialType: "name" | "password"
): boolean => {
  let credentialValidationStatus: boolean = false;
  if (credentialType === "name") {
    if (credential.length >= 4 && credential.length <= 10) {
      credentialValidationStatus = true;
    } else {
      credentialValidationStatus = false;
    }
  } else if (credentialType === "password") {
    if (credential.length >= 8 && credential.length <= 20) {
      credentialValidationStatus = true;
    } else {
      credentialValidationStatus = false;
    }
  }
  return credentialValidationStatus;
};
