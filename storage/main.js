let myObj = {
  firstName: "Karan",
  lastName: "Pharate"
};
class Cookie {
  storeData(key, value) {
    document.cookie = `${key} = ${value}`;
  }

  get(key) {
    var allCookieArray = document.cookie.split("; ");
    for (let i = 0; i < allCookieArray.length; i++) {
      let temp = allCookieArray[i].split("=");
      if (temp.indexOf(key) == 0) return temp[1];
    }
    return "";
  }

  delete(key) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  }
}

class Storage extends Cookie {
  constructor(localStorage) {
    super();
    this.localStorage = !!localStorage;
  }
  storeData(key, value) {
    if (!this.localStorage) {
      super.storeData(key, value);
      return;
    }
    localStorage.setItem(key, value);
  }

  get(key) {
    if (!this.localStorage) {
      return super.get(key);
    }
    return localStorage.getItem(key);
  }

  delete(key) {
    if (!this.localStorage) {
      super.delete(key);
      return;
    }
    localStorage.removeItem(key);
  }
}

const s1 = new Storage(false);
const s2 = new Storage(false);
const s3 = new Storage(true);

s1.storeData("a", "India");
s2.storeData("myObj", JSON.stringify(myObj));
s3.storeData("b", "Australia");

document.getElementById("item1").innerHTML = s1.get("a");
document.getElementById("item2").innerHTML = s2.get("myObj");
document.getElementById("item3").innerHTML = s3.get("b");
