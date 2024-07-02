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

export function createTitleURL(title: string): string {
  const title_lower = title.toLowerCase();
  const titleArr = title_lower.split(" ");
  const newTitle = titleArr.join("-");
  return newTitle;
}

// converts a given string into Indian Number System format
// example : 12345 -> 12,345
export function createINRString(val: string | number): string {
  const valArr: string[] = val.toString().split("").reverse();
  let sumFactor = 1;
  for (let i: number = 0; i < valArr.length; i++) {
    if (i > 0 && i % 2 == 0) {
      if (i + sumFactor < valArr.length) {
        valArr.splice(i + sumFactor, 0, ",");
        sumFactor++;
      }
    }
  }
  return valArr.reverse().join("").toString();
}
