"use client";

/* useRememberMe - Custom Hook
 * Info : This custom hook is used for storing the logged
 * in user's info only if the user wants.
 *
 * This hook provides 2 functions which can be used to get
 * already remembered user's userName or to store the loggedIn
 * user's userName.
 */

interface userDetailsTypes {
  userName: string;
  loggedOn: number;
}

const useRememberMe = () => {
  // getting stored userName
  function getStoredUserName() {
    if (localStorage.hasOwnProperty("stoploss.live")) {
      const storedUsersString = localStorage.getItem("stoploss.live");
      if (storedUsersString && storedUsersString?.length > 0) {
        const storedUsersObj = JSON.parse(storedUsersString);
        return storedUsersObj;
      }
    }
  }

  // storing current userName
  function storeCurrentUserName(userName: string) {
    const userDetails: userDetailsTypes = {
      userName,
      loggedOn: Date.now(),
    };

    localStorage.setItem("stoploss.live", JSON.stringify(userDetails));
  }

  return { getStoredUserName, storeCurrentUserName };
};

export default useRememberMe;
